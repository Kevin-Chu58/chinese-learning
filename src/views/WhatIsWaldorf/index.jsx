import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const WhatIsWaldorf = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                什么是华德福教育？
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        说华德福教育是近100年前由奥地利哲学家、社会改革家和梦想家鲁道夫·
                        施泰纳在欧洲发展起来的一项全球性的独立学校运动。今天，华德福教育遍布全球，
                        在60多个国家拥有约1000所学校和近2000个早期儿童项目。在华德福教育中，
                        学习过程本质上是三方面的，包括头脑、心灵和双手，即思考、感觉和行动。
                        这是华德福教师通过整合学术、艺术和实践技能的课程和方法来培养和吸引每个孩子的基础。
                    </div>
                    <div className="left-align-box p1">
                        随着人们对当前主流教育模式的不满，对越来越年轻的学生依赖科技的担忧，
                        大家逐渐认识到低技术水平的学校，儿童通过艺术、运动和自然的体验获得了许多超出预期的好处，
                        而这些益处不仅仅是当下，更会对孩子的未来产生深远影响，
                        令其终生受益。如今，越来越多的家长和教育工作者正在密切关注并实践华德福的教育方式。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navRight="/waldorf-cornerstone"
                    textRight="华德福教育的基石"
                />
            </div>

            <Footer />
        </div>
    );
};

export default WhatIsWaldorf;