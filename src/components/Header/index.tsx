import "./style.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
    Switch,
    Box,
    List,
    ListItem,
    ListItemButton,
    Drawer,
    Divider,
    Link,
    IconButton,
    Collapse,
    ListItemText,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";

type Props = {
    isSwitchOn: boolean;
};

const Header = ({
    isSwitchOn,
    ...otherProps
}: PropsWithChildren<Props>) => {
    const [drawerOn, setDrawerOn] = useState(false);
    const drawerTitles = [
        "世界和图中文教育学会",
        "世界和图中文教程",
        "华德福教育",
        "教师培训课程",
        "邀约与合作",
    ]; //"邀约与合作" has no collapse
    const [onTitle, setOnTitle] = useState(""); // if onTitle === "closed", then useEffect cannot overwrite it
    const [switchOn, setSwitchOn] = useState(isSwitchOn);
    const [openTitle1, setOpenTitle1] = useState(false); // "世界和图中文教育学会"
    const [openTitle2, setOpenTitle2] = useState(false); // "世界和图中文教程"
    const [openTitle3, setOpenTitle3] = useState(false); // "华德福教育"
    const [openTitle4, setOpenTitle4] = useState(false); // "教师培训课程"

    useEffect(() => {
        const originURL = checkURL() ? window.location.href.slice(0, -3) : window.location.href;
        const lastSlash = originURL.lastIndexOf('/');
        const currentTitle = findOnTitle(originURL.slice(lastSlash));
        if (onTitle !== "closed")
            setOnTitle(currentTitle ?? "");

        setOpenTitle1(onTitle === drawerTitles[0] || openTitle1);
        setOpenTitle2(onTitle === drawerTitles[1] || openTitle2);
        setOpenTitle3(onTitle === drawerTitles[2] || openTitle3);
        setOpenTitle4(onTitle === drawerTitles[3] || openTitle4);
    });

    const checkURL = () => {
        return window.location.href.endsWith("/en");
    };

    const setURL = (url: string) => {
        return checkURL()
            ? url.slice(0, -3)
            : `${url}${
                  url.endsWith("/") ? "en" : "/en"
              }`;
    }

    const onSwitch = () => {
        setSwitchOn(checkURL());
        window.location.href = setURL(window.location.href);
    };

    const drawerList = [
        {
            title: drawerTitles[0],
            hasCollapsed: true,
            onOpen: openTitle1,
            setOnOpen: setOpenTitle1,
            sub: [
                {
                    title: "关于学会",
                    nav: "/abouts",
                },
                {
                    title: "认识创办人",
                    nav: "/founder",
                },
            ],
        },
        {
            title: drawerTitles[1],
            hasCollapsed: true,
            onOpen: openTitle2,
            setOnOpen: setOpenTitle2,
            sub: [
                {
                    title: "教程介绍",
                    nav: "/introduction",
                },
                {
                    title: "二十年回眸",
                    nav: "/twenty-years",
                },
                {
                    title: "教学原理",
                    nav: "/principle",
                },
                {
                    title: "教程内容",
                    nav: "/content",
                },
                {
                    title: "教学方法",
                    nav: "/method",
                },
                {
                    title: "教学效果",
                    nav: "/effect",
                },
            ],
        },
        {
            title: drawerTitles[2],
            hasCollapsed: true,
            onOpen: openTitle3,
            setOnOpen: setOpenTitle3,
            sub: [
                {
                    title: "什么是华德福教育",
                    nav: "/what-is-waldorf",
                },
                {
                    title: "华德福教育的基石",
                    nav: "/waldorf-cornerstone",
                },
                {
                    title: "华德福教育的益处",
                    nav: "/waldorf-benefit",
                },
                {
                    title: "华德福教师的核心角色",
                    nav: "/waldorf-teacher-core-role",
                },
                {
                    title: "华德福教育的缘起",
                    nav: "/waldorf-origin",
                },
            ],
        },
        {
            title: drawerTitles[3],
            hasCollapsed: true,
            onOpen: openTitle4,
            setOnOpen: setOpenTitle4,
            sub: [
                {
                    title: "招生简介",
                    nav: "/admission-introduction",
                },
                {
                    title: "课程安排",
                    nav: "/class-schedule",
                },
                {
                    title: "课程设计思路",
                    nav: "/course-design",
                },
                {
                    title: "线上课程介绍",
                    nav: "/online-course",
                },
                {
                    title: "教师团队",
                    nav: "/teachers",
                },
                {
                    title: "报名信息",
                    nav: "/register-info",
                },
                {
                    title: "公开课",
                    nav: "/public-course",
                },
            ],
        },
        {
            title: drawerTitles[4],
            nav: "/invitation-cooperation",
            hasCollapsed: false,
            sub: [],
        },
    ];

    const findOnTitle = (nav: string) => {
        for (let item = 0; item < drawerList.length; item++) {
            for (let subItem = 0; subItem < drawerList[item].sub.length; subItem++) {
                if (drawerList[item].sub[subItem].nav === nav)
                    return drawerList[item].title;
            }
        }
    }

    const handleClick = (onOpen, setOnOpen) => {
        setOnOpen(!onOpen);
    };

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setDrawerOn(open);
        };

    const setListItemHighlight = (nav: String) => {
        return window.location.pathname === nav ? "#cd3736" : "black";
    };

    const list = () => (
        <Box style={{ width: 250 }} role="presentation">
            <List sx={{ paddingTop: 0 }}>
                <ListItem
                    key="drawer-toolbar"
                    sx={{
                        backgroundColor: "#9C2727",
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: "sticky",
                        top: 0,
                        zIndex: 5,
                    }}
                >
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{
                            width: 50,
                            height: 50,
                            margin: "0 0 0 180px",
                            color: "white",
                            ":hover": {
                                backgroundColor: "#cd3736",
                            },
                        }}
                    >
                        <CloseIcon className="center-vertical" />
                    </IconButton>
                </ListItem>

                {drawerList.map((item) => (
                    <div>
                        <Divider />
                        <ListItem
                            key={item.title}
                            disablePadding
                            onClick={() =>
                                handleClick(item.onOpen, item.setOnOpen)
                            }
                        >
                            {item.hasCollapsed ? (
                                <ListItemButton onClick={() => onTitle === item.title && item.onOpen ? setOnTitle("closed") : null}>
                                    <ListItemText
                                        primary={
                                            <Box
                                                sx={{
                                                    fontWeight: "bold",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                        }
                                    />
                                    {item.onOpen ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                            ) : (
                                <ListItemButton sx={{ fontWeight: "default" }}>
                                    <Link
                                        href={`${item.nav}`}
                                        sx={{
                                            width: 250,
                                            textDecoration: "none",
                                            fontSize: "large",
                                            fontWeight: "bold",
                                            color: setListItemHighlight(
                                                `${item.nav}`
                                            ),
                                            ":hover": {
                                                color: "#cd3736",
                                                textDecoration: "none",
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </ListItemButton>
                            )}
                        </ListItem>
                        {item.hasCollapsed ? (
                            <Collapse
                                in={item.onOpen}
                                timeout="auto"
                                unmountOnExit
                            >
                                {item.sub.map((subItem) => (
                                    <ListItem key={subItem.title}>
                                        <ListItemButton
                                            sx={{ cursor: "default" }}
                                        >
                                            <Link
                                                href={`${subItem.nav}${
                                                    switchOn ? "/en" : ""
                                                }`}
                                                onClick={() => {}}
                                                sx={{
                                                    width: 220,
                                                    textDecoration: "none",
                                                    color: setListItemHighlight(
                                                        `${subItem.nav}${
                                                            switchOn
                                                                ? "/en"
                                                                : ""
                                                        }`
                                                    ),
                                                    ":hover": {
                                                        color: "#cd3736",
                                                        textDecoration: "none",
                                                    },
                                                }}
                                            >
                                                {subItem.title}
                                            </Link>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Collapse>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <header id="header" className="header">
            <div className="box fd-row header-container">
                <Link href="/" className="whcei">
                    WHCEI
                </Link>

                <Switch
                    checked={switchOn}
                    onChange={onSwitch}
                    className="center-vertical lang-switch"
                />

                <div className="tool-container">
                    <React.Fragment>
                        <button
                            onClick={toggleDrawer(true)}
                            className="header-button"
                        >
                            <MenuIcon className="center-vertical" />
                        </button>
                        <Drawer
                            anchor="right"
                            open={drawerOn}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>
                    </React.Fragment>

                    <button onClick={() => {}} className="header-button">
                        <MoreVertIcon className="center-vertical" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
