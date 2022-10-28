import styles from './LandingAppBarButton.module.css';
import {Button, Typography} from "@mui/material";
import React from "react";

export interface ILandingAppBarButton {
    text: string;
    href: string;
}

const LandingAppBarButton: React.FC<ILandingAppBarButton> = ({text, href}) => {
    return (
        <div className={styles.container}>
                    <Button  className={styles.button} href={href} variant={"text"}>
                        <Typography>{text}</Typography>
                    </Button>
        </div>

    )};

export default LandingAppBarButton;