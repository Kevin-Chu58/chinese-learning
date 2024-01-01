import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const TwentyYears = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                二十年回眸
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box h3">2003-2006</div>
                    <div className="left-align-box p1">
                        林源老师应邀在美国普林斯顿学校担任1-8年级的中文教师，
                        构建了第一个中文作为外语的教学大纲，帮助学生将英语的言说器官转变成中文的言说器官，
                        将外语思维转变成中文思维，成为了世界和图中文教程的雏形。
                    </div>
                    <div className="left-align-box h3">2005-2006</div>
                    <div className="left-align-box p1">
                        世界和图中文教程连续两年获得美国纽约州政府创造性课程艺术基金。
                    </div>
                    <div className="left-align-box h3">2006-2010</div>
                    <div className="left-align-box p1">
                        林源老师在美国宾州乔治学校教授中文，构建了9-12年级的高中中文课程。
                        他创立了和图中文语法教学体系，帮助汉语非母语的学生在拼读、组词、
                        造句和写作上的正确率提高80%。
                        这个教学法获得了宾夕法尼亚大学及纽约州政府的创造性课程基金奖。
                    </div>
                    <div className="left-align-box h3">2007-2008</div>
                    <div className="left-align-box p1">
                        世界和图中文教程获得了美国纽约政府颁发的合作性艺术教育基金奖。
                    </div>
                    <div className="left-align-box h3">2008-2010</div>
                    <div className="left-align-box p1">
                        世界和图中文教程参加了美国中文大会，它作为第二外语的教程大纲基本成型，
                        并在普林斯顿专利局申请了知识产权的保护。
                    </div>
                    <div className="left-align-box h3">2011-2017</div>
                    <div className="left-align-box p1">
                        林源老师回北京创办了春之谷学院和春之谷学园，并亲自担任1-6年级主班老师
                        和本土化教师培训的导师。他亲临历史文化现场带班教学，
                        创造性地开发了十多个原创中文主课板块，受到学生及老师的强烈反响。
                    </div>
                    <div className="left-align-box h3">2018-2022</div>
                    <div className="left-align-box p1">
                        东西方国际中学文凭项目（EWIP）在美国海默茵学校和春之谷学院之间建立。
                        林老师担任7-12年级文史地主课老师，实践了中文作为母语的主课板块初高中教学，
                        并且与地理、历史结合，开发了8年级到12年级的大语文跨学科板块，
                        使世界和图中文成为华语地区主课教学和长线课教学的通用教程。
                    </div>
                    <div className="left-align-box h3">2022</div>
                    <div className="left-align-box p1">
                        林春之谷武当国际研学中心成立。武当武术、道医、道乐融进世界和图中文，
                        让EWIP学生在出国前更深地浸润在中国文化中，
                        同时欢迎全世界华人子弟和外国学生来武当寻根问道，深层体验中国博大精深的道家文化。
                    </div>
                    <div className="left-align-box h3">2011-2023</div>
                    <div className="left-align-box p1">
                        世界和图中文教程在春之谷学院十年教学中，培养了大批老师，带着和图中文的教学理念和方法，
                        开启自己的主课教学。在此期间，世界和图中文已经在中国大陆、香港、台湾、日本、韩国、
                        泰国、新加坡、美国等学校中成为中文老师采用的教学大纲或课件。
                    </div>
                    <div className="left-align-box h3">2023</div>
                    <div className="left-align-box p1">
                        世界和图中文教育学会于美国正式成立。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/introduction"
                    textLeft="教程概述"
                    navRight="/principle"
                    textRight="教学原理"
                />
            </div>

            <Footer />
        </div>
    );
};

export default TwentyYears;