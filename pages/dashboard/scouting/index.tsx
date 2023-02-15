import React, {useEffect, useRef, useState} from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Button, Dialog, Divider,
    Grid, IconButton,
    List, ListItem, ListItemAvatar, ListItemText,
    Paper, ToggleButtonGroup, ToggleButton,
    Typography, Box, Fab
} from "@mui/material";
import {PrecisionManufacturing, VideogameAsset, Leaderboard, AppRegistration, Remove, Undo} from "@mui/icons-material";
import Image from "next/image";
import CubeImage from "../../../public/images/scouting/teleop/CubeRotoscoped.png";
import ConeImage from "../../../public/images/scouting/teleop/ConeRotoscoped.png";
// import ConeImage from "../../../public/images/scouting/teleop/Cone.svg";
import {Stack} from "@mui/system";
import {animated, useSpring} from "@react-spring/web";
import AutoFieldSVG from "../../../public/images/scouting/auto/AutoField";
import AutoFieldHorizontalSVG from "../../../public/images/scouting/auto/AutoFieldHorizontal";
import PrematchPlacementSVG from "../../../public/images/scouting/prematch/PrematchPlacement";


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
    const [activeStep, setActiveStep] = React.useState(0); // Current Nav Tab



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
        // const prematchPlacementRef = useRef(null);

        const convertToPercent = (x: number, y: number) => {
            // @ts-ignore
            const newX = mapRange(x, [0, prematchFieldRefMobile.current ? prematchFieldRefMobile.current.clientWidth : 1], [0, 1]);
            // @ts-ignore
            const newY = mapRange(y, [0, prematchFieldRefMobile.current ? prematchFieldRefMobile.current.clientHeight : 1], [0, 1]);
            return {x: newX, y: newY};
        }
        const boxSize: number = 25;


        // @ts-ignore
        // @ts-ignore
        return (<>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <Box sx={{display: {xs: 'block', sm: 'block'}}}>
                        <img ref={prematchFieldRefMobile} src="/images/scouting/prematch/PrematchField.svg" alt="Field Picture"
                             onClick={(e) => {
                                 startPosApi.start({
                                     startPosSpringX: e.nativeEvent.offsetX - boxSize / 2,
                                     startPosSpringY: e.nativeEvent.offsetY - boxSize / 2
                                 })
                                 setStartPos({
                                     //@ts-ignore
                                     startPosX: convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY).x,
                                     //@ts-ignore
                                     startPosY: convertToPercent(e.nativeEvent.offsetY, e.nativeEvent.offsetY).y
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
                    <Typography variant="h6" color={"text.primary"}>Preload</Typography>
                    <ToggleButtonGroup
                        value={preload}
                        exclusive
                        defaultValue={"none"}
                        orientation="vertical"
                        onChange={(event, value) => {
                            if(value !== null) {
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
                </Grid>
                <Grid item xs={12} sm={5} sx={{display: {xs: 'block', sm: 'none'}}}>
                    <Typography variant="h6" color={"text.primary"}>Preload</Typography>
                    <ToggleButtonGroup
                        value={preload}
                        exclusive
                        defaultValue={"none"}
                        onChange={(event, value) => {
                            if(value !== null) {
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
                </Grid>
                <Grid item xs={12} sm={6} sx={{display: {xs: 'block', sm: 'block'}}}>

                    <PrematchPlacementSVG/>

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
                </Grid>
            </Grid>
        </>)
    }

    const [isOnChargeStationAuto, setIsOnChargeStationAuto] = useState<boolean>(false);

    interface AutoPositionsI {type: "cube" | "cone" | "pickup", id: number, y: number}

    const [autoPositionsRaw, setAutoPositionsRaw] = useState<{x: number, y: number}[]>([])
    const [autoPositions, setAutoPositions] = useState<AutoPositionsI[]>([])


    useEffect(() => {

        const autoPickupPositionsY:AutoPositionsI[] = [
            {type: "pickup", id:0, y: 2 / 13},
            {type: "pickup", id:1, y: 5 / 13},
            {type: "pickup", id:2, y: 8 / 13},
            {type: "pickup", id:3, y: 11 / 13}];

        const autoPlacementPositionsY: AutoPositionsI[] = [
            {type: "cube", id:0, y: 0.1},
            {type: "cone", id:0, y: 0.2}, // Cone
            {type: "cube", id:1, y: 0.28},
            {type: "cube", id:2, y: .4},
            {type: "cone", id:1, y: 0.5}, // Cone
            {type: "cube", id:3, y: .6},
            {type: "cube", id:4, y: .7},
            {type: "cone", id:2, y: .82}, // Cone
            {type: "cube", id:5, y: .9},

        ];


        // const final = autoPositionsRaw.map((position, idx) => {
        //     let tempPosition: AutoPositionsI;
        //     const coords = position ? position : {
        //         x: 0,
        //         y: 0
        //     };
        //     if (coords.x > 0.5) {
        //         let prevBest = 0;
        //         autoPickupPositionsY.map((position, idx) => {
        //             Math.abs(position.y - coords.y) < Math.abs(autoPickupPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
        //         })
        //         tempPosition = autoPickupPositionsY[prevBest];
        //     } else {
        //         let prevBest = 0;
        //         autoPlacementPositionsY.map((position, idx) => {
        //             Math.abs(position.y - coords.y) < Math.abs(autoPlacementPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
        //         })
        //         tempPosition = autoPlacementPositionsY[prevBest];
        //     }
        //     if (autoPositions.filter(function (entry) {
        //         // @ts-ignore
        //         return entry.type === tempPosition.type && entry.id === tempPosition.id; }).length === 0) {
        //         return tempPosition;
        //     }
        //
        // }).filter(function( element ) {
        //     return element !== undefined;
        // });

        // console.log(final);
        // setAutoPositions(final);

            // @ts-ignore
        if(autoPositionsRaw.length > 0) {
            let tempPosition: AutoPositionsI;
            const coords = autoPositionsRaw[autoPositionsRaw.length - 1];
            if (coords.x > 0.5) {
                let prevBest = 0;
                autoPickupPositionsY.map((position, idx) => {
                    Math.abs(position.y - coords.y) < Math.abs(autoPickupPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
                })
                tempPosition = autoPickupPositionsY[prevBest];
            } else {
                let prevBest = 0;
                autoPlacementPositionsY.map((position, idx) => {
                    Math.abs(position.y - coords.y) < Math.abs(autoPlacementPositionsY[prevBest].y - coords.y) ? prevBest = idx : prevBest;
                })
                tempPosition = autoPlacementPositionsY[prevBest];
            }

            setAutoPositions((a) => [...a, tempPosition]);

            // if (autoPositions.filter(function (entry) {
            //     // @ts-ignore
            //     return entry.type === tempPosition.type && entry.id === tempPosition.id; }).length < 1) {
            //
            //     if(autoPositions.length < autoPositionsRaw.length) {
            //         setAutoPositions([...autoPositions, tempPosition]);
            //         console.log(tempPosition);
            //     }
            // }
        }

    }, [autoPositionsRaw])

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


        return (<>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={8}>
                    {/*<GamePieceDialog setNewAction={setNewAutoAction} actionList={autoActionList} setActionList={setAutoActionList} onlyPlacement/>*/}
                    {/**** Desktop ****/}
                    <Box ref={autoFieldRefDesktop} sx={{display: {xs: 'none', sm: 'block'}, width:'100%', height:'auto'}}>
                        <AutoFieldHorizontalSVG numberLocations={autoPositions.map((entry) => {
                            return {type: entry.type, id: entry.id};
                        }) }
                                onClick={(e: any) => {
                                    if(autoPositionsRaw.length <= 9) {
                                        setAutoPositionsRaw([...autoPositionsRaw, {
                                            //@ts-ignore
                                            x: convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, autoFieldRefDesktop).y, // X and Y are flipped because the SVG is rotated 90 degrees
                                            //@ts-ignore
                                            y: 1 - convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, autoFieldRefDesktop).x // X needs to be inverted here
                                        }]);
                                        // console.log(autoPositionsRaw);
                                    }
                        }}/>
                    </Box>

                    {/**** Mobile ****/}
                    <Box ref={autoFieldRefMobile} sx={{display: {xs: 'block', sm: 'none'}, width:"80%", ml:"10%"}}>
                        <AutoFieldSVG numberLocations={autoPositions.map((entry) => {
                            return {type: entry.type, id: entry.id};
                        }) }
                              onClick={(e: any) => {
                                  if(autoPositionsRaw.length <= 9) {
                                      setAutoPositionsRaw([...autoPositionsRaw, {
                                          //@ts-ignore
                                          x: convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, autoFieldRefMobile).x,
                                          //@ts-ignore
                                          y: convertToPercent(e.nativeEvent.offsetX, e.nativeEvent.offsetY, autoFieldRefMobile).y
                                      }]);
                                      // console.log(autoPositionsRaw);
                                  }
                        }}/>
                    </Box>

                </Grid>
                <Grid item xs={6} sm={4} sx={{justifyContent:'center'}}>
                    <ChargeStationUI isOnStation={isOnChargeStationAuto} setIsOnStation={setIsOnChargeStationAuto}/>
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="undo" sx={{position: 'fixed', bottom: 16, right: 16}} onClick={() => {

                if(autoPositions.length > 0) {
                    setAutoPositionsRaw(autoPositionsRaw.slice(0, -1));
                    if(autoPositions.length === 1) {
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
            <GamePieceDialog setNewAction={setNewTeleopAction} actionList={teleopActionList} setActionList={setTeleopActionList}/>
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
                                if(onlyPlacement){
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
                                if(onlyPlacement) {
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
                                            <IconButton aria-label="comment" onClick={() => {
                                                let temp = [...actionList];
                                                temp.splice(idx, 1);
                                                setActionList(temp);
                                            }}>
                                                <Remove/>
                                            </IconButton>
                                        }>

                                        <ListItemAvatar>
                                            <Image src={action.type === "cube" ? CubeImage : ConeImage} width={50}
                                                   height={50} alt={action.type === "cube" ? "Cube" : "Cone"}/>
                                        </ListItemAvatar>
                                        <Box sx={{width: 70}}/>
                                        <ListItemText
                                            primary={action.pickup.charAt(0).toUpperCase() + action.pickup.slice(1)}/>
                                        <ListItemText
                                            primary={action.placement.charAt(0).toUpperCase() + action.placement.slice(1)}/>
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
                        <Button sx={{width: 300, height: 100, mx: 5, my: 1}} variant={"contained"} color="inherit"
                                onClick={() => {
                                    setPickup("shelf");
                                    setCurrentStep('placement');
                                }}>
                            <Typography variant="h5">Shelf</Typography>
                        </Button>
                        <Button sx={{width: 300, height: 100, mx: 5, my: 1}} variant={"contained"} color="inherit"
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
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cube", pickup: pickup, placement: "top"})
                                    setCurrentStep('pickup');
                                    setCubePopup(false);
                                }}>
                            <Typography variant="h5">Top</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cube", pickup: pickup, placement: "mid"})
                                    setCurrentStep('pickup');
                                    setCubePopup(false);
                                }}>
                            <Typography variant="h5">Middle</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cube", pickup: pickup, placement: "hybrid"})
                                    setCurrentStep('pickup');
                                    setCubePopup(false);
                                }}>
                            <Typography variant="h5">Hybrid</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
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
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setPickup("shelf");
                            setCurrentStep('placement');
                        }}>
                            <Typography variant="h5">Shelf</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
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
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewAction({type: "cube", pickup: pickup, placement: "top"})
                            setCurrentStep('pickup');
                            setCubePopup(false);
                        }}>
                            <Typography variant="h5">Top</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewAction({type: "cube", pickup: pickup, placement: "mid"})
                            setCurrentStep('pickup');
                            setCubePopup(false);
                        }}>
                            <Typography variant="h5">Middle</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewAction({type: "cube", pickup: pickup, placement: "hybrid"})
                            setCurrentStep('pickup');
                            setCubePopup(false);
                        }}>
                            <Typography variant="h5">Hybrid</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
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
                        <Button sx={{width: 300, height: 100, mx: 5, my: 1}} variant={"contained"} color="inherit"
                                onClick={() => {
                                    setPickup("shelf");
                                    setCurrentStep('placement');
                                }}>
                            <Typography variant="h5">Shelf</Typography>
                        </Button>
                        <Button sx={{width: 300, height: 100, mx: 5, my: 1}} variant={"contained"} color="inherit"
                                onClick={() => {
                                    setPickup("ground");
                                    setCurrentStep('placement');
                                }}>
                            <Typography variant="h5">Ground</Typography>
                        </Button>
                        <Button sx={{width: 300, height: 100, mx: 5, my: 1}} variant={"contained"} color="inherit"
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
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cone", pickup: pickup, placement: "top"})
                                    setCurrentStep('pickup');
                                    setConePopup(false);
                                }}>
                            <Typography variant="h5">Top</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cone", pickup: pickup, placement: "mid"})
                                    setCurrentStep('pickup');
                                    setConePopup(false);
                                }}>
                            <Typography variant="h5">Middle</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
                                color="inherit"
                                onClick={() => {
                                    setNewAction({type: "cone", pickup: pickup, placement: "hybrid"})
                                    setCurrentStep('pickup');
                                    setConePopup(false);
                                }}>
                            <Typography variant="h5">Hybrid</Typography>
                        </Button>
                        <Button sx={{width: "40%", height: 100, mx: "5%", my: 1}} variant={"contained"}
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
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setPickup("shelf");
                            setCurrentStep('placement');
                        }}>
                            <Typography variant="h5">Shelf</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setPickup("ground");
                            setCurrentStep('placement');
                        }}>
                            <Typography variant="h5">Ground</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
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
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "top"})
                            setCurrentStep('pickup');
                            setConePopup(false);
                        }}>
                            <Typography variant="h5">Top</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "mid"})
                            setCurrentStep('pickup');
                            setConePopup(false);
                        }}>
                            <Typography variant="h5">Middle</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
                            setNewTeleopAction({type: "cone", pickup: pickup, placement: "hybrid"})
                            setCurrentStep('pickup');
                            setConePopup(false);
                        }}>
                            <Typography variant="h5">Hybrid</Typography>
                        </Button>
                        <Button sx={{width: "60%", height: 100, mx: "10%", my: 1}} variant={"contained"}
                                color="inherit" onClick={() => {
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

    const ChargeStationUI: React.FC<{isOnStation: boolean, setIsOnStation: any}> = ({isOnStation, setIsOnStation}) => {
        return (
            <Box sx={{width: "100%", justifyContent: "center"}}>
                <Typography variant="h6" color={"text.primary"}>Charging Station</Typography>
                <ToggleButtonGroup
                    value={isOnStation}
                    exclusive
                    onChange={(event, value) => {
                        if(value === null) {
                            setIsOnStation(false);
                        } else {
                            setIsOnStation(value)
                        }
                    }}
                    aria-label="Is robot on charging station group"
                    size="large"
                >
                    <ToggleButton sx={{width: 200, height: 100}} value={true} aria-label="Is robot on charging station button">
                        On Charging Station?
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        )
    }

    // const [chargeStationPos, setChargeStationPos] = useState<"balanced" | "tipped" | "">("");
    // const [chargeStationRobots, setChargeStationRobots] = useState<number>(0);

    const [isOnChargeStationEndgame, setIsOnChargeStationEndgame] = useState<boolean>(false);


    const EndgamePage = () => {

        // const buttonWidthMax: number = 300;

        // const ChargeStationUI = () => {
        //     return (
        //         <Box sx={{width: "100%", justifyContent: "center"}}>
        //             <Stack>
        //                 <Typography variant="h6" color={"text.primary"}>Charging Station</Typography>
        //                 <ToggleButtonGroup
        //                     value={chargeStationRobots}
        //                     exclusive
        //                     orientation="horizontal"
        //                     defaultValue={0}
        //                     onChange={(event, value) => {
        //                         if (value !== null) {
        //                             setChargeStationRobots(value);
        //                         }
        //                         if(value > 0 && chargeStationPos === "") {
        //                             setChargeStationPos("tipped");
        //                         } else if(value < 1 && chargeStationPos !== "") {
        //                             setChargeStationPos("");
        //                         }
        //                     }}
        //                     aria-label="charging station robot count"
        //                     size="large"
        //                 >
        //                     <ToggleButton sx={{width: buttonWidthMax / 4, height: 50}} value={0} aria-label="No Robots">
        //                         None
        //                     </ToggleButton>
        //                     <ToggleButton sx={{width: buttonWidthMax / 4, height: 50}} value={1} aria-label="One Robot">
        //                         1
        //                     </ToggleButton>
        //                     <ToggleButton sx={{width: buttonWidthMax / 4, height: 50}} value={2} aria-label="Two Robots">
        //                         2
        //                     </ToggleButton>
        //                     <ToggleButton sx={{width: buttonWidthMax / 4, height: 50}} value={3} aria-label="Three Robots">
        //                         3
        //                     </ToggleButton>
        //                 </ToggleButtonGroup>
        //                 <ToggleButtonGroup
        //                     value={chargeStationPos}
        //                     exclusive
        //                     orientation="horizontal"
        //                     onChange={(event, value) => {
        //                         if (value !== null) {
        //                             setChargeStationPos(value);
        //                         }
        //                     }}
        //                     aria-label="charging station position"
        //                     size="large"
        //                 >
        //                     <ToggleButton sx={{width: buttonWidthMax / 3, height: 100}} value=""
        //                                   aria-label="Not Applicable" disabled={chargeStationRobots > 0}>
        //                         Not Applicable
        //                     </ToggleButton>
        //                     <ToggleButton sx={{width: buttonWidthMax / 3, height: 100}} value="tipped"
        //                                   aria-label="tipped position" disabled={chargeStationRobots < 1}>
        //                         Tipped
        //                     </ToggleButton>
        //                     <ToggleButton sx={{width: buttonWidthMax / 3, height: 100}} value="balanced"
        //                                   aria-label="balanced position" disabled={chargeStationRobots < 1}>
        //                         Balanced
        //                     </ToggleButton>
        //                 </ToggleButtonGroup>
        //             </Stack>
        //         </Box>
        //     )
        // } // Probably remove all this code because we can get it from TBA

        return (<>
            <Grid container columns={12} spacing={2} justifyContent="center"
                  sx={{width: "90%", mx: "5%", display: {xs: 'none', sm: 'block'}}}>
                <Grid item xs={12} sm={6}>
                    <ChargeStationUI isOnStation={isOnChargeStationEndgame} setIsOnStation={setIsOnChargeStationEndgame}/>
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>

                <Button variant="contained" sx={{marginLeft: "85%"}}>
                    <Typography variant="h5" color={"text.primary"}>Submit</Typography>
                </Button>

            </Grid>

            <Grid container columns={12} spacing={2} justifyContent="center"
                  sx={{width: "90%", mx: "2.5%", display: {xs: 'block', sm: 'none'}}}>
                <Grid item xs={12} sm={6}>
                    <ChargeStationUI isOnStation={isOnChargeStationEndgame} setIsOnStation={setIsOnChargeStationEndgame}/>
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>

                <Button variant="contained" sx={{marginLeft: "50%"}}>
                    <Typography variant="h5" color={"text.primary"}>Submit</Typography>
                </Button>

            </Grid>
        </>)
    }


    return (<>
        <BottomNav/>
        {activeStep === 0 && <PrematchPage/>}
        {activeStep === 1 && <AutoPage/>}
        {activeStep === 2 && <TeleopPage/>}
        {activeStep === 3 && <EndgamePage/>}


    </>)
}


export default DashboardScouting;
