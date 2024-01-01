import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const WaldorfBenefit = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                华德福教育的益处
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box h3">孩子们享受无忧无虑的童年</div>
                    <div className="left-align-box p1">
                        参观一所华德福学校，看着学生们在玩耍，你会看到孩子们喜欢被允许活在当下，
                        他们睁大双眼，张开双臂自由地探索大自然，去任何他们的惊奇感和想象力带他们去的地方。
                        在我们这个狂热的世界里，强迫孩子“快一点”已经成为常态。
                        华德福教育认为童年是值得细细品味的。根据自己的自然节奏去发展，
                        华德福教育的孩子们享受充实而丰富的童年，获得他们成为健康、自我实现的个体所需的充分经验。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">适合年龄的学习及动手能力的培养</div>
                    <div className="left-align-box p1">
                        在华德福学校的教室里，你不会看到孩子们在电脑前徘徊，
                        也不会看到孩子们为了标准化考试而坐在那里死记硬背，错过了在树林里散步或去农场的机会。
                        在华德福教育中，学习是一种体验活动，当需要教授孩子一项技术的优点、用途和方法时，
                        华德福的老师会让孩子自己去经历、去体验。孩子们通过多年的动手探究而获得的知识、
                        自我意识和解决问题的技能，对他们作为学习者和人类来说，比坐在屏幕前学到的任何东西都要有更大的价值。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">丰富的深入学习的经验</div>
                    <div className="left-align-box p1">
                        在华德福教育中，分板块学习的优势早已得到认可。从一年级到十二年级的华德福学生每天早上的主课板块，
                        会花两个小时集中在一个学科上，每3-4周轮换一个学科。
                        学生们有机会从多个有利的角度深入研究每一门学科，这有助于他们享受和理解这门学科。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">学生学习如何在对他们自己的教育中发挥积极作用</div>
                    <div className="left-align-box p1">
                        从一年级学习字母表，到八年级学习解剖学、代数和历史，直至高中阶段的学习，
                        华德福学生通过创建自己的教科书参与学习过程——绘制精美的日记，
                        包括故事、散文、诗歌、地图、插图、实验室描述和数学方程。
                        比起依赖传统教科书中预先消化的材料，
                        创造“主课本”的行为可以让孩子们吸收及消化老师带给他们的课程，
                        并将所学内容转化成为他们自己的东西。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">华德福学校培养全面发展的个人</div>
                    <div className="left-align-box p1">
                        华德福的教育工作者努力发掘每个学生的潜能，但同时也注意不过分强调某一种特质或技能。
                        所有的学生都学习外语，都演奏乐器，都在合唱中唱歌，都学做手工，都在班级演出中表演。
                        华德福教育的目标是让孩子们接触到广泛的领域，拥有各种经历，
                        并在他们身上发展出许多兴趣和能力。这使得孩子们在各方面都得到良好的平衡，
                        他们对自己将一个领域发展起来的能力应用到另一个领域充满信心，并且知道他们可以学习掌握任何事情。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                    <div className="left-align-box h3">受过华德福教育的人对学习有着终生的热情</div>
                    <div className="left-align-box p1">
                        在华德福学校，教育不是通过竞争和考试成绩来衡量的，而是被视为一生的旅程。
                        华德福教育是一种恰当地回应孩子对世界的自然兴趣的教育方法，
                        它顺其自然地引发了孩子想要了解更多的内在欲望。华德福学校有时被错误地视为“艺术学校”，
                        因为你会在这里找到细致而实用的各类艺术课程，将不同学科编织在一起。
                        然而，有趣的是，许多华德福校友的职业选择实际是科学——这是一种通过多年探索、发明和发现而培养起来的兴趣。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/waldorf-cornerstone"
                    textLeft="华德福教育的基石"
                    navRight="/waldorf-teacher-core-role"
                    textRight="华德福教师的核心角色"
                />
            </div>

            <Footer />
        </div>
    );
};

export default WaldorfBenefit;