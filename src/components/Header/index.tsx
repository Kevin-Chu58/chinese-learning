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
        title: "世界和图中文教育学会",
        nav: "/",
        sub: [
            {
                title: "关于学会",
                nav: "/about",
            },
            {
                title: "认识创办人",
                nav: "/founder",
            },
        ],
    },
    {
        title: "世界和图中文教程",
        nav: "/",
        sub: [
            // {
            //     title: "关于学会",
            //     nav: "/about",
            // },
            // {
            //     title: "认识创办人",
            //     nav: "/founder",
            // },
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
        title: "华德福教育",
        nav: "/",
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
        title: "教师培训课程",
        nav: "/",
        sub: [
            {
                title: "招生简介",
                nav: "/demo",
            },
            {
                title: "课程安排",
                nav: "/demo",
            },
            {
                title: "课程设计思路",
                nav: "/demo",
            },
            {
                title: "线上课程介绍",
                nav: "/demo",
            },
            {
                title: "教师团队",
                nav: "/demo",
            },
            {
                title: "报名信息",
                nav: "/demo",
            },
            {
                title: "公开课",
                nav: "/demo",
            },
        ],
    },
    {
        title: "邀约与合作",
        nav: "/",
        sub: [],
    },
];

type Props = {

};

const Header = ({
    ...otherProps
}: PropsWithChildren<Props>) => {
    const [drawerOn, setDrawerOn] = useState(false);

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
        <Box style={{ width: 250, position: "sticky", top: 0 }} role="presentation">
            <List sx={{ paddingTop: 0 }}>
                <ListItem
                    key="drawer-toolbar"
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
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{cursor: "default"}}>
                                <Link
                                    href={`${item.nav}`}
                                    sx={{
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
                        </ListItem>
                        {item.sub.map((subItem) => (
                            <ListItem key={subItem.title}>
                                <ListItemButton sx={{cursor: "default"}}>
                                    <Link
                                        href={`${subItem.nav}`}
                                        sx={{
                                            textDecoration: "none",
                                            color: setListItemHighlight(
                                                `${subItem.nav}`
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

                    <button onClick={() => {}} className="header-button">
                        <MoreVertIcon className="center-vertical" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
