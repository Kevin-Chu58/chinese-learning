import { Grid } from "@mui/material";
import "./style.css";
import Logo from "../../components/Logo";
import Postcard from "../../components/Postcard";
// import HeTuLuoShu from "./components/HeTuLuoShu";
import Bamboo from "./../../assets/bamboo.svg";
import IronPagoda from "./../../assets/iron-pagoda.svg";
import ChinaTownGate from "./../../assets/chinatown-gate.svg";
import ChineseLantern from "../../assets/chinese-lantern.svg";
import Confucius from "../../assets/confucius.svg";
import WHCEI from "../../assets/世界和图中文教育学会.jpg";
import DefaultImage from "../../assets/default-image.jpg";

const Home = () => {
    return (
        <Grid
            container
            display="block"
            alignItems="center"
            alignContent="center"
            className="homeContainer"
        >
            <Logo />
            {/* <div className="bar">
                <img src={ChineseLantern} alt="" />
                <img src={ChineseLantern} alt="" />
                <img src={ChineseLantern} alt="" />
            </div> */}
            <div className="left-align-box head">扎根本土筑基民族魂</div>
            <div className="left-align-box head second">面向世界融贯意识心</div>
            <div className="right-align-box">
                <img className="imgConfucius" src={Confucius} alt="" />
            </div>
            <div className="galleryContainer">
                <div className="gallery">
                    <div className="linkButton">
                        <button className="circleButton big persian-red">
                            <a className="big" href="/playground">
                                2023/2024世界和图中文师资培训项目已开启
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="contentContainer1">
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 0 Q 300 75 700 30 Q 1100 -25 1500 20 L 1500 0 Z"
                        className="svgPrimary"
                    />
                    <path
                        d="M 0 0 Q 300 20 550 43 Q 225 60 0 0 Z"
                        className="svgSecondary"
                    />
                </svg>
                <div className="galleryContainer">
                    {/* <div className="hanziBackground">道</div> */}
                    <img src={IronPagoda} alt="" className="imgIronPagoda" />
                    <div className="gallery">
                        <div className="imagesContainer">
                            <img
                                src={WHCEI}
                                alt=""
                                className="whceiImage"
                                style={{ rotate: "-10deg" }}
                            />
                        </div>
                        <div className="linkButton">
                            <button>
                                <a href="/">了解世界和图中文教育学会</a>
                            </button>
                        </div>
                    </div>
                    <div className="gallery">
                        世界和图中文教育学会
                        <br />
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
                    </div>
                </div>
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 100 L 0 70 Q 300 120 700 70 Q 1100 20 1500 90 L 1500 100 Z"
                        className="svgPrimary"
                    />
                    <path
                        d="M 1500 90 Q 1200 33 850 55 Q 1150 70 1500 90 Z"
                        className="svgSecondary"
                    />
                </svg>
            </div>
            <div className="contentContainer2">
                <img src={Bamboo} alt="" className="imgBamboo" />

                <div className="galleryContainer">
                    <div className="gallery">
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
                        融聚人类的终极关怀。
                    </div>
                </div>

                <div className="galleryContainer block">
                    <div className="gallery">
                        <Postcard
                            rotateDeg={-3}
                            title="学员评价"
                            context="跟着林源老师学了近四个月的和图中文，他给我打开了新的思路，激起我对中文的新的热诚。我感觉他做了很多奠基性的工作，但这只是开端，还有很多的工作要做，来揭示我们语言背后的秘密，来重新激活那个中文语言灵，让它复活和重生。 "
                            commenter="士学员秒浩"
                            hasButton={false}
                            hasImage={false}
                            left={-150}
                            chinaStampColor="red"
                            receivedStampColor="blue"
                        />
                        <Postcard
                            rotateDeg={8}
                            context="有道无术术可求，有术无道止于术。像这样讲“道”的课程实在不多，更何况是术道相合的课程，让我们带领孩子的时候能够知其然并知其所以然，从而达到流畅、自由、享受、滋润的状态，会情不自禁第创造出更多的可能性，让教学活动变得不言而喻的美好与流动。"
                            commenter="国学员红玲"
                            hasButton={false}
                            hasImage={false}
                            top={-230}
                            left={425}
                            chinaStampColor="red"
                        />
                        <Postcard
                        rotateDeg={-7}
                            context="林源老师将九宫格讲得特别深入和透彻，而且可以用身体体验，结合乘法口诀和诗歌走九宫，不同数字对应不同形状，然后到语法九宫，通过名词、动词、形容词、数量词等进行造句练习。通过九宫格，孩子们可以学到很多的知识，发展了意识的灵活性。"
                            commenter="香港学员Matt"
                            hasButton={false}
                            hasImage={false}
                            top={-120}
                            left={-40}
                            chinaStampColor="red"
                        />
                        <Postcard
                            rotateDeg={-1}
                            context="世界和图中文不仅能帮助华裔孩子学习语言、学习文化，找到自己的民族魂，也能帮助外国学生在掌握汉语技能的同时，深入道的普世智慧。所以在众多汉语教学课程中，唯有它能担当开启孩子内在智慧的重任。"
                            commenter="美国学员Vera"
                            hasButton={false}
                            hasImage={false}
                            top={-200}
                            left={540}
                            airmailStampColor="black"
                        />
                    </div>
                </div>
            </div>
            <h3 style={{ marginLeft: "200px" }}>
                培训反馈（选择两位老师对培训课程的评价）
            </h3>
            {/* <a href="/">加入课程</a> */}{" "}
            {/* this should be inside the page of 了解世界和图中文培训课程 */}
            <div className="contentContainer3">
                <img src={ChinaTownGate} alt="" className="imgGate" />

                {/* <div className="galleryContainer">
                    <div
                        className="imagesContainer"
                        style={{ margin: "20px 0 20px -300px" }}
                    >
                        <img
                            src={DefaultImage}
                            alt=""
                            className="defaultImage"
                            style={{ rotate: "-5deg", margin: "0 0 -50px 0" }}
                        />
                        <img
                            src={DefaultImage}
                            alt=""
                            className="defaultImage"
                            style={{
                                rotate: "95deg",
                                margin: "0 0 -40px -40px",
                            }}
                        />
                        <div className="linkButton">
                            <button className="circleButton intergalactic-ray">
                                <a href="/">了解世界和图中文培训课程</a>
                            </button>
                        </div>
                    </div>
                    <div
                        className="imagesContainer"
                        style={{ margin: "50px 0 100px -150px" }}
                    >
                        <img
                            src={DefaultImage}
                            alt=""
                            className="defaultImage"
                            style={{
                                rotate: "-5deg",
                                margin: "20px 0 -50px 50px",
                            }}
                        />
                        <img
                            src={DefaultImage}
                            alt=""
                            className="defaultImage"
                            style={{
                                rotate: "5deg",
                                margin: "0 0 -60px -20px",
                            }}
                        />
                        <div
                            className="linkButton"
                            style={{ margin: "60px 0 0px 50px" }}
                        >
                            <button className="circleButton bravado-red">
                                <a href="/playground">了解世界和图中文教程</a>
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className="galleryContainer">
                    <div className="gallery">
                        世界和图中文教程
                        <br />
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
                    </div>
                </div>
            </div>
            <div className="contentContainer4">
                <div className="galleryContainer">
                    <div className="gallery">
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
                    </div>
                </div>
                <div className="linkButton">
                    <button>
                        <a href="/">了解合作方案</a>
                    </button>
                </div>
            </div>
            <h3>选择一篇近期的向东方美篇中的图片、视频配上简要文字介绍</h3>
            <a href="/">浏览官方博客</a>
            <h3>
                保持联系
                <br />
                加入我们的邮件通讯
                <br />
                接收学会最新消息、培训及活动信息
                <br />
                请放心，您的信息不会被分享
            </h3>
            <h3>
                姓名框（可填写）
                <br />
                邮箱框（可填写）
                <br />
                捐款（可点击）
            </h3>
        </Grid>
    );
};

export default Home;
