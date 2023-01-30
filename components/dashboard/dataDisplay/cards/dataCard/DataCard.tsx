import styles from './DataCard.module.css';
import React from "react";
import {Box, Card, CardContent, CardHeader, Grid} from "@mui/material";



export interface IDataCard {

    title: string;
    size: "small" | "medium" | "large";
    children: React.ReactNode;


}


const DataCard: React.FC<IDataCard> = ({title, size, children}) => {

    const gridSizePropsSmall: {xs: number, sm: number, md: number, lg: number, xl: number} = {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 3
    }
    const gridSizePropsMedium: {xs: number, sm: number, md: number, lg: number, xl: number} = {
        xs: 12,
        sm: 8,
        md: 8,
        lg: 6,
        xl: 6
    }
    const gridSizePropsLarge: {xs: number, sm: number, md: number, lg: number, xl: number} = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const heightSmall: number = 250;
    const heightMedium: number = 500;
    const heightLarge: number = 500;


    return (
            <Grid item {...size === "large" ? gridSizePropsLarge : size === "medium" ? gridSizePropsMedium : gridSizePropsSmall} className={styles.container}>
                <Card sx={{width:"100%", height:size === "large" ? heightLarge : size === "medium" ? heightMedium : heightSmall}}>
                    <CardHeader title={title} titleTypographyProps={{variant: "h4", className:styles.titleTypography}}/>
                    <CardContent sx={{justifyContent: "center", alignItems:"center"}}>
                        <Box sx={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
                            {children}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
    )
};


export default DataCard;



