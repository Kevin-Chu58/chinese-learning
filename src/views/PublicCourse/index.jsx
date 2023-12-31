import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";
import ContactForm from "../../components/ContactForm";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LinkButton from "../../components/LinkButton";
import Course1 from "../../assets/images/course1.png";
import Course2 from "../../assets/images/course2.png";
import Course3 from "../../assets/images/course3.png";
import Course4 from "../../assets/images/course4.png";

const PublicCourse = () => {
    return (
        <div className="main-box">
            <div
                className="center-align-box h1 txt-bravado-red bold vw70 padding_20"
                style={{ fontFamily: "kaiti" }}
            >
                公开课
            </div>

            <div className="center-align-box vw100">
                <div className="center-align-box p1 bold txt-brown">世界和图中文教师培训招生说明会</div>
                <div className="center-align-box">
                    <div className="center-align-box">
                        <img src={Course1} alt="course" className="w400 no-margin" />
                    </div>
                    <LinkButton link="https://wx3ee853e038e6d673.wx.ckjr001.com/kpv2p/79jjz3/#/homePage/live/liveDetail?liveId=725583">
                        <KeyboardDoubleArrowRightIcon />
                    </LinkButton>
                </div>
                <br />
                <br />
                <div className="center-align-box p1 bold txt-brown">世界和图中文教程概述</div>
                <div className="center-align-box">
                    <div className="center-align-box">
                        <img src={Course2} alt="course" className="w400 no-margin" />
                    </div>
                    <LinkButton link="https://wx3ee853e038e6d673.wx.ckjr001.com/kpv2p/79jjz3/#/homePage/live/livePersonalDetail?liveId=8443">
                        <KeyboardDoubleArrowRightIcon />
                    </LinkButton>
                </div>
                <br />
                <br />
                <div className="center-align-box p1 bold txt-brown">人智学与中国文化深化课程概述</div>
                <div className="center-align-box">
                    <div className="center-align-box">
                        <img src={Course3} alt="course" className="w400 no-margin" />
                    </div>
                    <LinkButton link="https://wx3ee853e038e6d673.wx.ckjr001.com/kpv2p/79jjz3/#/homePage/live/livePersonalDetail?liveId=8364">
                        <KeyboardDoubleArrowRightIcon />
                    </LinkButton>
                </div>
                <br />
                <br />
                <div className="center-align-box p1 bold txt-brown">中秋节的庆典及精神意义</div>
                <div className="center-align-box">
                    <div className="center-align-box">
                        <img src={Course4} alt="course" className="w400 no-margin" />
                    </div>
                    <LinkButton link="https://wx3ee853e038e6d673.wx.ckjr001.com/kpv2p/79jjz3/#/homePage/live/liveDetail?liveId=721995">
                        <KeyboardDoubleArrowRightIcon />
                    </LinkButton>
                </div>
            </div>
            
            <div className="center-align-box vw70">
                <ContactForm />
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/register-info"
                    textLeft="报名信息"
                />
            </div>

            <Footer />
        </div>
    );
};

export default PublicCourse;