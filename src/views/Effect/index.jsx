import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const Effect = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                教学效果
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        通过口语启蒙、写读认字、语法结构、表达交流四个阶段的学习，
                        让学生掌握5000个基本汉字的形声义及它们的延伸词汇，能背诵100首歌谣诗歌，
                        精读60多篇经典散文、神话寓言故事，通读100多篇应用文。外国学生能进行简单的日常会话和交流。
                    </div>
                    <div className="left-align-box p1">
                        熟悉中国文化典籍中的优秀名篇佳句，知晓应用文体的格式与要求，能用语言记载事件、抒发情感、表达思想。
                    </div>
                    <div className="left-align-box p1">
                        整体地感受汉语与中国文化及人类生活的深厚内涵及相互关系。
                    </div>
                    <div className="left-align-box p1">
                        对汉语产生强烈兴趣，并获得自己打开语言王国的一把钥匙。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/method"
                    textLeft="教学方法"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Effect;