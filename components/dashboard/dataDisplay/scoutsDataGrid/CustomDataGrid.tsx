import styles from './CustomDataGrid.module.css';
import React from "react";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import Link from "next/link";
import {CurrentTheme} from "../../../../pages/_app";
import {Typography} from "@mui/material";


export interface ICustomDataGrid {
    data: any, // Set to Any because it is subject to change when data structure is created
    keysToDisplay: Array<string> | "any",
    displayNames: Array<string>,
    width: number,
}

/**
 *
 * NOTE: This will be deleted or done differently whenever possible
 *
 * This creates an MUI Table with rows that are re-arrangeable via draggable handles
 *
 *
 * @param data An array of objects with identical layout
 * @param keysToDisplay Array of strings that are keys for the data you want displayed from the objects
 * @param displayNames Array of strings used for display names of the data; must be aligned with keysToDisplay
 * @param width Width of each column
 */
const CustomDataGrid: React.FC<ICustomDataGrid> = ({data, keysToDisplay, displayNames, width}) => {


    const colsStrings = keysToDisplay === "any" ? data.keys() : keysToDisplay;
    const columns: GridColDef[] = colsStrings.map((key: string, idx: number) => {
        let temp: { [k: string]: any } =
            {
                field: key,
                headerName: displayNames[idx],
                width: width
            }
        idx === 0 ? temp.renderCell = (params: any) => {
            console.log(params);
            return <Link passHref href={`/dashboard/scouts/list/${params.row.name}`}>
                <Typography color={CurrentTheme().palette.text.primary} sx={{cursor: "pointer"}}>
                    {params.row.name}
                </Typography>
            </Link>
        } : null;
        return temp;
    })

    const rows = data.map((item: object, idx: number) => {

        let keys = Object.keys(item);
        let result: { [k: string]: any } = {};
        columns.map((entry, index) => {
            result[entry.field] = item[keys[index] as keyof typeof item];
        })
        result.id = idx;
        return result;
    })


    return (
        <div className={styles.container}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
};


export default CustomDataGrid;



