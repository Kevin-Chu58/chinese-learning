import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";
import ContactForm from "../../components/ContactForm";

const RegisterInfo = () => {
    return (
        <div className="main-box">
            <div
                className="center-align-box h1 txt-bravado-red bold vw70 padding_20"
                style={{ fontFamily: "kaiti" }}
            >
                报名信息
            </div>

            <div className="left-align-box vw100" style={{margin: window.innerWidth >= 600 ? "0 15vw" : "0 5vw"}}>
                <div className="left-align-box p1 bold txt-brown">本项目招生咨询工作已经开始，欢迎学校与个人与我们联系</div>
                <br />
                <div className="left-align-box h3 bg-brown padding_5" style={{ borderRadius: "10px"}}>【收费标准】</div>
                <div className="left-align-box p1 bold">
                    1. 全科制全年学费 6 万元，早鸟价 5.5 万元（2023 年 10 月 20 日前）；毕业后可获得毕业证书并推荐工作。
                </div>
                <div className="left-align-box p1 bold">
                    2. 人智学与中国文化基础证书学习（面授+网课）：学费 2 万元（不低于 4 周面授课程）。
                </div>
                <div className="left-align-box p1 bold">
                    3. 华德福教师证书学习（面授+网课）：学费 2 万元（不低于 4 周面授课程）。
                </div>
                <div className="left-align-box p1 bold">
                    4. 中文教育专业学习（面授+网课）：学费 2 万元（不低于 4 周面授课程）。
                </div>
                <div className="left-align-box p1 bold">
                    5. 国内现场面授课程 3000 元/周，国外现场面授课程 500 美金/周。
                </div>
                <div className="left-align-box p1 bold">
                    说明：1. 学费不含食宿费用及需学员额外支付的书籍和活动费用等；2. 受外部原因影响，如果外教无法进行现场授课，将采用外教直播网课+现场助教方式教学。3. 凡交费后由于不可抗力因素不能坚持学习者，由个人申请，得到批准后可退费。退费要扣除已上课学费及总学费的 20%手续费。
                </div>
            </div>
            
            <div className="center-align-box vw70">
                <ContactForm />
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/teachers"
                    textLeft="教师团队"
                    navRight="/public-course"
                    textRight="公开课"
                />
            </div>

            <Footer />
        </div>
    );
};

export default RegisterInfo;