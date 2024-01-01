import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const WaldorfCornerstone = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                华德福教育的基石
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        华德福教育的理论是建立在儿童发展的基础上。华德福教育将童年划分为三个不同的阶段，
                        每个阶段大约7年——从出生到7岁(幼儿期)，7到14岁(童年中期)，14到21岁(青春期)。
                        每个阶段都塑造了孩子在智力上、情感上、身体上和精神上感受和接近世界的方式，
                        这反过来又塑造了他们学习的方式。华德福的教育工作者认为，
                        课程和教学方法应该适当地适应这些发展阶段，每个阶段都随着儿童的发展而发展。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">幼儿期-通过模仿来发展四肢</div>
                    <div className="left-align-box p1">
                        从出生到7岁的幼儿主要通过他们的感官生活，通过模仿来进行学习。
                        华德福幼儿教育工作者努力成为幼儿值得模仿的人物，
                        并且为每个孩子的成长提供温和且感官丰富的环境和以游戏为基础的活动，
                        鼓励幼儿发现自然世界，探索社会关系，拓展想象力。
                        这些活动为儿童智力、情感和身体的发展奠定了至关重要的基础。
                    </div>
                    <div className="left-align-box h3">童年期——通过想象发展心灵</div>
                    <div className="left-align-box p1">
                        在7到14岁之间，孩子们通过触动他们感情和激发他们创造力的课程来获得最好的学习效果。
                        华德福的低年级课堂充满了童话、寓言、神话传奇和激动人心的历史人物传记。
                        华德福小学(或“班级”)教师将讲故事、戏剧、有节奏的童谣、
                        视觉艺术和音乐融入到他们的教学工作中，为孩子编织出一幅幅斑斓的图景，
                        使每个主题在孩子的思考、感觉和意愿中栩栩如生。
                        华德福1-8年级的教师肩负着陪伴学生度过前几年学习旅程的重要任务，他们的角色类似于父母，
                        指导孩子们正式的学术学习，同时唤醒他们的道德发展，提高他们对自己在世界上所处位置的认识。
                    </div>
                    <div className="left-align-box h3">青春期——通过对世界的洞察来发展心智</div>
                    <div className="left-align-box p1">
                        14岁到21岁标志着孩子独立智力的发展，以及抽象地审视世界、锻炼洞察力、
                        判断力和批判性思维能力的发展。华德福高中的学生在各自领域的专家老师的指导下，
                        获得越来越多的教育自主权。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/what-is-waldorf"
                    textLeft="什么是华德福教育"
                    navRight="/waldorf-benefit"
                    textRight="华德福教育的益处"
                />
            </div>

            <Footer />
        </div>
    );
};

export default WaldorfCornerstone;