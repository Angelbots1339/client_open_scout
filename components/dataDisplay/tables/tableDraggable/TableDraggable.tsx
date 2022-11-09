import styles from './TableDraggable.module.css';
import React, {useEffect, useState} from "react";
import {Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {DragHandle} from "@mui/icons-material";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";


export interface ITableDraggable {
    data: object,
    headerName: string,
    keysToDisplay: Array<string> | "any",
    displayNames: Array<string>,

}

/**
 * This creates an MUI Table with rows that are re-arrangeable via draggable handles
 *
 *
 * @param data This is the object with all your data. It must be several objects with identical keys, not an array of objects
 * @param headerName Main header text
 * @param keysToDisplay Array of strings that are keys for the data you want displayed from the objects
 * @param displayNames Array of strings used for display names of the data; must be aligned with keysToDisplay
 */
const TableDraggable: React.FC<ITableDraggable> = ({data, headerName, keysToDisplay, displayNames}) => {



    const [rowsList, setRowsList] = useState(Object.keys(data));

    const reorder = (array: string[], startIndex: number, endIndex: number) => {
        const [removed] = array.splice(startIndex, 1);
        array.splice(endIndex, 0, removed);

        return array;
    };

    const onDragStart = () => {
        /*...*/
    };
    const onDragUpdate = () => {
        /*...*/
    };
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        setRowsList(reorder(
            rowsList,
            result.source.index,
            result.destination.index
        ));
    };

    const [winReady, setWinReady] = useState(false);

    useEffect(() => {

        setWinReady(true);



    }, [])

    return (
        <div className={styles.container}>
            <DragDropContext
                onDragStart={onDragStart}
                onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
                <TableContainer component={Paper} className={styles.table}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{headerName}</TableCell>
                                {displayNames.map((name) => (
                                    <TableCell align="right" key={name}>{name}</TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        {winReady &&
                            <Droppable droppableId="droppable">
                                {(provided) => (
                                    <tbody
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={styles.tbody}
                                    >
                                    {rowsList.map((row, index) => (
                                        <DragRow key={row} rowData={data[row as keyof typeof data]} row={row}
                                                 index={index} keysToDisplay={keysToDisplay}/>
                                    ))}
                                    {provided.placeholder}
                                    </tbody>)}
                            </Droppable>}
                    </Table>
                </TableContainer>
            </DragDropContext>
        </div>
    )
};

interface IDragRow {
    rowData: {},
    row: string,
    index: number,
    keysToDisplay: Array<string> | "any",
}

const DragRow: React.FC<IDragRow> = ({rowData, row, index, keysToDisplay}) => {


    const keys = Object.keys(rowData);

    return (
        <Draggable key={row} draggableId={row} index={index}>
            {(provided, snapshot) => (
                <tr
                    key={row}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={snapshot.isDragging ? styles.rowDragging : styles.rowNotDragging}
                >
                    <TableCell className={styles.cell} component="th" scope="row" key={row}
                               sx={{display: "flex"}}>
                        <div className={styles.handle} {...provided.dragHandleProps}>
                            <DragHandle fontSize={"medium"}/>
                        </div>
                        <Button color={"inherit"} variant={"text"}
                                href={"/dashboard/scouts/" + row}>
                            <Typography>{row}</Typography>
                        </Button>
                    </TableCell>

                    {!snapshot.isDragging && keysToDisplay != "any" ? keysToDisplay.map((key) => (
                            <TableCell className={styles.cell} align="right" key={key}>
                                <Typography>{rowData[key as keyof typeof rowData]}</Typography>
                            </TableCell>
                        ))
                        : keys.map((key) => (
                            <TableCell className={styles.cell} align="right" key={key}>
                                <Typography>{rowData[key as keyof typeof rowData]}</Typography>
                            </TableCell>
                        ))
                    }
                </tr>)}
        </Draggable>

    );
}

export default TableDraggable;



