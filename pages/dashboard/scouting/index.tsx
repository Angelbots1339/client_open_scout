import React, {useEffect, useRef, useState, SyntheticEvent} from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Button,
    Dialog,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    Box,
    Fab,
    Stack,
    CircularProgress,
    Autocomplete,
    TextField,
    Alert,
    DialogTitle,
    DialogContentText,
    DialogContent, DialogActions
} from "@mui/material";
import {PrecisionManufacturing, VideogameAsset, Leaderboard, AppRegistration, Delete, Undo} from "@mui/icons-material";
import Image from "next/image";
import CubeImage from "../../../public/images/scouting/teleop/CubeRotoscoped.png";
import ConeImage from "../../../public/images/scouting/teleop/ConeRotoscoped.png";
import {animated, useSpring} from "@react-spring/web";
import AutoFieldSVG from "../../../public/images/scouting/auto/AutoField";
import AutoFieldHorizontalSVG from "../../../public/images/scouting/auto/AutoFieldHorizontal";
// import axios from "axios";
import useSWR from "swr";
import axios from "axios";
// import PrematchPlacementSVG from "../../../public/images/scouting/prematch/PrematchPlacement";


const DashboardScouting = () => {

    const APIServerURL = "https://openscoutapi.onrender.com";
    // const APIServerURL = "https://localhost:3001";

    const currentCompetitionCode = "2023utwv";


    // const hasWindow = typeof window !== 'undefined';

    // function getWindowDimensions() {
    //     const width = hasWindow ? window.innerWidth : null;
    //     const height = hasWindow ? window.innerHeight : null;
    //     return {
    //         width,
    //         height,
    //     };
    // }

    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // useEffect(() => {
    //     if (hasWindow) {
    //         const handleResize = () => {
    //             setWindowDimensions(getWindowDimensions());
    //         }
    //         handleResize();
    //         // Use this to handle window resizing. I found it causes buggy behavior on mobile if you use the scroll-up-to-reload page feature
    //         //window.addEventListener('resize', handleResize);
    //         //return () => window.removeEventListener('resize', handleResize);
    //     }
    // }, [hasWindow]);

    function mapRange(value: number, r1: number[], r2: number[]) {
        return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
    }


    // const [data, setData] = useState<MatchScoutI>({
    //     "_id": "",
    //     "auto": {
    //         "startingPosition": {
    //             "x": 0,
    //             "y": 0,
    //         },
    //         "mobility": false,
    //         "chargingStation": false,
    //         "path": [],
    //     },
    //     "cycles": [],
    //     "onChargeStationEnd": false,
    // });


    // @ts-ignore
    const matchFetcher = (...args: any) => fetch(...args).then(res => {

        let final = res.json().then((data) => {



            // @ts-ignore
            // data[Math.max(Object.keys(data).map((string) => parseInt(string))) + 1] = "Practice Match";
            data["practiceMatch"] = "Practice Match";
            // console.log(data);
            return data;
        });

        return final;
    });
    // @ts-ignore
    const teamFetcher = (...args: any) => fetch(...args).then(res => res.json());

    const [activeStep, setActiveStep] = React.useState(0); // Current Nav Tab

    const topColor = "#c9d0fd";
    const midColor = "#dfc7fa";
    const hybridColor = "#fac5ea";
    const failColor = "#fca6a6";


    const shelfColor = "#f8d4ba";
    const groundColor = "#fcf3b6";
    const tippedColor = "#e4ffc7";

    const BottomNav = () => {
        return (<>
            <BottomNavigation
                showLabels
                value={activeStep}
                onChange={(event, newValue) => {
                    setActiveStep(newValue);
                }}
            >
                <BottomNavigationAction key={"prematch"} label={"Pre-Match"} icon={<AppRegistration/>}/>
                <BottomNavigationAction key={"auto"} label={"Auto"} icon={<PrecisionManufacturing/>}/>
                <BottomNavigationAction key={"teleop"} label={"Teleop"} icon={<VideogameAsset/>}/>
                <BottomNavigationAction key={"endgame"} label={"Endgame"} icon={<Leaderboard/>}/>
            </BottomNavigation>
        </>)
    }


    const [preload, setPreload] = useState<"none" | "cube" | "cone">("none");
    // @ts-ignore
    const [team, setTeam] = useState<any>({
        "address": null,
        "city": "",
        "country": "",
        "gmaps_place_id": null,
        "gmaps_url": null,
        "key": "frc0",
        "lat": null,
        "lng": null,
        "location_name": null,
        "motto": null,
        "name": "Test Name",
        "nickname": "Loading...",
        "postal_code": "",
        "rookie_year": 0,
        "school_name": "",
        "state_prov": "",
        "team_number": 0,
        "website": "",
    });
    const [currentMatch, setCurrentMatch] = useState<string>("");

    // const { data: possibleTeams, error: possibleTeamsLoadingError, isLoading: isPossibleTeamsLoading} = useSWR("http://172.18.178.204:3001/2023/event/2023mosl/teams", matchFetcher);
    const {
        data: possibleTeams,
        error: possibleTeamsLoadingError,
        isLoading: isPossibleTeamsLoading
    } = useSWR(APIServerURL + '/2023/event/' + currentCompetitionCode + '/tbaTeams', teamFetcher, {
        fallbackData: {
            "0": {
                "address": null,
                "city": "",
                "country": "",
                "gmaps_place_id": null,
                "gmaps_url": null,
                "key": "frc0",
                "lat": null,
                "lng": null,
                "location_name": null,
                "motto": null,
                "name": "Test Name",
                "nickname": "Loading...",
                "postal_code": "",
                "rookie_year": 0,
                "school_name": "",
                "state_prov": "",
                "team_number": 0,
                "website": "",
            }
        }
    });
    const {
        data: possibleMatches,
        error: possibleMatchesLoadingError,
        isLoading: isPossibleMatchesLoading
    } = useSWR(APIServerURL + '/2023/event/' + currentCompetitionCode + '/matches/keys/', matchFetcher, {
        fallbackData: {
            "0": "Loading..."
        }
    });



    useEffect(() => {

        if (possibleTeamsLoadingError) {
            setTeamLoadError("Error loading teams");
        }
        if (possibleMatchesLoadingError) {
            setMatchLoadError("Error loading matches");
        }
    }, [possibleTeamsLoadingError, possibleMatchesLoadingError])

    const [teamLoadError, setTeamLoadError] = useState<string>("");
    const [matchLoadError, setMatchLoadError] = useState<string>("");

    useEffect(() => {
        if (teamLoadError != "") {
            setTimeout(() => {
                setTeamLoadError("");
            }, 5000);
        }
        if (matchLoadError != "") {
            setTimeout(() => {
                setMatchLoadError("");
            }, 5000);
        }
    }, [teamLoadError, matchLoadError])

    const [{startPosX, startPosY}, setStartPos] = useState({startPosX: 0, startPosY: 0})

    const [{startPosSpringX, startPosSpringY}, startPosApi] = useSpring(() => ({
        startPosSpringX: startPosX,
        startPosSpringY: startPosY,
        config: {
            mass: 0.1,
            friction: 6,
        }
    }))


    const TeamAndMatchSelect: React.FC = () => {
        return (
            <>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Autocomplete
                        disablePortal
                        disableClearable
                        onChange={(event: SyntheticEvent<Element, Event>, newValue: number | null) => {
                            if (newValue !== null) {
                                setTeam(newValue);
                            }
                        }}
                        defaultValue={team}
                        id="TeamSelect"
                        options={Object.keys(possibleTeams).map((team: any) => {
                            return possibleTeams[team];
                        })}
                        getOptionLabel={(option) => option.team_number != "" ? option.team_number + " " + option.nickname : ""}
                        isOptionEqualToValue={(option, value) => option.team_number === value.team_number}
                        sx={{minWidth: 200, maxWidth: 350, mt: 2}}
                        fullWidth
                        loading={isPossibleTeamsLoading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Team"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {isPossibleTeamsLoading ?
                                                <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Autocomplete
                        disablePortal
                        disableClearable
                        onChange={(event: SyntheticEvent<Element, Event>, newValue: string | null) => {
                            if (newValue !== null) {
                                setCurrentMatch(newValue);
                            }
                        }}
                        defaultValue={currentMatch}
                        id="MatchSelect"
                        options={Object.keys(possibleMatches).map((match: any) => {
                            if(match === "practiceMatch") {
                                return "Practice Practice Match"
                            }
                            return possibleMatches[match];
                        })}
                        getOptionLabel={(option) => {
                            if(option === "Practice Match") {
                                return "Practice Match"
                            }
                            return option.slice(currentCompetitionCode.length + 1, option.length)
                        }}                        isOptionEqualToValue={(option, value) => option === value}
                        sx={{minWidth: 200, maxWidth: 350, mt: 2}}
                        fullWidth
                        loading={isPossibleMatchesLoading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Match"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {isPossibleMatchesLoading ?
                                                <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Box>
                <Box sx={{display: {xs: 'block', sm: 'none'}, width: "95%", ml: "2.5%", justifyContent: "center"}}>
                    <Autocomplete
                        disablePortal
                        disableClearable
                        onChange={(event: SyntheticEvent<Element, Event>, newValue: number | null) => {
                            if (newValue !== null) {
                                setTeam(newValue);
                            }
                        }}
                        defaultValue={team}
                        id="TeamSelect"
                        options={Object.keys(possibleTeams).map((team: any) => {
                            return possibleTeams[team];
                        })}
                        getOptionLabel={(option) => option.team_number != "" ? option.team_number + " " + option.nickname : ""}
                        isOptionEqualToValue={(option, value) => option.team_number === value.team_number}
                        sx={{width: 350, mt: 2}}
                        loading={isPossibleTeamsLoading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Team"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {isPossibleTeamsLoading ?
                                                <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Autocomplete
                        disablePortal
                        disableClearable
                        onChange={(event: SyntheticEvent<Element, Event>, newValue: string | null) => {
                            if (newValue !== null) {
                                setCurrentMatch(newValue);
                            }
                        }}
                        defaultValue={currentMatch}
                        id="MatchSelect"
                        options={Object.keys(possibleMatches).map((match: any) => {
                            if(match === "practiceMatch") {
                                return "Practice Practice Match"
                            }
                            return possibleMatches[match];
                        })}
                        getOptionLabel={(option) => {
                            if(option === "Practice Match") {
                                return "Practice Match"
                            }
                            return option.slice(currentCompetitionCode.length + 1, option.length)
                        }}
                        isOptionEqualToValue={(option, value) => option === value}
                        sx={{width: 350, mt: 2}}
                        loading={isPossibleMatchesLoading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Match"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {isPossibleMatchesLoading ?
                                                <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    {teamLoadError != "" && <Alert severity="error"> {teamLoadError} </Alert>}
                    {matchLoadError != "" && <Alert severity="error"> {matchLoadError} </Alert>}
                </Box>
            </>)
    }

    const PrematchPage = () => {
        const prematchFieldRefMobile = useRef(null);
        const prematchFieldRefDesktop = useRef(null);

        const convertToPercent = (x: number, y: number, ref: any) => {
            // @ts-ignore
            const newX = mapRange(x, [0, ref.current ? ref.current.clientWidth : 1], [0, 1]);
            // @ts-ignore
            const newY = mapRange(y, [0, ref.current ? ref.current.clientHeight : 1], [0, 1]);
            return {x: newX, y: newY};
        }
        const boxSize: number = 25;


        // @ts-ignore
        // @ts-ignore
        return (<>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <img ref={prematchFieldRefDesktop} src="/images/scouting/prematch/PrematchFieldHorizontal.svg"
                             alt="Field Picture"
                             onClick={(e) => {
                                 startPosApi.start({ // Move Cube Visually
                                     startPosSpringX: e.nativeEvent.offsetX - boxSize / 2,
                                     startPosSpringY: e.nativeEvent.offsetY - boxSize / 2
                                 })
                                 setStartPos({ // Change the saved start position
                                     //@ts-ignore
                                     startPosY: 1 - convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prematchFieldRefDesktop).x,
                                     //@ts-ignore
                                     startPosX: convertToPercent(e.nativeEvent.offsetY, e.nativeEvent.offsetY, prematchFieldRefDesktop).y
                                 });
                             }}
                            // @ts-ignore
                            // eslint-disable-next-line no-constant-condition
                            //  width={getWindowDimensions().width ? getWindowDimensions().width : 1 > 400 ? "80%" : "95%"}
                             width={"100%"}
                             height={"auto"}
                        />
                    </Box>
                    <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                        <img ref={prematchFieldRefMobile} src="/images/scouting/prematch/PrematchField.svg"
                             alt="Field Picture"
                             onClick={(e) => {
                                 startPosApi.start({
                                     startPosSpringX: e.nativeEvent.offsetX - boxSize / 2,
                                     startPosSpringY: e.nativeEvent.offsetY - boxSize / 2
                                 })
                                 setStartPos({
                                     //@ts-ignore
                                     startPosX: convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prematchFieldRefMobile).x,
                                     //@ts-ignore
                                     startPosY: convertToPercent(e.nativeEvent.offsetY, e.nativeEvent.offsetY, prematchFieldRefMobile).y
                                 });
                             }}
                            // @ts-ignore
                            // eslint-disable-next-line no-constant-condition
                            //  width={getWindowDimensions().width ? getWindowDimensions().width : 1 > 400 ? "80%" : "95%"}
                             width={"100%"}
                             height={"auto"}
                        />
                    </Box>
                    <animated.div style={{
                        x: startPosSpringX,
                        y: startPosSpringY,
                        width: boxSize,
                        height: boxSize,
                        backgroundColor: '#07a900',
                        touchAction: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 56
                    }}/>
                </Grid>
                <Grid item xs={12} sm={5} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <div>
                            <Typography variant="h6" color={"text.primary"}>Preload</Typography>
                            <ToggleButtonGroup
                                value={preload}
                                exclusive
                                defaultValue={"none"}
                                orientation="vertical"
                                onChange={(event, value) => {
                                    if (value !== null) {
                                        setPreload(value);
                                    }
                                }}
                                aria-label="charging station position"
                                size="large"
                            >
                                <ToggleButton sx={{width: 100, height: 100}} value="none"
                                              aria-label="No Preload">
                                    None
                                </ToggleButton>
                                <ToggleButton sx={{width: 100, height: 100}} value="cube" aria-label="Cube Preload">
                                    <Image src={CubeImage} width={100} height={100} alt={"Cube"}/>
                                </ToggleButton>
                                <ToggleButton sx={{width: 100, height: 100}} value="cone"
                                              aria-label="Cone Preload">
                                    <Image src={ConeImage} width={100} height={100} alt={"Cone"}/>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <Stack alignItems="center">
                            <TeamAndMatchSelect/>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={5} sx={{display: {xs: 'block', sm: 'none'}}}>
                    <Typography variant="h6" color={"text.primary"}>Preload</Typography>
                    <ToggleButtonGroup
                        value={preload}
                        exclusive
                        defaultValue={"none"}
                        onChange={(event, value) => {
                            if (value !== null) {
                                setPreload(value);
                            }
                        }}
                        aria-label="Preload"
                        size="large"
                    >
                        <ToggleButton sx={{width: 100, height: 100}} value="none"
                                      aria-label="No Preload">
                            None
                        </ToggleButton>
                        <ToggleButton sx={{width: 100, height: 100}} value="cube" aria-label="Cube Preload">
                            <Image src={CubeImage} width={100} height={100} alt={"Cube"}/>
                        </ToggleButton>
                        <ToggleButton sx={{width: 100, height: 100}} value="cone"
                                      aria-label="Cone Preload">
                            <Image src={ConeImage} width={100} height={100} alt={"Cone"}/>
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <TeamAndMatchSelect/>
                </Grid>
                {/*<Grid item xs={12} sm={6} sx={{display: {xs: 'block', sm: 'block'}}}>*/}
                {/**/}
                {/*<PrematchPlacementSVG setPrematchPlacement={setPrematchPiecePlacement} getPrematchPlacement={() => prematchPiecePlacement}/>*/}
                {/**/}
                {/*<Box ref={prematchPlacementRef} sx={{backgroundImage: "url(/images/scouting/prematch/PrematchPlacement.svg)", backgroundRepeat: "no-repeat", width: "100%", height:100, justifyContent: 'space-evenly'}}>*/}
                {/*<img ref={prematchPlacementRef} src="/images/scouting/prematch/PrematchPlacement.svg" alt="Field Picture"*/}
                {/*     width={"100%"}*/}
                {/*     height={"auto"}*/}
                {/*/>*/}
                {/*    <Image src={CubeImage} width={50} height={50}/>*/}
                {/*    <Image src={ConeImage} width={50} height={50}/>*/}
                {/*    <Image src={CubeImage} width={50} height={50}/>*/}
                {/*    <Image src={ConeImage} width={50} height={50}/>*/}
                {/*</Box>*/}
                {/*</Grid>*/}
            </Grid>
        </>)
    }

    const [isOnChargeStationAuto, setIsOnChargeStationAuto] = useState<"none" | "docked" | "engaged">("none");
    const [autoMobility, setAutoMobility] = useState<boolean>(false);

    const [autoPositions, setAutoPositions] = useState<AutoPositionsI[]>([])

    const [autoPlacementPopup, setAutoPlacementPopup] = useState<boolean>(false);
    const [queuedAutoPlacement, setQueuedAutoPlacement] = useState<AutoPositionsI>({type: "cube", id: 0, y: 0.1});

    const autoPickupPositionsY: AutoPositionsI[] = [
        {type: "pickup", id: 0, y: 2 / 13},
        {type: "pickup", id: 1, y: 5 / 13},
        {type: "pickup", id: 2, y: 8 / 13},
        {type: "pickup", id: 3, y: 11 / 13}];

    const autoPlacementPositionsY: AutoPositionsI[] = [
        {type: "cube", id: 0, y: 0.1},
        {type: "cone", id: 0, y: 0.2}, // Cone
        {type: "cube", id: 1, y: 0.28},
        {type: "cube", id: 2, y: .4},
        {type: "cone", id: 1, y: 0.5}, // Cone
        {type: "cube", id: 3, y: .6},
        {type: "cube", id: 4, y: .7},
        {type: "cone", id: 2, y: .82}, // Cone
        {type: "cube", id: 5, y: .9},

    ];

    useEffect(() => {
        setAutoPositions([]);
    }, [])

    const AutoPage = () => {

        const autoFieldRefMobile = useRef<HTMLImageElement>(null);
        const autoFieldRefDesktop = useRef<HTMLImageElement>(null);

        const convertToPercent = (x: number, y: number, ref: any) => {
            // @ts-ignore
            const newX = mapRange(x, [0, ref.current ? ref.current.clientWidth : 1], [0, 1]);
            // @ts-ignore
            const newY = mapRange(y, [0, ref.current ? ref.current.clientHeight : 1], [0, 1]);
            return {x: newX, y: newY};
        }

        const handleAutoPlacementClick = (e: any, ref: any, desktop: boolean) => {

            if (autoMobility) {
                setAutoMobility(false);
            }

            let coords = {
                x: desktop ? convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, ref).y : convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, ref).x, // X and Y are flipped because the SVG is rotated 90 degrees
                y: desktop ? 1 - convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, ref).x : convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, ref).y// X needs to be inverted here
            }
            let tempPosition: AutoPositionsI;
            if (coords.x > 0.5) {
                let prevBest = 0;
                autoPickupPositionsY.map((position, idx) => {
                    Math.abs(position.y - coords.y) < Math.abs(autoPickupPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
                })
                tempPosition = autoPickupPositionsY[prevBest];
                if (autoPositions.filter(function (entry) {
                    // @ts-ignore
                    return entry.type === tempPosition.type && entry.id === tempPosition.id;
                }).length === 0) {
                    setAutoPositions((a) => [...a, tempPosition]);
                }
            } else {
                let prevBest = 0;
                autoPlacementPositionsY.map((position, idx) => {
                    Math.abs(position.y - coords.y) < Math.abs(autoPlacementPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
                })
                tempPosition = autoPlacementPositionsY[prevBest];
                setAutoPlacementPopup(true);
                setQueuedAutoPlacement(tempPosition);
            }
            // console.log(tempPosition);
        }

        return (<>

            <Dialog open={autoPlacementPopup} onClose={() => {
                setAutoPlacementPopup(false);
            }}
            >
                <Paper sx={{width: "300", height: "auto"}}>
                    <DialogTitle>{"Placement"}</DialogTitle>
                    <DialogContent>
                    <Grid container columns={12}>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: topColor}}
                                variant={"contained"}
                                onClick={() => {
                                    setAutoPlacementPopup(false);
                                    setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "top"}]);
                                }}>
                            <Typography variant="h5">Top</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: midColor}}
                                variant={"contained"}
                                onClick={() => {
                                    setAutoPlacementPopup(false);
                                    setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "mid"}]);
                                }}>
                            <Typography variant="h5">Middle</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: hybridColor}}
                                variant={"contained"}
                                onClick={() => {
                                    setAutoPlacementPopup(false);
                                    setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "hybrid"}]);
                                }}>
                            <Typography variant="h5">Hybrid</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: failColor}}
                                variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setAutoPlacementPopup(false);
                                    setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "fail"}]);
                                }}>
                            <Typography variant="h5">Fail</Typography>
                        </Button>
                    </Grid>
                    </DialogContent>
                </Paper>
            </Dialog>

            {/*<Dialog open={autoPlacementPopup} onClose={() => {*/}
            {/*    setAutoPlacementPopup(false);*/}
            {/*}}*/}
            {/*>*/}
            {/*    <Paper sx={{width: "300", height: "auto", display: {xs: "none", sm: "block"}}}>*/}
            {/*        <Grid container columns={12}>*/}
            {/*            <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: topColor}}*/}
            {/*                    variant={"contained"}*/}
            {/*                    onClick={() => {*/}
            {/*                        setAutoPlacementPopup(false);*/}
            {/*                        setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "top"}]);*/}
            {/*                    }}>*/}
            {/*                <Typography variant="h5">Top</Typography>*/}
            {/*            </Button>*/}
            {/*            <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: midColor}}*/}
            {/*                    variant={"contained"}*/}
            {/*                    onClick={() => {*/}
            {/*                        setAutoPlacementPopup(false);*/}
            {/*                        setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "mid"}]);*/}
            {/*                    }}>*/}
            {/*                <Typography variant="h5">Middle</Typography>*/}
            {/*            </Button>*/}
            {/*            <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: hybridColor}}*/}
            {/*                    variant={"contained"}*/}
            {/*                    onClick={() => {*/}
            {/*                        setAutoPlacementPopup(false);*/}
            {/*                        setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "hybrid"}]);*/}
            {/*                    }}>*/}
            {/*                <Typography variant="h5">Hybrid</Typography>*/}
            {/*            </Button>*/}
            {/*            <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: failColor}}*/}
            {/*                    variant={"contained"}*/}
            {/*                    color="inherit"*/}
            {/*                    onClick={() => {*/}
            {/*                        setAutoPlacementPopup(false);*/}
            {/*                        setAutoPositions(a => [...a, {...queuedAutoPlacement, height: "fail"}]);*/}
            {/*                    }}>*/}
            {/*                <Typography variant="h5">Fail</Typography>*/}
            {/*            </Button>*/}
            {/*        </Grid>*/}
            {/*    </Paper>*/}
            {/*</Dialog>*/}

            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={8}>
                    {/*<GamePieceDialog setNewAction={setNewAutoAction} actionList={autoActionList} setActionList={setAutoActionList} onlyPlacement/>*/}
                    {/**** Desktop ****/}
                    <Box ref={autoFieldRefDesktop}
                         sx={{display: {xs: 'none', sm: 'block'}, width: '100%', height: 'auto'}}>
                        <AutoFieldHorizontalSVG numberLocations={autoPositions.map((entry) => {
                            return {type: entry.type, id: entry.id, y: entry.y, height: entry.height};
                        })}
                                                onClick={(e: any) => {
                                                    handleAutoPlacementClick(e, autoFieldRefDesktop, true);
                                                }}/>
                    </Box>

                    {/**** Mobile ****/}
                    <Box ref={autoFieldRefMobile} sx={{display: {xs: 'block', sm: 'none'}, width: "80%", ml: "10%"}}>
                        <AutoFieldSVG numberLocations={autoPositions.map((entry) => {
                            return {type: entry.type, id: entry.id, y: entry.y, height: entry.height};
                        })}
                                      onClick={(e: any) => {
                                          handleAutoPlacementClick(e, autoFieldRefMobile, false);
                                      }}/>
                    </Box>

                </Grid>
                <Grid item xs={6} sm={4} sx={{justifyContent: 'center'}}>
                    <ChargeStationUI isOnStation={isOnChargeStationAuto} setIsOnStation={setIsOnChargeStationAuto}
                                     buttonTitle={"Charging Station"}/>
                    <ToggleButtonGroup
                        value={autoMobility}
                        exclusive
                        onChange={(event, value) => {
                            if (value === null) {
                                setAutoMobility(false);
                            } else {
                                setAutoMobility(value)
                            }
                        }}
                        aria-label={"Mobility Button Group"}
                        size="large"
                    >
                        <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={true}
                                      aria-label={"Mobility Button"}>
                            {"Mobility?"}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="undo" sx={{position: 'fixed', bottom: 16, right: 16}} onClick={() => {
                if (autoPositions.length > 0) {
                    if (autoPositions.length === 1) {
                        setAutoPositions([]);
                    } else {
                        setAutoPositions(autoPositions.slice(0, -1));
                    }
                }
            }}>
                <Undo/>
            </Fab>
        </>)
    }

    /****** Teleop Page Constants ******/

    const [cubePopup, setCubePopup] = React.useState(false);
    const [conePopup, setConePopup] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState<"pickup" | "placement">("pickup"); // Current Selection
    const [pickup, setPickup] = useState<"substation" | "ground" | "tipped" | "">("");


    const [teleopActionList, setTeleopActionList] = React.useState<TeleopActionI[]>([]);
    // @ts-ignore
    const [newTeleopAction, setNewTeleopAction]: TeleopActionI = useState<TeleopActionI>({
        type: "",
        pickup: "",
        placement: ""
    });
    useEffect(() => {
        setTeleopActionList((a) => [...a, newTeleopAction]);
    }, [newTeleopAction]);
    useEffect(() => {
        setTeleopActionList([]);
    }, []);


    const TeleopPage = () => {


        return (<>
            <GamePieceDialog setNewAction={setNewTeleopAction} actionList={teleopActionList}
                             setActionList={setTeleopActionList}/>
        </>)
    }

    interface GamePieceDialogInterface {

        setNewAction: (newTeleopAction: TeleopActionI) => void;
        actionList: TeleopActionI[];
        setActionList: (newActionList: TeleopActionI[]) => void;
        onlyPlacement?: boolean;

    }

    const GamePieceDialog: React.FC<GamePieceDialogInterface> = ({
                                                                     setNewAction,
                                                                     actionList,
                                                                     setActionList,
                                                                     onlyPlacement
                                                                 }) => {

        return (<>
            <Grid container spacing={2} justifyContent="center" columns={12}>
                <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6} sm={12} md={12} lg={12} xl={12}>
                            <Button sx={{width: 100, height: 100}} onClick={() => {
                                setCubePopup(true)
                                if (onlyPlacement) {
                                    setCurrentStep('placement');
                                    setPickup('');
                                }
                            }}>
                                <Image src={CubeImage} width={100} height={100} alt={"Cube"}/>
                            </Button>
                        </Grid>

                        <Grid item xs={6} sm={12} md={12} lg={12} xl={12}>
                            <Button sx={{width: 100, height: 100}} onClick={() => {
                                setConePopup(true)
                                if (onlyPlacement) {
                                    setCurrentStep('placement');
                                    setPickup('');
                                }
                            }}>
                                <Image src={ConeImage} width={100} height={100} alt={"Cone"}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                    <Paper sx={{height: 300, width: "95%", ml: "2.5%", overflow: 'auto'}}>
                        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

                            <ListItem sx={{bgcolor: 'background.paper'}}>
                                <ListItemText primary={"Game Piece"}/>
                                <ListItemText primary={"Pickup"}/>
                                <ListItemText primary={"Placement"}/>

                            </ListItem>

                            {actionList.map((action, idx) => (
                                <div key={idx + action.type}>
                                    <ListItem
                                        sx={{bgcolor: 'background.paper'}}
                                        key={idx}
                                        secondaryAction={
                                            <IconButton aria-label="comment"
                                                        sx={{width: 50, ml: 5}}
                                                        onClick={() => {
                                                            let temp = [...actionList];
                                                            temp.splice(idx, 1);
                                                            setActionList(temp);
                                                        }}>
                                                <Delete fontSize="medium"/>
                                            </IconButton>
                                        }>

                                        <ListItemAvatar>
                                            <Image src={action.type === "cube" ? CubeImage : ConeImage} width={50}
                                                   height={50} alt={action.type === "cube" ? "Cube" : "Cone"}/>
                                        </ListItemAvatar>
                                        <Box sx={{width: 70}}/>
                                        <ListItemText
                                            primary={action.pickup.charAt(0).toUpperCase() + action.pickup.slice(1)}
                                            sx={{
                                                bgcolor: action.pickup === "substation" ? shelfColor : action.pickup === "ground" ? groundColor : tippedColor,
                                                height: "100%",
                                                width: 65,
                                                paddingY: 1,
                                                paddingLeft: 1,
                                                color: "black"
                                            }}
                                        />
                                        <ListItemText
                                            primary={action.placement.charAt(0).toUpperCase() + action.placement.slice(1)}
                                            sx={{
                                                bgcolor: action.placement === "top" ? topColor : action.placement === "mid" ? midColor : action.placement === "hybrid" ? hybridColor : failColor,
                                                height: "100%",
                                                width: 50,
                                                paddingY: 1,
                                                paddingLeft: 1,
                                                marginRight: 1,
                                                color: "black"
                                            }}
                                        />
                                    </ListItem>
                                    <Divider/>
                                </div>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            <Dialog open={cubePopup} onClose={() => {
                setCubePopup(false);
                setCurrentStep('pickup');
            }}>
                <DialogTitle>{currentStep === "pickup" ? "Pickup" : "Placement"}</DialogTitle>
                <DialogContent>
                    {/*** Desktop ***/}
                    {currentStep === "pickup" &&
                        <Box sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                            <Stack>
                                <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: shelfColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("substation");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Substation</Typography>
                                </Button>
                                <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: groundColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("ground");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Ground</Typography>
                                </Button>
                            </Stack>
                        </Box>}

                    {currentStep === "placement" &&
                        <Box sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                            <Grid container columns={12}>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: topColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "top"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Top</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: midColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "mid"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Middle</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: hybridColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "hybrid"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Hybrid</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: failColor}}
                                        variant={"contained"}
                                        color="inherit"
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "fail"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Fail</Typography>
                                </Button>
                            </Grid>
                        </Box>
                    }


                    {/*** Mobile ***/}
                    {currentStep === "pickup" &&
                        <Box sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                            <Stack>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: shelfColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("substation");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Substation</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: groundColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("ground");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Ground</Typography>
                                </Button>
                            </Stack>
                        </Box>}

                    {currentStep === "placement" &&
                        <Box sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                            <Stack>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: topColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "top"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Top</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: midColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "mid"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Middle</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: hybridColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "hybrid"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Hybrid</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: failColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cube", pickup: pickup, placement: "fail"})
                                            setCurrentStep('pickup');
                                            setCubePopup(false);
                                        }}>
                                    <Typography variant="h5">Fail</Typography>
                                </Button>
                            </Stack>
                        </Box>
                    }
                </DialogContent>
            </Dialog>

            <Dialog open={conePopup} onClose={() => {
                setConePopup(false);
                setCurrentStep('pickup');
            }}>
                <DialogTitle>{currentStep === "pickup" ? "Pickup" : "Placement"}</DialogTitle>
                <DialogContent>
                    {/*** Desktop ***/}
                    {currentStep === "pickup" &&
                        <Box sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                            <Stack>
                                <Button sx={{width: 300, height: 80, mx: 5, my: 1, backgroundColor: shelfColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("substation");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Substation</Typography>
                                </Button>
                                <Button sx={{width: 300, height: 80, mx: 5, my: 1, backgroundColor: groundColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("ground");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Ground</Typography>
                                </Button>
                                <Button sx={{width: 300, height: 80, mx: 5, my: 1, backgroundColor: tippedColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("tipped");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Tipped</Typography>
                                </Button>
                            </Stack>
                        </Box>}

                    {currentStep === "placement" &&
                        <Box sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                            <Grid container columns={12}>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: topColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cone", pickup: pickup, placement: "top"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Top</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: midColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cone", pickup: pickup, placement: "mid"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Middle</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: hybridColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewAction({type: "cone", pickup: pickup, placement: "hybrid"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Hybrid</Typography>
                                </Button>
                                <Button sx={{width: "40%", height: 100, mx: "5%", my: 1, backgroundColor: failColor}}
                                        variant={"contained"}
                                        color="inherit"
                                        onClick={() => {
                                            setNewAction({type: "cone", pickup: pickup, placement: "fail"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Fail</Typography>
                                </Button>
                            </Grid>
                        </Box>
                    }


                    {/*** Mobile ***/}
                    {currentStep === "pickup" &&
                        <Box sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                            <Stack>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: shelfColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("substation");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Substation</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: groundColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("ground");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Ground</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: tippedColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setPickup("tipped");
                                            setCurrentStep('placement');
                                        }}>
                                    <Typography variant="h5">Tipped</Typography>
                                </Button>
                            </Stack>
                        </Box>}

                    {currentStep === "placement" &&
                        <Box sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                            <Stack>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: topColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "top"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Top</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: midColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "mid"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Middle</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: hybridColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "hybrid"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Hybrid</Typography>
                                </Button>
                                <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: failColor}}
                                        variant={"contained"}
                                        onClick={() => {
                                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "fail"})
                                            setCurrentStep('pickup');
                                            setConePopup(false);
                                        }}>
                                    <Typography variant="h5">Fail</Typography>
                                </Button>
                            </Stack>
                        </Box>
                    }
                </DialogContent>
            </Dialog>

        </>)
    }

    const ChargeStationUI:
        React.FC<{ isOnStation: string, setIsOnStation: any, buttonTitle: string }> = ({
                                                                                           isOnStation,
                                                                                           setIsOnStation,
                                                                                           buttonTitle,
                                                                                       }) => {
        return (
            <Box sx={{width: "100%", justifyContent: "center", mb: 2}}>
                <Typography variant="h6" color={"text.primary"}>{buttonTitle}</Typography>
                <ToggleButtonGroup
                    value={isOnStation}
                    orientation={"vertical"}
                    exclusive
                    onChange={(event, value) => {
                        if (value != null) {
                            setIsOnStation(value)
                        }
                    }}
                    aria-label={buttonTitle + " button group"}
                    size="large"
                >
                    <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={"none"}
                                  aria-label={"None button"}>
                        {"Not on station"}
                    </ToggleButton>
                    <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={"docked"}
                                  aria-label={"Docked button"}>
                        {"Docked"}
                    </ToggleButton>
                    <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={"engaged"}
                                  aria-label={"Engaged button"}>
                        {"Engaged"}
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        )
    }

    // const [chargeStationPos, setChargeStationPos] = useState<"balanced" | "tipped" | "">("");
    // const [chargeStationRobots, setChargeStationRobots] = useState<number>(0);

    const [isOnChargeStationEndgame, setIsOnChargeStationEndgame] = useState<"none" | "docked" | "engaged">("none");
    // const [hasBrokenDown, setHasBrokenDown] = useState<boolean>(false);

    const [clearEntriesPopup, setClearEntriesPopup] = useState<boolean>(false);

    const [submitError, setSubmitError] = useState<string>("");
    const [submitSuccess, setSubmitSuccess] = useState<string>("");
    const [submitInfo, setSubmitInfo] = useState<string>("");
    const [submitLoading, setSubmitLoading] = useState<string>("");

    //
    // const [submitAlerts, setSubmitAlerts] = useState<{
    //     type: "info" | "error" | "success",
    //     text: string,
    //     disappear?: boolean,
    //     hasBeenScheduled?: boolean,
    //     id: string
    // }[]>([])

    const EndgamePage = () => {

        return (<>
            {/**** Desktop ****/}
            <Grid container columns={12} spacing={2} justifyContent="center"
                  sx={{width: "90%", mx: "2.5%", display: {xs: 'block', sm: 'block'}}}>
                <Box sx={{mt:5}}>
                    {/*{submitAlerts.map((alert, idx) => {*/}
                    {/*    return <Alert severity={alert.type} key={"alert " + alert.text + idx}> {alert.text} </Alert>*/}
                    {/*})}*/}

                    {submitError && <Alert severity="error"> {submitError} </Alert>}
                    {submitSuccess && <Alert severity="success"> {submitSuccess} </Alert>}
                    {submitInfo && <Alert severity="info"> {submitInfo} </Alert>}
                    {submitLoading && <Alert severity="info"> {submitLoading} </Alert>}
                </Box>
                <Grid item xs={12} sm={6}>
                    <ChargeStationUI isOnStation={isOnChargeStationEndgame} setIsOnStation={setIsOnChargeStationEndgame}
                                     buttonTitle={"Charging Station"}/>
                </Grid>
                {/*<Grid item xs={12} sm={6}>*/}
                {/*    <Box sx={{width: "100%", justifyContent: "center"}}>*/}
                {/*        <ToggleButtonGroup*/}
                {/*            value={hasBrokenDown}*/}
                {/*            exclusive*/}
                {/*            onChange={(event, value) => {*/}
                {/*                if (value === null) {*/}
                {/*                    setHasBrokenDown(false);*/}
                {/*                } else {*/}
                {/*                    setHasBrokenDown(value)*/}
                {/*                }*/}
                {/*            }}*/}
                {/*            aria-label={"Has broken down button group"}*/}
                {/*            size="large"*/}
                {/*        >*/}
                {/*            <ToggleButton sx={{width: 200, height: 100}} value={true} color={"error"}*/}
                {/*                          aria-label={"Has broken down button"}>*/}
                {/*                Broke Down?*/}
                {/*            </ToggleButton>*/}
                {/*        </ToggleButtonGroup>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}

                <Grid item xs={12} sm={12} justifyContent={"center"}>
                    <Stack spacing={2} sx={{width: 200}}>
                        <Button variant="contained" onClick={handleSubmit}>
                            <Typography variant="h5" color={"text.primary"}>Submit</Typography>
                        </Button>
                        <Button variant="contained" color={"secondary"} onClick={() => setClearEntriesPopup(true)}>
                            <Typography variant="h5" color={"text.primary"}>Clear Entries</Typography>
                        </Button>
                    </Stack>
                </Grid>
            </Grid>


            <Dialog open={clearEntriesPopup} onClose={() => {
                setClearEntriesPopup(false);
            }}
            >
                <Paper sx={{width: "300", height: "auto"}}>
                    <DialogTitle>{"Delete all data?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {"Are you sure you want to clear all the data you've collected? This can't be undone."}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setClearEntriesPopup(false)}>Cancel</Button>
                        <Button onClick={handleClearEntries}>Delete</Button>
                    </DialogActions>
                </Paper>
            </Dialog>


        </>)
    }



// const addSubmitAlert = (type: "info" | "error" | "success", text: string, disappear?: boolean) => {
    //
    //     setSubmitAlerts([...submitAlerts, {
    //         type: type,
    //         text: text,
    //         id: makeid(6),
    //         disappear: disappear,
    //         hasBeenScheduled:false
    //     }])
    //
    // }
    //
    //
    // function makeid(length: number) {
    //     let result = '';
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     const charactersLength = characters.length;
    //     let counter = 0;
    //     while (counter < length) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //         counter += 1;
    //     }
    //     return result;
    // }

    // useEffect(() => {
    //     submitAlerts.map((alert, idx) => {
    //         console.log("Alert: ", alert);
    //         if(!alert.hasBeenScheduled) {
    //             setTimeout(() => {
    //                 let temp = submitAlerts;
    //                 temp.splice(submitAlerts.findIndex((element) => {
    //                     console.log(element.id === alert.id);
    //                     return element.id === alert.id;
    //                 }), 1);
    //                 setSubmitAlerts(temp);
    //                 console.log("Deleted");
    //             }, 5000);
    //         } else {
    //             let temp = submitAlerts;
    //             temp[idx].hasBeenScheduled = true;
    //             setSubmitAlerts(temp);
    //         }
    //     })
    // }, [submitAlerts])


    useEffect(() => {
            //@ts-ignore
            if(submitError != "") {
                setTimeout(() => {
                    setSubmitError("");
                }, 10000);
            }
    }, [submitError])

    useEffect(() => {
            //@ts-ignore
            if(submitSuccess != "") {
                setTimeout(() => {
                    setSubmitSuccess("");
                }, 10000);
            }
    }, [submitSuccess])
    useEffect(() => {
            //@ts-ignore
            if(submitInfo != "") {
                setTimeout(() => {
                    setSubmitInfo("");
                }, 10000);
            }
    }, [submitInfo])

    const handleSubmit = () => {

        let final: MatchScoutI = {
            "_id": team.key,
            "auto": {
                "startingPosition": {
                    "x": startPosX,
                    "y": startPosY,
                },
                "mobility": autoMobility,
                "path": autoPositions,
                "chargingStation": isOnChargeStationAuto,
                "preload": preload,
            },
            "cycles": teleopActionList,
            "chargingStation": isOnChargeStationEndgame,
            // "brokeDown": hasBrokenDown,
        }

        console.log(final);


        // TODO Push to database

        // /:event/practiceMatch

        if (final._id === "frc0" || currentMatch === "") {

            setSubmitError("Please enter a team number and match number (First Page)");

        } else {

            console.log(currentMatch);

            setSubmitLoading("Loading...");
            axios.post(currentMatch === "Practice Practice Match" ? APIServerURL + "/2023/event/" + currentCompetitionCode + "/practiceMatch" : APIServerURL + "/2023/event/" + currentCompetitionCode + "/match/" + currentMatch.slice(9) + "/team/", final)
                .then(response => {
                    console.log(response);
                    setSubmitSuccess("Successfully submitted data");
                }).catch((err) => {
                    console.log(err);
                    setSubmitError("There was an error: " + err.message);
            }).finally(() => {
                setSubmitLoading("");
            });
        }
    }

    const handleClearEntries = () => {
        setClearEntriesPopup(false);
        setSubmitInfo( "Data cleared");

        // Reset everything
        setAutoPositions([]);
        setAutoMobility(false);
        setTeleopActionList([]);
        setStartPos({startPosX: 0, startPosY: 0});
        setPreload("none");
        setIsOnChargeStationAuto("none");
        setIsOnChargeStationEndgame("none");
        startPosApi.start({startPosSpringX: 0, startPosSpringY: 0});
        // setHasBrokenDown(false);
    }


    /******* Handle Data Changed *******/

//     const [hasFirstUseEffectRan, setHasFirstUseEffectRan] = useState<boolean>(false);
//
//     useEffect(() => {
//         if (!hasFirstUseEffectRan) {
//             setData({ // Set data if any of the useEffects have been changed. Probably should fix it later
//                 "_id": team.key,
//                 "auto": {
//                     "startingPosition": {
//                         "x": startPosX,
//                         "y": startPosY,
//                     },
//                     "mobility": !autoMobility,
//                     "chargingStation": isOnChargeStationAuto,
//                     "path": autoPositions,
//                 },
//                 "cycles": teleopActionList,
//                 "onChargeStationEnd": isOnChargeStationEndgame,
//             })
//             console.log("Data changed");
//         } else {
//             setHasFirstUseEffectRan(true);
//         }},
//         [startPosX, startPosY, teleopActionList, autoPositions, preload, isOnChargeStationEndgame, isOnChargeStationAuto, autoMobility, hasBrokenDown])
//
//     useEffect(() => {
//         if (!hasFirstUseEffectRan) {
//
//         const getData = async () => {
//             // Push current data so it isn't lost forever
//             await pushDataToServer();
//             // Get new data
//             return await fetch(APIServerURL + "/event/" + currentCompetitionCode + "/match/" + currentMatch + "/team/" + data._id).then(response => {
//                 if(response.body != null){
//                     // @ts-ignore
//                     setData(JSON.parse(response.body));
//                 }
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }
//         getData();
//
//     } else {
//         setHasFirstUseEffectRan(true);
//     }
//     }, [currentMatch])
//
//     useEffect(() => {
//         if (!hasFirstUseEffectRan) {
//
//         const getData = async () => {
//             // Push current data so it isn't lost forever
//             await pushDataToServer();
//             // Get new data
//             return await fetch(APIServerURL + "/event/" + currentCompetitionCode + "/match/" + currentMatch + "/team/" + data._id).then(response => {
//                 if(response.body != null){
//                     // @ts-ignore
//                     setData(JSON.parse(response.body));
//                 }
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }
//         console.log(data);
//         if ( // Check to see if any data has been entered. If so, then don't reset by fetching new data
//             data.auto.startingPosition.x === 0 &&
//             data.auto.startingPosition.y === 0 &&
//             data.auto.mobility === false &&
//             data.auto.chargingStation === false &&
//             data.auto.path.length === 0 &&
//             data.cycles.length === 0 &&
//             data.onChargeStationEnd === false
//         ) {
//             getData();
//         } else { // If data is entered, just switch the team
//             setData({
//                 "_id": team.key,
//                 "auto": {
//                     "startingPosition": {
//                         "x": startPosX,
//                         "y": startPosY,
//                     },
//                     "mobility": !autoMobility,
//                     "chargingStation": isOnChargeStationAuto,
//                     "path": autoPositions,
//                 },
//                 "cycles": teleopActionList,
//                 "onChargeStationEnd": isOnChargeStationEndgame,
//             })
//         }
//
//     } else {
//     setHasFirstUseEffectRan(true);
// }
//     }, [team])
//
//     const pushDataToServer = async () => {
//         return null;
//         // return await axios.post(APIServerURL + "/event/" + currentCompetitionCode + "/match/" + currentMatch + "/team/" + data._id, data).then((response) => response).catch((error) => {
//         //     console.log(error);
//         // });
//     }


    return (<>
        <BottomNav/>
        {activeStep === 0 && <PrematchPage/>}
        {activeStep === 1 && <AutoPage/>}
        {activeStep === 2 && <TeleopPage/>}
        {activeStep === 3 && <EndgamePage/>}


    </>)
}


export interface MatchScoutI {
    _id: string,
    auto: {
        startingPosition: {
            x: number,
            y: number,
        },
        mobility: boolean,
        chargingStation: "none" | "docked" | "engaged",
        path: AutoPositionsI[],
        preload: "cube" | "cone" | "none"
    },
    cycles: TeleopActionI[],
    chargingStation: "none" | "docked" | "engaged",
    // brokeDown: boolean,
}

export interface AutoPositionsI {
    type: "cube" | "cone" | "pickup",
    id: number,
    y: number,
    height?: "top" | "mid" | "hybrid" | "fail"
}

export interface TeleopActionI {
    type: "cube" | "cone" | "",
    pickup: "substation" | "ground" | "tipped" | "",
    placement: "top" | "mid" | "hybrid" | "fail" | ""
}

export default DashboardScouting;
