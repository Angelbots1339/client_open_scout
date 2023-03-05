import styles from './BottomNav.module.css';
import React, {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";


export interface IBottomNav {
    tabs: Array<{name: string, icon: any, idx: number}>;

    setActive: (idx: number) => void;
}

const BottomNav: React.FC<IBottomNav> = ({ tabs, setActive: setExternalActive}) => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        setExternalActive(active);
    }, [active, setExternalActive])


    return (
        <div className={styles.container}>
            <BottomNavigation
                showLabels
                value={active}
                onChange={(event, newValue) => {
                    setActive(newValue);
                }}
            >
                {tabs.map((tab) => {

                    return <BottomNavigationAction key={tab.name + tab.idx} label={tab.name} icon={tab.icon}/>

                })}
            </BottomNavigation>
        </div>
    )
};

export default BottomNav;