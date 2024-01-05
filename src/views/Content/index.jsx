import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";
import Content1 from "../../assets/images/content1.png";

const Content = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                教程内容
            </div>

            <div className="center-align-box">
                <img src={Content1} alt="founder" className="w400 no-margin" />
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>一</div>
                    <div className="left-align-box p1">
                        由一百多个基本字按照易学象数理气顺序组成一幅《百字和图》，
                        由这张百字和图延伸出一首表现宇宙自然人文物理的“百字中文诗”。
                        它成为和图中文读写启蒙教材。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>二</div>
                    <div className="left-align-box p1">
                        由“百字和图”的元道、阴阳、三才、四象、五行、六生、七情、八卦、九宫、
                        十义、十一灵、十二属相为主题延伸出童谣、游戏及神话故事的口述汉语系列。
                        这些与儿童年龄段心理特点相衔接的童谣及故事系列，成为和图中文口语启蒙教材。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>三</div>
                    <div className="left-align-box p1">
                        以“汉语声韵太极操”及拼音歌为特色的汉语拼音及注音符号教学方案。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>四</div>
                    <div className="left-align-box p1">
                        在百字中文基础上，根据“六书”规则延伸出一篇述说中国地理、历史、人文、
                        科学及社会道德的《千字中文》，成为和图中文读写进阶教程。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>五</div>
                    <div className="left-align-box p1">
                        由小品、笑话、短剧构成的当代生活场景的汉语日常用语。
                        其中包括《你好-汉语会话入门100句》，
                        《我和你—汉语会话进阶365句》《你我他—汉语会话交流900句》。
                        它们组成和图中文口语会话系列教程。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>六</div>
                    <div className="left-align-box p1">
                        和图中文文化教程包括中国地理、历史、社会、科学技术等内容，
                        也包括文化历史现场进行游学的方案，如“神游黄河水，梦回夏商周”、“游浩浩长江、
                        铸中华诗魂”“陆上丝绸之路”“海上丝绸之路”“听大头天话，解良渚文明”“生命的言说诗歌板块”
                        “南京近代史和艺术板块”“行道者—林则徐”“十走武当山”等。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>七</div>
                    <div className="left-align-box p1">
                        精选中国古今诗文名篇作精读文本组成的和图语文综合教程，学习句读章法，
                        体会经典汉语音韵，探究文化意蕴，汲取母语精华。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>八</div>
                    <div className="left-align-box p1">
                        在“百字和图”的九宫格结构基础上，通过对中国人思维方式的深刻分析，
                        归纳出汉语的字词句章法，包括色和图、音和图、字和图、句和图、章和图，
                        从未发展出独特的“和图汉语语法”。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>十</div>
                    <div className="left-align-box p1">
                        根据民间故事或经典改编的1-12年级戏剧，作为言说演讲的教材。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>十一</div>
                    <div className="left-align-box p1">
                        与1-12年级儿童发展匹配的中文主课板块教学，每个年级提供3-4个人文板块教学案例及详细课件。
                    </div>
                    <div className="center-align-box h3" style={{fontFamily: "HYZhuanShuF"}}>十二</div>
                    <div className="left-align-box p1">
                        汉语作为母语的中文主课教学大纲；中文作为双语之一的教学大纲；
                        中文作为第二外语的教学大纲。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/principle"
                    textLeft="教学原理"
                    navRight="/method"
                    textRight="教学方法"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Content;