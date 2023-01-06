import styles from './DashboardTabs.module.css';
import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {CurrentTheme} from "../../../pages/_app";

export interface IDashboardTabs {
    children: React.ReactNode;
    index: number;
}

const DashboardTabs: React.FC<IDashboardTabs> = ({children, index}) => {
    const [currentIndex, setCurrentIndex] = useState(index);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentIndex(newValue);
    }

    useEffect(() => {
        setCurrentIndex(index);
    }, [currentIndex, index])

    return (
        <div className={styles.container}>
            <Tabs value={currentIndex} onChange={handleChange} aria-label="Navigational Tabs">
                {children}
            </Tabs>
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