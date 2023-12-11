import { Grid } from "@mui/material";
import style from "./home.module.css";
// import HeTuLuoShu from "./components/HeTuLuoShu";
import Bamboo from "./../../assets/bamboo.svg";
import IronPagoda from "./../../assets/iron-pagoda.svg";
import ChinaTownGate from "./../../assets/chinatown-gate.svg";
import Logo from "../../components/Logo";
import DefaultImage from "../../assets/default-image.jpg";

const Home = () => {
    return (
        <Grid
            container
            display="block"
            alignItems="center"
            alignContent="center"
            className={style.homeContainer}
        >
            {/* <Grid container className={styles.content}>
                <Grid xs={12} sm={1}/>
                <Grid xs={12} sm={10} className={styles.wrapper}>
                    <HeTuLuoShu/>
                </Grid>
                <Grid xs={12} sm={1}/>
            </Grid> */}
            <Logo />
            <div className={style.contentContainer1}>
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 0 Q 300 75 700 30 Q 1100 -25 1500 20 L 1500 0 Z"
                        className={style.svgPrimary}
                    />
                    <path
                        d="M 0 0 Q 300 20 550 43 Q 225 60 0 0 Z"
                        className={style.svgSecondary}
                    />
                </svg>
                <div className={style.galleryContainer}>
                    {/* <div className={style.hanziBackground}>道</div> */}
                    <img
                        src={IronPagoda}
                        alt=""
                        className={style.imgIronPagoda}
                    />
                    <div className={style.gallery}>
                        <div className={style.imagesContainer}>
                            <img
                                src={DefaultImage}
                                alt=""
                                className={style.defaultImage}
                                style={{ rotate: "-20deg" }}
                            />
                            <img
                                src={DefaultImage}
                                alt=""
                                className={style.defaultImage}
                                style={{ rotate: "25deg" }}
                            />
                            <img
                                src={DefaultImage}
                                alt=""
                                className={style.defaultImage}
                                style={{ rotate: "-10deg" }}
                            />
                            <img
                                src={DefaultImage}
                                alt=""
                                className={style.defaultImage}
                                style={{ rotate: "10deg" }}
                            />
                            <img
                                src={DefaultImage}
                                alt=""
                                className={style.defaultImage}
                                style={{ rotate: "-5deg", marginTop: "-300px" }}
                            />
                        </div>
                        <div className={style.linkButton}>
                            <button>
                                <a href="/">了解世界和图中文教育学会</a>
                            </button>
                        </div>
                    </div>
                    {/* <img src={JunkVector} alt="" className={style.imgJunkVector} /> */}
                    <div className={style.gallery}>
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
                        成为真正的世界公民
                    </div>
                </div>
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 100 L 0 70 Q 300 120 700 70 Q 1100 20 1500 90 L 1500 100 Z"
                        className={style.svgPrimary}
                    />
                    <path
                        d="M 1500 90 Q 1200 33 850 55 Q 1150 70 1500 90 Z"
                        className={style.svgSecondary}
                    />
                </svg>
            </div>
            <div className={style.contentContainer2}>
                <img src={Bamboo} alt="" className={style.imgBamboo} />

                <div className={style.galleryContainer}>
                    <div className={style.gallery}>
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

                <div className={style.galleryContainer}>
                    <div className={style.imagesContainer} style={{ margin: "0 0 0 -400px" }}>
                        <img
                            src={DefaultImage}
                            alt=""
                            className={style.defaultImage}
                            style={{ rotate: "-5deg", margin: "0 0 -50px 0" }}
                        />
                        <img
                            src={DefaultImage}
                            alt=""
                            className={style.defaultImage}
                            style={{ rotate: "95deg", margin: "0 0 -40px -40px" }}
                        />
                        <div className={style.linkButton}>
                            <button className={style.circleButton}>
                                <a href="/">了解世界和图中文培训课程</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h3>培训反馈（选择两位老师对培训课程的评价）</h3> */}
            {/* <a href="/">加入课程</a> */}{" "}
            {/* this should be inside the page of 了解世界和图中文培训课程 */}
            <div className={style.contentContainer3}>
                <img src={ChinaTownGate} alt="" className={style.imgGate} />
                
                <div className={style.galleryContainer}>
                    <div className={style.imagesContainer} style={{ margin: "0 0 0 -400px" }}>
                        <img
                            src={DefaultImage}
                            alt=""
                            className={style.defaultImage}
                            style={{ rotate: "-5deg", margin: "20px 0 -50px 50px" }}
                        />
                        <img
                            src={DefaultImage}
                            alt=""
                            className={style.defaultImage}
                            style={{ rotate: "5deg", margin: "0 0 -60px -20px" }}
                        />
                        <div className={style.linkButton} style={{ margin: "60px 0 0px 50px" }}>
                            <button className={style.circleButton}>
                                <a href="/">了解世界和图中文教程</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={style.galleryContainer}>
                    <div className={style.gallery}>
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
            <div className={style.contentContainer4}>
                <div className={style.gallery}>
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
                <div className={style.linkButton}>
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
