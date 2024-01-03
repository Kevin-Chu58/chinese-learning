import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";
import ContactForm from "../../components/ContactForm";

const AdmissionIntroduction = () => {

    return (
        <div className="main-box">
            <div className="center-align-box no-margin bg-lg-red">
                <div className="center-align-box fd-row">
                    <div className="center-align-box">
                        <div className="left-align-box h0 kaiti bolder">
                            扎根本土筑基民族魂
                        </div>
                        <div className="left-align-box h0 tap kaiti bolder">
                            面向世界融贯意识心
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1500 100" aria-hidden="true">
                    <path
                        d="M 0 100 L 0 70 Q 300 120 700 70 Q 1100 20 1500 90 L 1500 100 Z"
                        className="svg-primary"
                    />
                    <path
                        d="M 1500 90 Q 1200 33 850 55 Q 1150 70 1500 90 Z"
                        className="svg-secondary"
                    />
                </svg>
            </div>

            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                2023-2024 春之谷学院第十二届全日制华德福师资培训招生
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        <p>
                            当世界变得越来越浮游于文化表层，通过碎片化的知识和资讯淤塞我们的感官，我们越需要扎根一方水土，让民族精神源泉，注入我们的血液；当国与国为权益和资源之争，相互制裁而让世界分离，我们越需要以合作的智慧，超越血缘与民族，融聚人类的终极关怀，促进地球文明实现第五个文化纪元的使命。
                        </p>
                        <p>
                            <strong>2023-2024</strong>年是春之谷学院重要转折点，表现在培训目标、内容、地点和学习方式上上四大变化：<br />
                            <strong><span className="txt-brown">在培养目标方面，</span></strong>以过去为中国大陆华德福学校培养主班老师为主，转变为为北美、东南亚及中国大陆培养合格的主班老师、中文教师为主；<br />
                            <strong><span className="txt-brown">在教学内容上，</span></strong>不仅深入东方文化，文武艺医兼修，同时面向世界，中西贯通，既有东方本土化的主课板块，也有西方经典的主课板块教学，既学习中国太极、道医、道乐，又学习华德福绘画、优律诗美、竖笛、黑板画等；<br />
                            <strong><span className="txt-brown">在教学地点上，</span></strong>将从过去的以中国大陆为地点的教师培训项目，转变为以美国、中国香港和武当三地面授培训的项目；<br />
                            <strong><span className="txt-brown">在教学方式上，</span></strong>将面授、线上教学结合起来，将理论学习与观摹实操结合起来。<br />
                            <strong><span className="txt-brown">主办单位</span></strong>：春之谷学院<br />
                        </p>
                        <p>
                            <strong><span className="txt-brown">时间</span></strong>：<strong>2023年10月——2024年8月</strong><br />
                        </p>
                        <p>
                            <strong><span className="txt-brown">地点</span></strong>：美国东海岸、中国香港、武当<br />
                        </p>
                        <p>
                            <strong><span className="txt-brown">招生对象：</span></strong><br />
                            来这里学习的人，超越年龄、阶层和民族的限制，他们可以是家长、教师、文化传播者、艺术家等。但他们一定要热爱教育和孩子，热爱自然和艺术，热衷于探索宇宙和生命的真相，有志于成为自然与人文生态社区发展的一份子，实现自己的价值和人生理想，以服务他人、服务社会并推动社会进步。<br />
                            <br />
                            <strong>1. </strong>立志成为华德福教师、成为自然与人文生态社区的创建者的家长、教师、文化工作者、艺术家<br />
                            <strong>2. </strong>参加春之谷夏令营及 <strong>EWIP</strong> 预备班的家长<br />
                            <strong>3. </strong>春之谷武当学习中心及 <strong>EWIP</strong> 在校学生家长<br />
                            <strong>4. </strong><strong>EWIP</strong> 对人智学和华德福教育、社区生活感兴趣的年轻人，包括大学生和高中毕业生。<br />
                        </p>
                        <p>
                            <strong><span className="txt-brown">招生人数</span></strong>：<strong>30-40</strong>人<br />
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navRight="/class-schedule"
                    textRight="课程安排"
                />
            </div>

            <Footer />
        </div>
    );
};

export default AdmissionIntroduction;