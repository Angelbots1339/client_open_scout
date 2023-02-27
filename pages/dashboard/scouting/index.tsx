import React, { useEffect, useRef, useState} from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Button, Dialog, Divider,
    Grid, IconButton,
    List, ListItem, ListItemAvatar, ListItemText,
    Paper, ToggleButtonGroup, ToggleButton,
    Typography, Box, Fab
} from "@mui/material";
import {PrecisionManufacturing, VideogameAsset, Leaderboard, AppRegistration, Delete, Undo} from "@mui/icons-material";
import Image from "next/image";
import CubeImage from "../../../public/images/scouting/teleop/CubeRotoscoped.png";
import ConeImage from "../../../public/images/scouting/teleop/ConeRotoscoped.png";
import {Stack} from "@mui/system";
import {animated, useSpring} from "@react-spring/web";
import AutoFieldSVG from "../../../public/images/scouting/auto/AutoField";
import AutoFieldHorizontalSVG from "../../../public/images/scouting/auto/AutoFieldHorizontal";
// import {useSWR} from "swr";
// import PrematchPlacementSVG from "../../../public/images/scouting/prematch/PrematchPlacement";


const DashboardScouting = () => {

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

    // @ts-ignore
    // const fetcher = (...args: any) => fetch(...args).then(res => res.json());

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
    const [team, setTeam] = useState<number>(0);
    // const [possibleTeams, setPossibleTeams] = useState<number[]>([0, 1, 2]);

    useEffect(() => {
        setTeam(0); // Just to pass linting
    }, [])
    // const { data: possibleTeams, error: possibleTeamsLoadingError, isLoading: isPossibleTeamsLoading} = useSWR('/api/user/123', fetcher);

    useEffect(() => {
        console.log(team);
    }, [team])



    const [{startPosX, startPosY}, setStartPos] = useState({startPosX: 0, startPosY: 0})

    const [{startPosSpringX, startPosSpringY}, startPosApi] = useSpring(() => ({
        startPosSpringX: startPosX,
        startPosSpringY: startPosY,
        config: {
            mass: 0.1,
            friction: 6, // 6
        }
    }))

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
                        {/*<Autocomplete*/}
                        {/*    disablePortal*/}
                        {/*    onChange={(event: SyntheticEvent<Element, Event>, newValue: number | null) => {*/}
                        {/*        if (newValue !== null) {*/}
                        {/*            setTeam(newValue);*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*    // defaultValue={possibleTeams[0]}*/}
                        {/*    id="TeamSelect"*/}
                        {/*    options={isPossibleTeamsLoading ? [] : possibleTeams}*/}
                        {/*    sx={{width: 100, mt: 2}}*/}
                        {/*    loading={isPossibleTeamsLoading}*/}
                        {/*    renderInput={(params) => (*/}
                        {/*        <TextField*/}
                        {/*            {...params}*/}
                        {/*            label="Teams"*/}
                        {/*            InputProps={{*/}
                        {/*                ...params.InputProps,*/}
                        {/*                endAdornment: (*/}
                        {/*                    <React.Fragment>*/}
                        {/*                        {isPossibleTeamsLoading ? <CircularProgress color="inherit" size={20} /> : null}*/}
                        {/*                        {params.InputProps.endAdornment}*/}
                        {/*                    </React.Fragment>*/}
                        {/*                ),*/}
                        {/*            }}*/}
                        {/*            />*/}
                        {/*        )}*/}
                        {/*/>*/}
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
                    {/*<Autocomplete*/}
                    {/*    disablePortal*/}
                    {/*    onChange={(event: SyntheticEvent<Element, Event>, newValue: number | null) => {*/}
                    {/*        if (newValue !== null) {*/}
                    {/*            setTeam(newValue);*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    defaultValue={team}*/}
                    {/*    id="TeamSelect"*/}
                    {/*    options={possibleTeams}*/}
                    {/*    sx={{width: 100, mt: 2}}*/}
                    {/*    renderInput={(params) => <TextField {...params} label="Team"/>}*/}
                    {/*/>*/}
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

    const [isOnChargeStationAuto, setIsOnChargeStationAuto] = useState<boolean>(false);
    const [doesNotMoveAuto, setDoesNotMoveAuto] = useState<boolean>(false);

    const [autoPositionsRaw, setAutoPositionsRaw] = useState<{ x: number, y: number }[]>([])
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

            if(doesNotMoveAuto) {
                setDoesNotMoveAuto(false);
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
                    return entry.type === tempPosition.type && entry.id === tempPosition.id; }).length === 0) {
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
            console.log(tempPosition);
        }

        return (<>

            <Dialog open={autoPlacementPopup} onClose={() => {
                setAutoPlacementPopup(false);
            }}
            >
                <Paper sx={{width: "300", height: "auto"}}>
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
                                     buttonTitle={"Charging Station"} buttonText={"On Charging Station?"}/>
                    <ToggleButtonGroup
                        value={doesNotMoveAuto}
                        exclusive
                        onChange={(event, value) => {
                            if (value === null) {
                                setDoesNotMoveAuto(false);
                            } else {
                                setDoesNotMoveAuto(value)
                            }
                        }}
                        aria-label={"Does not move during auto button group"}
                        size="large"
                    >
                        <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={true}
                                      aria-label={"Does not move during auto button"}>
                            {"Doesn't move during auto?"}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="undo" sx={{position: 'fixed', bottom: 16, right: 16}} onClick={() => {

                if (autoPositions.length > 0) {
                    setAutoPositionsRaw(autoPositionsRaw.slice(0, -1));
                    if (autoPositions.length === 1) {
                        setAutoPositions([]);
                    } else {
                        setAutoPositions(autoPositions.slice(0, -2));
                    }
                }
            }}>
                <Undo/>
            </Fab>
        </>)
    }

    /****** Teleop Page Constants ******/
    interface TeleopAction {
        type: "cube" | "cone" | "",
        pickup: "shelf" | "ground" | "tipped" | "",
        placement: "top" | "mid" | "hybrid" | "fail" | ""
    }

    const [cubePopup, setCubePopup] = React.useState(false);
    const [conePopup, setConePopup] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState<"pickup" | "placement">("pickup"); // Current Selection
    const [pickup, setPickup] = useState<"shelf" | "ground" | "tipped" | "">("");


    const [teleopActionList, setTeleopActionList] = React.useState<TeleopAction[]>([]);
    // @ts-ignore
    const [newTeleopAction, setNewTeleopAction]: TeleopAction = useState<TeleopAction>({
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

        setNewAction: (newTeleopAction: TeleopAction) => void;
        actionList: TeleopAction[];
        setActionList: (newActionList: TeleopAction[]) => void;
        onlyPlacement?: boolean;

    }

    const GamePieceDialog: React.FC<GamePieceDialogInterface> = ({setNewAction, actionList, setActionList, onlyPlacement}) => {

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
                                                bgcolor: action.pickup === "shelf" ? shelfColor : action.pickup === "ground" ? groundColor : tippedColor,
                                                height: "100%",
                                                width: 40,
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
                {/*** Desktop ***/}
                {currentStep === "pickup" &&
                    <Paper sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                        <Stack>
                            <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: shelfColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("shelf");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Shelf</Typography>
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
                    </Paper>}

                {currentStep === "placement" &&
                    <Paper sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
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
                    </Paper>
                }


                {/*** Mobile ***/}
                {currentStep === "pickup" &&
                    <Paper sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                        <Stack>
                            <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: shelfColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("shelf");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Shelf</Typography>
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
                    </Paper>}

                {currentStep === "placement" &&
                    <Paper sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
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
                    </Paper>
                }
            </Dialog>

            <Dialog open={conePopup} onClose={() => {
                setConePopup(false);
                setCurrentStep('pickup');
            }}>
                {/*** Desktop ***/}
                {currentStep === "pickup" &&
                    <Paper sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
                        <Stack>
                            <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: shelfColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("shelf");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Shelf</Typography>
                            </Button>
                            <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: groundColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("ground");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Ground</Typography>
                            </Button>
                            <Button sx={{width: 300, height: 100, mx: 5, my: 1, backgroundColor: tippedColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("tipped");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Tipped</Typography>
                            </Button>
                        </Stack>
                    </Paper>}

                {currentStep === "placement" &&
                    <Paper sx={{width: "300", height: "auto", display: {xs: 'none', sm: 'block'}}}>
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
                    </Paper>
                }


                {/*** Mobile ***/}
                {currentStep === "pickup" &&
                    <Paper sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
                        <Stack>
                            <Button sx={{width: "60%", height: 100, mx: "10%", my: 1, backgroundColor: shelfColor}}
                                    variant={"contained"}
                                    onClick={() => {
                                        setPickup("shelf");
                                        setCurrentStep('placement');
                                    }}>
                                <Typography variant="h5">Shelf</Typography>
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
                    </Paper>}

                {currentStep === "placement" &&
                    <Paper sx={{width: 400, height: "auto", display: {xs: 'block', sm: 'none'}}}>
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
                    </Paper>
                }
            </Dialog>

        </>)
    }

    const ChargeStationUI:
        React.FC<{ isOnStation: boolean, setIsOnStation: any, buttonTitle: string, buttonText: string }> = ({
                                                                                                               isOnStation,
                                                                                                               setIsOnStation,
                                                                                                               buttonTitle,
                                                                                                               buttonText
                                                                                                           }) => {
        return (
            <Box sx={{width: "100%", justifyContent: "center"}}>
                <Typography variant="h6" color={"text.primary"}>{buttonTitle}</Typography>
                <ToggleButtonGroup
                    value={isOnStation}
                    exclusive
                    onChange={(event, value) => {
                        if (value === null) {
                            setIsOnStation(false);
                        } else {
                            setIsOnStation(value)
                        }
                    }}
                    aria-label={buttonTitle + " button group"}
                    size="large"
                >
                    <ToggleButton sx={{width: 200, height: 100}} color={"secondary"} value={true}
                                  aria-label={buttonTitle + " button"}>
                        {buttonText}
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        )
    }

    // const [chargeStationPos, setChargeStationPos] = useState<"balanced" | "tipped" | "">("");
    // const [chargeStationRobots, setChargeStationRobots] = useState<number>(0);

    const [isOnChargeStationEndgame, setIsOnChargeStationEndgame] = useState<boolean>(false);
    const [hasBrokenDown, setHasBrokenDown] = useState<boolean>(false);


    const EndgamePage = () => {

        return (<>
            {/**** Desktop ****/}
            <Grid container columns={12} spacing={2} justifyContent="center"
                  sx={{width: "90%", mx: "2.5%", display: {xs: 'block', sm: 'block'}}}>
                <Grid item xs={12} sm={6}>
                    <ChargeStationUI isOnStation={isOnChargeStationEndgame} setIsOnStation={setIsOnChargeStationEndgame}
                                     buttonTitle={"Charging Station"} buttonText={"On Charging Station?"}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{width: "100%", justifyContent: "center"}}>
                        <ToggleButtonGroup
                            value={hasBrokenDown}
                            exclusive
                            onChange={(event, value) => {
                                if (value === null) {
                                    setHasBrokenDown(false);
                                } else {
                                    setHasBrokenDown(value)
                                }
                            }}
                            aria-label={"Has broken down button group"}
                            size="large"
                        >
                            <ToggleButton sx={{width: 200, height: 100}} value={true} color={"error"}
                                          aria-label={"Has broken down button"}>
                                Broke Down?
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} justifyContent={"center"} >
                    <Button variant="contained" onClick={handleSubmit}>
                        <Typography variant="h5" color={"text.primary"}>Submit</Typography>
                    </Button>
                </Grid>
            </Grid>


            {/**** Mobile ****/}
        </>)
    }



    const handleSubmit = () => {

        let final = {
            "_id": team,
            "auto": {
                "startingPosition": {
                    "x": startPosX,
                    "y": startPosY,
                },
                "mobility": !doesNotMoveAuto,
                "chargingStation": isOnChargeStationAuto,
                "path": autoPositions,
            },
            "cycles": teleopActionList,
            "onChargeStationEnd": isOnChargeStationEndgame,
        }

        console.log(final);

        // Push to database


    }

    return (<>
        <BottomNav/>
        {activeStep === 0 && <PrematchPage/>}
        {activeStep === 1 && <AutoPage/>}
        {activeStep === 2 && <TeleopPage/>}
        {activeStep === 3 && <EndgamePage/>}


    </>)
}

export interface AutoPositionsI {
    type: "cube" | "cone" | "pickup",
    id: number,
    y: number,
    height?: "top" | "mid" | "hybrid" | "fail"
}

export default DashboardScouting;
