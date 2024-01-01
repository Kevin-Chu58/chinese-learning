import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const Introduction = () => {

    return (
        <div className="main-box" >
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                教程概述
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        世界和图中文的精神理念启发于“河图洛书”的故事：
                    </div>
                    <div className="left-align-box p1" style={{fontFamily: "kaiti"}}>
                        “《河图》者，伏羲氏王天下，龙马出河，遂则其文以画八卦。《洛书》者，禹治水时，
                        神龟负文而列于背，其数至九，禹遂因而第之，以成九类。”
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box p1">
                        中文之文来自于纹，纹来自于图象，图象来自于中国先圣所创的龙手易、
                        连山易、太极图、河图洛书、易经卦图、内景图、修真图，这些图合称“和图”，
                        他们不仅是中华语言文化的根本，也是演绎人类世界的和谐蓝图，故称为世界和图。
                    </div>
                    <div className="left-align-box p1">
                        世界和图中文教程是林源老师在中国传统文化和华德福教育的双重启迪下，
                        从 2003-2023 二十年在美国和中国两地从事中文教学过程中形成的一套融合中文课程。
                    </div>
                    <div className="left-align-box p1">
                        通过二十年的教学及研究，林源老师发展了汉语作为外语的教学大纲，
                        汉语作为母语的 1-12 年级教学大纲，以及双语教学的大纲，是适合世界各地全日制学校、
                        周末学校、课后班、家庭学校、社区学校等进行汉语教学的一套完备的中文课程。
                    </div>
                    <div className="left-align-box p1">
                        世界和图中文教程是建立在河图洛书、太极八卦、易经图、内景图、修真图基础上，
                        与中国人思维中象数理气四元素同构的一个完整、有序而有机的体系。由此而延伸出多个系列。
                    </div>
                    <div className="left-align-box p1">
                        并且教程的所有内容及方法与学生不同年龄的生理心理特征相匹配，
                        整个教程形成天-语-人合一的和谐境界。
                    </div>
                </div>
            </div>

            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navRight="/twenty-years"
                    textRight="二十年回眸"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Introduction;