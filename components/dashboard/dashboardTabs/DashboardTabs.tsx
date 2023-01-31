import styles from './DashboardTabs.module.css';
import React, {useEffect, useState} from "react";
import {Box, IconButton, Tab, Tabs} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {CurrentTheme} from "../../../pages/_app";
import {ArrowBack} from "@mui/icons-material";
import {Stack} from "@mui/system";

export interface IDashboardTabs {
    children: React.ReactNode;
    tabs: Array<{name: string, href: string, idx: number}>;

    backButtonHref?: string;
}

const DashboardTabs: React.FC<IDashboardTabs> = ({children, tabs, backButtonHref}) => {

    const router = useRouter();

    // This is what causes the weird thing when you switch tabs. Find a way to make the index initialize to the correct index. Probably using this code:
    // tabs.map((item) => {
    //     if(item.href.split("/").pop() === router.asPath.split("/").pop()) {
    //         setCurrentIndex(item.idx);
    //     }
    // })
    const [currentIndex, setCurrentIndex] = useState(0);


    const changeCurrentIndex = (idx: number) => {
        setCurrentIndex(idx);
    }

    useEffect(() => {

        tabs.map((item) => {
            if(item.href.split("/").pop() === router.asPath.split("/").pop()) {
                setCurrentIndex(item.idx);
            }
        })

    }, [currentIndex, router, router.asPath, tabs])

    return (
        <div className={styles.container}>
            <Stack direction={"row"}>
                {backButtonHref && <Link style={{alignSelf: "left"}}
                               href={backButtonHref}>
                    <IconButton sx={{height:50, width:50, p:1}}>
                        <ArrowBack fontSize={"medium"}/>
                    </IconButton>
                </Link>}
                <Box sx={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <Tabs value={currentIndex} aria-label="Navigational Tabs">
                        {tabs.map((item) => {
                        return <NavTab label={item.name} href={item.href}
                                changeIndex={changeCurrentIndex}
                                index={item.idx} key={item.idx + item.name}/>
                        })}
                    </Tabs>
                </Box>
            </Stack>
            {children}
        </div>
    )
};

interface INavTab {
    label: string;
    href: string;
    changeIndex: (index: number) => void;
    index: number;
}
export const NavTab: React.FC<INavTab> = ({href, label, changeIndex, index}) => {

    const router = useRouter();

    return (
        <div>
            <Link href={href} passHref>
                <Tab style={{color: CurrentTheme().palette.primary.main}} component={"a"} label={label} onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    changeIndex(index);
                    router.push(href);
                    event.preventDefault();
                }}/>
            </Link>
        </div>
    )
}


export default DashboardTabs;