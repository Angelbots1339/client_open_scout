import styles from './TableDraggable.module.css';
import React, {useEffect, useState} from "react";
import {Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {DragHandle} from "@mui/icons-material";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";




export interface ITableDraggable {
    data: Array<object>,
    nameKey: string,
    headerName: string,
    keysToDisplay: Array<string> | "any",
    displayNames: Array<string>,

}



const TableDraggable: React.FC<ITableDraggable> = ({data, nameKey, headerName, keysToDisplay, displayNames}) => {

    const [rowsList, setRowsList] = useState(data);

    const reorder = (array: object[], startIndex: number, endIndex: number) => {
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
                            <DragRow key={row[nameKey as keyof typeof row]} row={row} nameKey={nameKey} index={index} keysToDisplay={keysToDisplay}/>
                              ))}
                      {provided.placeholder}
                              </tbody> )}
                      </Droppable> }
              </Table>
          </TableContainer>
          </DragDropContext>
      </div>
  )};

interface IDragRow {
    row: {},
    nameKey: string,
    index: number,
    keysToDisplay: Array<string> | "any",
}

const DragRow: React.FC<IDragRow> = ({row, nameKey, index, keysToDisplay}) => {


    const keys = Object.keys(row);
    keys.splice(keys.indexOf(nameKey), 1);

    return (
        <Draggable key={row[nameKey as keyof typeof row]} draggableId={row[nameKey as keyof typeof row]} index={index}>
            {(provided, snapshot) => (
                <tr
                    key={row[nameKey as keyof typeof row]}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={snapshot.isDragging ? styles.rowDragging : styles.rowNotDragging}
                    >
                        <TableCell className={styles.cell} component="th" scope="row" key={row[nameKey as keyof typeof row]} sx={{display:"flex"}}>
                    <div className={styles.handle} {...provided.dragHandleProps}>
                            <DragHandle fontSize={"medium"}/>
                            </div>
                                <Button color={"inherit"} variant={"text"} href={"/dashboard/scouts/" + row[nameKey as keyof typeof row]}>
                                    <Typography>{row[nameKey as keyof typeof row]}</Typography>
                                </Button>
                        </TableCell>

                        {keysToDisplay != "any" ? keysToDisplay.map((key) => (
                                <TableCell className={styles.cell} align="right" key={row[key as keyof typeof row]}>
                                    <Typography>{row[key as keyof typeof row]}</Typography>
                                </TableCell>
                            ))
                            : keys.map((key) => (
                                <TableCell className={styles.cell} align="right" key={row[key as keyof typeof row]}>
                                    <Typography>{row[key as keyof typeof row]}</Typography>
                                </TableCell>
                            ))
                        }
                    </tr> )}
        </Draggable>

    );
}

export default TableDraggable;



