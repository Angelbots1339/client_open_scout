import styles from './LandingAppBarButton.module.css';
import {Button, Typography} from "@mui/material";
import React from "react";
import Link from "next/link";

export interface ILandingAppBarButton {
    text: string;
    href: string;
}

const LandingAppBarButton: React.FC<ILandingAppBarButton> = ({text, href}) => {
    return (
        <div className={styles.container}>
            <Link href={href}>
                <Button className={styles.button} href={href} variant={"text"}>
                    <Typography variant="h6" height="100%">{text}</Typography>
                </Button>
            </Link>
        </div>

    )
};

export default LandingAppBarButton;