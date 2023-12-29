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
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import React from "react";

const drawerList = [
    {
        main: {
            title: "世界和图中文教育学会",
            nav: "/",
        },
        sub: [
            {
                title: "关于学会",
                nav: "/about/",
            },
            {
                title: "认识创办人",
                nav: "/playground/",
            },
        ],
    },
    {
        main: {
            title: "世界和图中文教程",
            nav: "/demo/",
        },
        sub: [
            {
                title: "教程介绍",
                nav: "/demo/",
            },
            {
                title: "教学原理",
                nav: "/demo/",
            },
            {
                title: "二十年回眸",
                nav: "/demo/",
            },
            {
                title: "教程内容",
                nav: "/demo/",
            },
            {
                title: "教学方法",
                nav: "/demo/",
            },
            {
                title: "教学效果",
                nav: "/demo/",
            },
        ],
    },
    {
        main: {
            title: "华德福教育",
            nav: "/demo/",
        },
        sub: [
            {
                title: "什么是华德福教育",
                nav: "/demo/",
            },
            {
                title: "华德福教育的基础",
                nav: "/demo/",
            },
            {
                title: "华德福教育的益处",
                nav: "/demo/",
            },
            {
                title: "华德福教师的核心角色",
                nav: "/demo/",
            },
            {
                title: "华德福教育的缘起",
                nav: "/demo/",
            },
        ],
    },
    {
        main: {
            title: "教师培训课程",
            nav: "/demo/",
        },
        sub: [
            {
                title: "招生简介",
                nav: "/demo/",
            },
            {
                title: "课程安排",
                nav: "/demo/",
            },
            {
                title: "课程设计思路",
                nav: "/demo/",
            },
            {
                title: "线上课程介绍",
                nav: "/demo/",
            },
            {
                title: "教师团队",
                nav: "/demo/",
            },
            {
                title: "报名信息",
                nav: "/demo/",
            },
            {
                title: "公开课",
                nav: "/demo/",
            },
        ],
    },
    {
        main: {
            title: "邀约与合作",
            nav: "/demo/",
        },
        sub: [],
    },
];

type Props = {
    hidden: boolean;
    onClick: (event: {}) => void;
};

const Header = ({
    hidden,
    onClick,
    ...otherProps
}: PropsWithChildren<Props>) => {
    const [drawerOn, setDrawerOn] = useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            console.log(window.location.pathname);
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
        <Box sx={{ width: 250 }} role="presentation">
            <List sx={{ paddingTop: 0 }}>
                <ListItem
                    sx={{
                        backgroundColor: "#9C2727",
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
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
                        <ListItem key={item.main.title} disablePadding sx={{}}>
                            <ListItemButton sx={{cursor: "default"}}>
                                <Link
                                    href={item.main.nav}
                                    sx={{
                                        textDecoration: "none",
                                        fontSize: "large",
                                        fontWeight: "bold",
                                        color: setListItemHighlight(
                                            item.main.nav
                                        ),
                                        ":hover": {
                                            color: "#cd3736",
                                            textDecoration: "none",
                                        },
                                    }}
                                >
                                    {item.main.title}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                        {item.sub.map((subItem) => (
                            <ListItem>
                                <ListItemButton sx={{cursor: "default"}}>
                                    <Link
                                        href={subItem.nav}
                                        sx={{
                                            textDecoration: "none",
                                            color: setListItemHighlight(
                                                subItem.nav
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
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <header id="header" className="header">
            <div className="box fd-row header-container">
                <div className="whcei">WHCEI</div>

                <Switch className="center-vertical lang-switch" />

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

                    <button onClick={onClick} className="header-button">
                        <MoreVertIcon className="center-vertical" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
