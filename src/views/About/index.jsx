import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const About = () => {

    return (
        <div className="main-box" >
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                关于学会
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box h3">学会的宗旨</div>
                    <div className="left-align-box p1">
                        世界和图中文教育学会是一个基于世界和图中文教程而成立的，
                        以全面提升中文教学品质，推动中文教育在世界各地融合发展的非盈利机构。
                    </div>
                    <div className="left-align-box p1">
                        无论是在中国，还是在世界，中文教育都不仅仅是汉语技能的学习，
                        还是智慧文明、文化精神、思维模式的体认过程。而只有真正根植于东方的文明、
                        文化和思维，同时又能支持到儿童身心健康发展的中文教育，
                        才能帮助学生在获得汉语技能的同时，开阔眼界，启迪智慧。
                    </div>
                    <div className="left-align-box p1">
                        而当中文教育走向世界，它更成为了一座文化交流与互通的桥梁，
                        让世界能共享中华天启文明的智慧果实，以惠及全人类。
                        而世界和图中文教程不仅演绎了中华古老文明的原象，更展示了人类未来命运共同体的和平蓝图，
                        帮助学生获得一把打开中文世界的钥匙，同时获得一颗睿智的心灵。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">学会的使命</div>
                    <div className="left-align-box p1">
                        世界和图中文教育发展与促进学会的成立，其使命正是致力于将世界和图中文的教学理念、
                        教学方法、教学创意在世界范围内进行广泛传播，立志培养出更多在母语环境、
                        第二外语环境、双语环境中具备心魂，充满精神力的优秀的中文教师。
                    </div>
                    <div className="left-align-box p1">
                        学会鼓励和支持教师创建更多鲜活的、富有生命力和创造力的中文课堂、
                        中文学校，以期让越来越多的中外孩子有缘走进最古老而又从未间断的东方文明，
                        由不同走向共同，从而成为真正的世界公民。
                    </div>
                    <div className="left-align-box p1">
                        学会还倡导和促进中文教育的过程及教学的成果走出课堂，走向社会，
                        为整个社区带去精神之力、文化之光、和谐之道。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">学会的工作</div>
                    <div className="left-align-box p1">
                        世界和图中文教育学会的工作重心主要集中在四个方面：
                        一是开展面向世界各地区的和图中文师资培训；二是组织“面向未来”的中文教育内容的研讨和研发，
                        编辑出版相关中文教材及参考书目；三是促进各类型世界和图中文学习机构的创办与合作；
                        四是推进中文教育与社区的融合，为社区服务，
                        为后疫情时代小微化教育及家庭学校的诞生提供助力。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">学会的目标</div>
                    <div className="left-align-box p1">
                        世界和图中文教育学会的长远目标是努力将世界和图中文教育的方法、
                        理念、框架推广至更多国家和地区，以促进各国家、各地区教师及教学机构之间的交流、
                        互通与合作；开办全日制世界和图双语学校，支持中文教育和中国文化与各地区教育和文化的融合发展；
                        开展跨区域、跨领域的教学研讨，与时俱进，
                        不断提升和丰富世界和图中文教程大纲、内容、形式，为中文教育的发展献计献策。
                    </div>
                </div>
            </div>

            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navRight="/founder"
                    textRight="认识创办人"
                />
            </div>

            <Footer />
        </div>
    );
};

export default About;