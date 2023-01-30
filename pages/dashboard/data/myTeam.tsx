import React, {ReactElement, SyntheticEvent, useState} from "react";
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../../_app";
import {Autocomplete, Box, Card, Grid, TextField, Typography} from "@mui/material";
import DataCard from "../../../components/dashboard/dataDisplay/cards/dataCard/DataCard";
import NivoLine from "../../../components/dashboard/dataDisplay/nivo/nivoLine/NivoLine";


const DashboardMyTeam: PageWithLayout = () => {

    const testGraphData = [
        {
            id: "test1",
            data: [
                {
                    x: 1,
                    y: 1
                }, {
                    x: 2,
                    y: 4
                }, {
                    x: 3,
                    y: 1
                }, {
                    x: 4,
                    y: 1
                }, {
                    x: 5,
                    y: 5
                }
            ]
        }, {
            id: "test2",
            data: [
                {
                    x: 1,
                    y: 4
                }, {
                    x: 2,
                    y: 3
                }, {
                    x: 3,
                    y: 0
                }, {
                    x: 4,
                    y: 1
                }, {
                    x: 5,
                    y: 1
                }
            ]
        }
    ]
    const testYears = ["2023 Charged Up", "2022 Rapid React"];
    const testComps: any = {
        "2023 Charged Up": ["St Louis Regional", "Colorado Regional"],
        "2022 Rapid React": ["Orange County Regional", "Colorado Regional"]
    }

    const [selectedYear, setSelectedYear] = useState(testYears[0]);


    const handleYearChange = (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
        setSelectedYear(newValue || testYears[0]);
    }

    return (<>
        <Box marginTop={5}>
            <Grid container spacing={2} sx={{width: "97.5%", height: "auto", ml: "1.25%"}} columns={12}>
                <Grid direction={"row-reverse"} container spacing={2} sx={{width: "100%"}} columns={12}>
                    <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
                        <Box sx={{mt: 2, ml: 5}}>
                            <Grid direction={"row-reverse"} container spacing={2} sx={{width: "100%"}} columns={12}>
                                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                    <Autocomplete
                                        disablePortal
                                        onChange={handleYearChange}
                                        defaultValue={testYears[0]}
                                        id="YearSelect"
                                        options={testYears}
                                        sx={{width: 225}}
                                        renderInput={(params) => <TextField {...params} label="Year"/>}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        defaultValue={testComps[selectedYear][0]}
                                        id="CompetitionSelect"
                                        options={testComps[selectedYear]}
                                        sx={{width: 225, mt: 2}}
                                        renderInput={(params) => <TextField {...params} label="Competition"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                                    <Typography variant={"h2"}>Angelbotics</Typography>
                                    <Typography variant={"h3"}>1339</Typography>
                                    <Typography variant={"h5"}>Denver, Colorado, USA</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        {/*<Image src={}/>*/}
                        <Card sx={{width: "100%", height: "100%"}}>Image Goes Here</Card>
                    </Grid>
                </Grid>


                <DataCard title={"Test Medium"} size={"medium"}>
                    <Box width={"100%"} sx={{mb: 5}}>
                        <NivoLine size={"medium"} props={{
                            data: testGraphData,
                            xLabel: "Time",
                            yLabel: "Value",
                            title: "Test",
                            margin: {top: 50, right: 50, bottom: 0, left: 50},
                            gridYValues: [1, 2, 3, 4, 5],
                        }}/>
                    </Box>
                </DataCard>
                <DataCard title={"Test Small"} size={"small"}>
                    <Typography variant={"h5"}>Test</Typography>
                </DataCard>
                <DataCard title={"Test Small"} size={"small"}>
                    <Typography variant={"h5"}>Test</Typography>
                </DataCard>
                <DataCard title={"Test Large"} size={"large"}>
                    <NivoLine size={"large"} props={{
                        data: testGraphData,
                        xLabel: "Time",
                        yLabel: "Value",
                        title: "Test",
                        margin: {top: 50, right: 50, bottom: 0, left: 50},
                        gridYValues: [1, 2, 3, 4, 5],
                    }}/>
                </DataCard>
            </Grid>
        </Box>

    </>);
}

DashboardMyTeam.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardMyTeam;
