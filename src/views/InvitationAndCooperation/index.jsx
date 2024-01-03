import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

const InvitationAndCooperation = () => {
    return (
        <div className="main-box">
            <div
                className="center-align-box h1 txt-bravado-red bold vw70 padding_20"
                style={{ fontFamily: "kaiti" }}
            >
                邀约与合作
            </div>

            <div className="left-align-box vw100" style={{margin: window.innerWidth >= 600 ? "0 15vw" : "0 5vw"}}>
                <div className="left-align-box p1 bold txt-brown">
                    世界和图中文教育学会是一个包容与开放的学会，我们热情欢迎和我们有着相同理念的教学机构、文化组织、社会团体与我们合作，共同推进中文教育品质的提升、促进中华文化交流与创新、开展有益社区和谐发展的各类活动或公益项目，共同为孩子创造一个能支持他们身心健康发展的学习、生活以及社区环境，带领他们走向未来，成为世界的公民。
                </div>
                <div className="left-align-box p1 bold txt-brown">
                    欢迎了解更多学会及教师培训信息，如有任何问题咨询、或有合作洽谈意向都可与我们联系。
                </div>
                <div className="left-align-box p1 bold txt-brown">
                    邮箱：
                </div>
                <div className="left-align-box p1 bold txt-brown">
                    邮寄地址：
                </div>
                <div className="left-align-box p1 bold txt-brown">
                    电话：
                </div>
            </div>
            
            <div className="center-align-box vw70">
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
};

export default InvitationAndCooperation;