import { Grid, ImageList, ImageListItem } from "@mui/material";
import "./style.css";
import Logo from "../../components/Logo";
import Postcard from "../../components/Postcard";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
// ornamental section break
import MainOramentalSectionBreak from "../../assets/main-ornamental-section-break";
import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
// images
import daoMap1 from "../../assets/images/dao-map1.jpg";
import luoShu from "../../assets/images/luo-shu.jpg";
import hundredHanzi from "../../assets/images/hundred-hanzi.png";
import lesson1 from "../../assets/images/lesson1.png";
import lesson2 from "../../assets/images/lesson2.png";
import lesson3 from "../../assets/images/lesson3.png";
import lesson4 from "../../assets/images/lesson4.png";
import lesson5 from "../../assets/images/lesson5.png";
import outside1 from "../../assets/images/outside1.png";
import outside2 from "../../assets/images/outside2.png";
import outside3 from "../../assets/images/outside3.png";
import outside4 from "../../assets/images/outside4.png";
import outside5 from "../../assets/images/outside5.png";
import outside6 from "../../assets/images/outside6.png";
import outside7 from "../../assets/images/outside7.png";

const itemData了解世界和图中文教育学会 = [
    {
        img: lesson1,
        title: "",
    },
    {
        img: lesson2,
        title: "",
    },
    {
        img: lesson3,
        title: "",
    },
];

const itemData了解世界和图中文教育学会plus = [
    {
        img: lesson4,
        title: "",
    },
    {
        img: lesson5,
        title: "",
    },
];

const itemData世界和图中文教师培训课程 = [
    {
        img: daoMap1,
        title: "",
    },
    {
        img: luoShu,
        title: "",
    },
    {
        img: hundredHanzi,
        title: "",
    },
];

const itemData世界和图中文课程 = [
    {
        img: outside1,
        title: "",
    },
    {
        img: outside2,
        title: "",
    },
    {
        img: outside3,
        title: "",
    },
    {
        img: outside6,
        title: "",
        cols: 2,
    },
    {
        img: outside4,
        title: "",
    },
    {
        img: outside5,
        title: "",
    },
    {
        img: outside7,
        title: "",
        cols: 2,
    },
];

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth); // check width size of the window
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const srcset = (image, size, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    };

    return (
        <Grid
            container
            display="block"
            alignItems="center"
            alignContent="center"
            className="main-box"
        >
            <Logo />

            <div className="center-align-box no-margin bg-lg-red">
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 0 Q 300 75 700 30 Q 1100 -25 1500 20 L 1500 0 Z"
                        className="svg-primary"
                    />
                    <path
                        d="M 0 0 Q 300 20 550 43 Q 225 60 0 0 Z"
                        className="svg-secondary"
                    />
                </svg>
                <div className="center-align-box fd-row">
                    <div className="center-align-box">
                        <div className="left-align-box h0 kaiti bolder">
                            扎根本土筑基民族魂
                        </div>
                        <div className="left-align-box h0 tap kaiti bolder">
                            面向世界融贯意识心
                        </div>
                    </div>
                    <div className="center-align-box marginx_50">
                        <button className="circle-button big citrine-white-outline">
                            <a className="big" href="/admission-introduction">
                                2023/2024世界和图中文师资培训项目已开启
                            </a>
                        </button>
                    </div>
                </div>
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 100 L 0 70 Q 300 120 700 70 Q 1100 20 1500 90 L 1500 100 Z"
                        className="svg-primary"
                    />
                    <path
                        d="M 1500 90 Q 1200 33 850 55 Q 1150 70 1500 90 Z"
                        className="svg-secondary"
                    />
                </svg>
            </div>

            {width >= 500 ? (
                <div className="center-align-box">
                    <div className="center-align-box fd-row">
                        <img
                            className="w400-gallery shade rotate_-5 no-margin"
                            src={lesson1}
                            alt=""
                        />
                        <img
                            className="w400-gallery shade top_-75 no-margin"
                            src={lesson2}
                            alt=""
                        />
                        <img
                            className="w400-gallery shade rotate_5 no-margin"
                            src={lesson3}
                            alt=""
                        />
                    </div>
                    <button className="circle-button bg-vallarta-blue top_-150">
                        <a href="/abouts">了解世界和图中文教育学会</a>
                    </button>
                </div>
            ) : 
                (<div className="center-align-box">
                    <button className="classic-button bg-vallarta-blue marginy_10 shade enlarge no-margin">
                        <a href="/abouts">了解世界和图中文教育学会</a>
                    </button>
                    <ImageList
                        sx={{ width: 350 }}
                        variant="quilted"
                        cols={1}
                        rowHeight={200}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData了解世界和图中文教育学会.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            )}

            <div className="center-align-box vw70 p0">
                倡导面向未来的中文教育
                <br />
                以根植于东方的文明、文化和思维，
                <br />
                并支持儿童身心健康发展的华德福教育理念，
                <br />
                以期让越来越多的中外孩子
                <br />
                在获得汉语技能的同时，
                <br />
                有缘走进最古老而又从未间断的东方文明，
                <br />
                共享其智慧果实
                <br />
                由不同走向共同
                <br />
                成为真正的世界公民。
                <StarOramentalSectionBreakShort />
            </div>

            {width >= 500 ? (
                <div className="center-align-box">
                    <div className="center-align-box fd-row">
                        <img
                            className="w400-gallery shade"
                            src={lesson4}
                            alt=""
                        />
                        <img
                            className="w400-gallery shade"
                            src={lesson5}
                            alt=""
                        />
                    </div>
                </div>
            ) : 
                (<div className="center-align-box">
                    <ImageList
                        sx={{ width: 350 }}
                        variant="quilted"
                        cols={1}
                        rowHeight={220}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData了解世界和图中文教育学会plus.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            )}

            <div className="center-align-box vw70 p0">
                教育是改变社会的力量。
                <br />
                作为师者，永远是黑暗中的火炬手，是时代迷雾的灯塔。
                <br />
                如果您热爱教育和孩子，
                <br />
                热爱自然与艺术，
                <br />
                热衷于探索宇宙和生命的真相，
                <br />
                欢迎您的加入，成为我们的一员。
                <br />
                用教育让民族精神源泉，注入我们的血液；
                <br />
                用合作的智慧，超越血缘与民族，
                <br />
                融聚人类的终极关怀
            </div>

            <div className="center-align-box vw70">
                <MainOramentalSectionBreak color="#9C2727">
                    培训反馈
                </MainOramentalSectionBreak>
                <Postcard
                    context="跟着林源老师学了近四个月的和图中文，他给我打开了新的思路，激起我对中文的新的热诚。我感觉他做了很多奠基性的工作，但这只是开端，还有很多的工作要做，来揭示我们语言背后的秘密，来重新激活那个中文语言灵，让它复活和重生。 "
                    commenter="瑞士学员秒浩"
                    hasButton={false}
                    hasImage={false}
                />
                <Postcard
                    context="有道无术术可求，有术无道止于术。像这样讲“道”的课程实在不多，更何况是术道相合的课程，让我们带领孩子的时候能够知其然并知其所以然，从而达到流畅、自由、享受、滋润的状态，会情不自禁第创造出更多的可能性，让教学活动变得不言而喻的美好与流动。"
                    commenter="中国学员红玲"
                    hasButton={false}
                    hasImage={false}
                />
                <Postcard
                    context="林源老师将九宫格讲得特别深入和透彻，而且可以用身体体验，结合乘法口诀和诗歌走九宫，不同数字对应不同形状，然后到语法九宫，通过名词、动词、形容词、数量词等进行造句练习。通过九宫格，孩子们可以学到很多的知识，发展了意识的灵活性。"
                    commenter="香港学员Matt"
                    hasButton={false}
                    hasImage={false}
                />
                <Postcard
                    context="世界和图中文不仅能帮助华裔孩子学习语言、学习文化，找到自己的民族魂，也能帮助外国学生在掌握汉语技能的同时，深入道的普世智慧。所以在众多汉语教学课程中，唯有它能担当开启孩子内在智慧的重任。"
                    commenter="美国学员Vera"
                    hasButton={false}
                    hasImage={false}
                />

                <StarOramentalSectionBreakShort />
            </div>

            {width >= 500 ? (
                <div className="center-align-box">
                    <div className="center-align-box fd-row">
                        <img
                            className="w400-gallery shade rotate_-5 no-margin"
                            src={daoMap1}
                            alt=""
                        />
                        <img
                            className="w400-gallery shade top_-75 no-margin"
                            src={hundredHanzi}
                            alt=""
                        />
                        <img
                            className="w400-gallery shade rotate_5 no-margin"
                            src={luoShu}
                            alt=""
                        />
                    </div>
                    <button className="circle-button bg-horsetail top_-150">
                        <a href="/admission-introduction">世界和图中文教师培训课程</a>
                    </button>
                </div>
            ) : 
                (<div className="center-align-box">
                    <button className="classic-button bg-horsetail marginy_10 shade enlarge no-margin">
                        <a href="/admission-introduction">世界和图中文教师培训课程</a>
                    </button>
                    <ImageList
                        sx={{ width: 350 }}
                        variant="quilted"
                        cols={1}
                        rowHeight={310}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData世界和图中文教师培训课程.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            )}

            <div className="center-align-box vw70 p0">
                源于中国传统文化和华德福教育的双重启迪，
                <br />
                历经二十年的发展历程，
                <br />
                形成了汉语作为外语的教学大纲
                <br />
                汉语作为母语的1-12年级教学大纲
                <br />
                双语的教学大纲，
                <br />
                是适合世界各地全日制学校、
                <br />
                周末学校、课后班、家庭学校、社区学校等
                <br />
                进行汉语教学的一套完备的中文课程。
                <br />
                并且教程的所有内容及方法
                <br />
                与中国人思维中象数理气四元素同构，
                <br />
                与学生不同年龄的生理心理特征相匹配，
                <br />
                整个教程形成天-语-人合一的和谐境界。
                <StarOramentalSectionBreakShort />
            </div>

            {width >= 900 ? (
                <div className="center-align-box">
                    <ImageList
                        sx={{ width: 800 }}
                        variant="quilted"
                        cols={3}
                        rowHeight={200}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData世界和图中文课程.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <button className="circle-button bg-pohutukawa top_-75">
                        <a href="/introduction">世界和图中文课程</a>
                    </button>
                </div>
            ) : width >= 500 ? (
                <div className="center-align-box">
                    <ImageList
                        sx={{ width: 500 }}
                        variant="quilted"
                        cols={3}
                        rowHeight={150}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData世界和图中文课程.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <button className="circle-button bg-pohutukawa top_-75">
                        <a href="/introduction">世界和图中文课程</a>
                    </button>
                </div>
            ) : (
                <div className="center-align-box">
                    <button className="classic-button bg-pohutukawa marginy_10 shade enlarge no-margin">
                        <a href="/introduction">世界和图中文课程</a>
                    </button>
                    <ImageList
                        sx={{ width: 350 }}
                        variant="quilted"
                        cols={3}
                        rowHeight={80}
                        style={{ overflow: "hidden", margin: "0 auto" }}
                    >
                        {itemData世界和图中文课程.map((item) => (
                            <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            )}

            <div className="center-align-box vw70 p0">
                学会热情欢迎各类合作
                <br />
                世界和图中文教程在二十年的发展中
                <br />
                积累了丰硕的教学成果
                <br />
                愿意走出课堂，走向社会
                <br />
                和我们有着相同理念的
                <br />
                教学机构、文化组织、社会团体合作，
                <br />
                共同推进中文教育品质的提升
                <br />
                促进中华文化交流与创新
                <br />
                开展有益社区和谐发展的各类活动或公益项目
                <br />
                共同为孩子创造一个能支持他们身心健康发展的
                <br />
                学习、生活以及社区环境
                <StarOramentalSectionBreakShort />
            </div>

            <div className="center-align-box no-margin vw100">
                <svg viewBox="0 0 800 175" aria-hidden="true">
                    <path
                        className="svg-main-theme"
                        d="M 550 175 L 530 85 L 515 100 L 475 0 L 420 60 L 395 60 L 355 90 L 316 55 
                            L 240 173 L 246 173 L 316 65 L 347 97 L 325 140 L 395 70 L 400 90 L 473 10 L 508 105 L 475 120 
                            L 440 160 L 490 127 L 510 150 L 500 120 L 527 97 L 535 133 L 520 140 L 537 140 L 545 175 Z"
                    />
                </svg>
            </div>

            <Footer />
        </Grid>
    );
};

export default Home;
