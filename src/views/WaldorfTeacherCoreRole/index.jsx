import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const WaldorfTeacherCoreRole = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                华德福教师的核心角色
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        虽然华德福教育将儿童及其发展置于教学的核心，但华德福学校依靠教师作为教育过程的支点。
                        选择在华德福学校任教的个人不仅仅是在完成一个教学过程，
                        而是在用他的心魂引领孩子的心魂，用他内在的精神力去带领孩子身心灵的成长。
                        华德福教师总是全情投入，以支持到孩子的学习生活、道德情感发展，和精神的成长之路。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>
                </div>
            </div>
            <div className="box vw100" style={{margin: window.innerWidth > 500? "0 15vw" : "0 5vw"}}>
                <div className="left-align-box p1" style={{fontFamily: "kaiti"}}>
                    “如果有人想为世界带去变化，我想不出还有什么比成为一名华德福老师更符合这个时代的了。”
                </div>
                <br />
                <div className="right-align-box p1">
                    ——莱斯利·伯切尔-福克斯，1996年绿茵华德福学校幼儿教师，日桥幼儿项目联合主任、教员
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/waldorf-benefit"
                    textLeft="华德福教育的益处"
                    navRight="/waldorf-origin"
                    textRight="华德福教育的缘起"
                />
            </div>

            <Footer />
        </div>
    );
};

export default WaldorfTeacherCoreRole;