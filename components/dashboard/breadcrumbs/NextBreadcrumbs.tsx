import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from "next/link";
import {CurrentTheme} from "../../../pages/_app";


const generatePathParts = (pathStr: string) => {
    const pathWithoutQuery = pathStr.split("?")[0];
    return pathWithoutQuery.split("/")
        .filter(v => v.length > 0);
}
const cleanUpText = (text: string) => {
    return (text[0].toUpperCase() +  text.slice(1)).replace("%20", " ").replace("]", "").replace("[", "");
}

interface IBreadCrumb {
    text: string;
    href: string;
    plain: boolean;
}

/**
 *
 * Procedurally generates mui breadcrumbs based off the current url
 *
 */
export default function NextBreadcrumbs() {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([{text: "", href: "", plain: false}]);

    useEffect(() => {

        const generateBreadcrumbs = () => {
            const pathArr = generatePathParts(router.asPath);
            let temp = pathArr.map((path, idx) => {
                return {
                    text: cleanUpText(path),
                    href: "/" + pathArr.slice(0, idx + 1).join("/"),
                    plain: idx === pathArr.length - 1
                }
            })

            setBreadcrumbs(temp);
        }

        generateBreadcrumbs();
    }, [router, router.asPath])

    const BreadCrumb: React.FC<IBreadCrumb> = ({text, href, plain}) => {

        return (<div>
            {!plain ? <Link href={href} passHref>
                    <Typography color={CurrentTheme().palette.text.primary} sx={{cursor:"pointer"}}>{text}</Typography>
            </Link>

                : <Typography color={CurrentTheme().palette.text.primary}>{text}</Typography>
            }
        </div>)
    }

    return (
        <div>
            <Breadcrumbs style={{color: CurrentTheme().palette.text.primary}}>
                {breadcrumbs.map(({text, href, plain}, idx) => {
                    return <BreadCrumb text={text} href={href} plain={plain} key={text + idx}/>
                })}
            </Breadcrumbs>
        </div>
    )
}