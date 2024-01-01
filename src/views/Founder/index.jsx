import StarOramentalSectionBreakShort from "../../assets/star-ornamental-section-break-short";
import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const Founder = () => {
    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                认识创办人
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    {/* <div className="left-align-box h3">teacher.jpg</div> */}
                    <div className="left-align-box p1 txt-horsetail bold">
                        林源老师，春之谷学院院长、EWIP项目负责人、文史地老师，
                        曾就读于南京师范大学、北京鲁迅文学院、北京大学。
                    </div>
                    <div className="left-align-box p1">
                        2001年，林源老师赴美在日桥学院完成华德福教师培训课程，
                        并获得教育学硕士学位后，在美国普林斯顿华德福学校及乔治学校教授1-12 年级中文与历史。
                        他融合人智学与中国文化、华德福教育与中国教育理念和方法，
                        创立了一套深受美国中小学生喜欢的《世界和图中文教程》，
                        该教程连续 5 年获得纽约州 政府所颁发的艺术教育基金奖。
                    </div>
                    {/* <div className="left-align-box p1">image.jpg</div> */}
                    <div className="left-align-box p1">
                        2010 年，林源老师回北京创办春之谷学院及春之谷学园，
                        从2012 年起担 任春之谷学园壬辰班 1-6年级主班老师，
                        任教师会主席，同时在春之谷学院担任教学并任院长，
                        2019年起创立东西方国际中学项目（EWIP），并担任 7-12 年级文史地主课教学。
                        林源老师曾担任美国布鲁克林华德福学校、明尼苏达华德福学校、
                        海默茵华德福学校中文教师督导。现任春之谷学院院长，EWIP项目负责人，
                        春之谷武当研学中心负责人，香港树宏华德福学校中文教师督导。
                        自2012年起，林源老师与武当山结缘，在武当山采点、带领学生研习游学，
                        走遍了武当的峰岩涧洞、宫观庵堂。原创性地开发了本土课程，
                        2021年成立春之谷 武当研学中心。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>

                    {/* <div className="left-align-box p1">image.jpg</div> */}
                    <div className="left-align-box p1">
                        林源老师多年来在国内外刊物发表大量诗歌。其中，
                        《教育诗》获1991 年 全国校园诗歌大赛一等奖；《古代奥林匹克精神》获2008 奥运会诗歌大赛优秀作品奖。
                        编辑出版的图书有：《中国童谣》（中国妇女出版社）、《中国经典童谣》
                        （中国少年儿童出版社）、《中华民族童谣》（民族大学出版社）、《母语阅读系列：
                        亲子童谣、生肖童谣、数字童谣、游戏童谣》（中国言实出版社）。
                        其中《中国经典童谣》获教育部优秀幼儿读物奖。近年来的出版物有：诗集《壬辰班诗选》及《春之谷诗选》；
                        论文集《道与罗格斯》、《太阳石的传说——-壬辰班 1-6 年级主课教学报告》、
                        《光的教育——春之谷 1-12年级教学大纲》、《世界和图中文教程》。
                        翻译审读的外国作品有：《Lilipoh—春之谷》、《鲁道夫.
                        施泰纳论中国文化》、《宇宙的记忆》、《民族魂的使命》、《自由的哲学》、
                        《奥秘科学》、《年轮》、《林则徐》、《慢养育》、《希望的合作》、《有机管理》等。
                    </div>
                    <div className="center-align-box">
                        <StarOramentalSectionBreakShort />
                    </div>

                    {/* <div className="left-align-box p1">image.jpg</div> */}
                    <div className="left-align-box p1">
                        自 2001 年到 2022 年，在 20多年中，
                        林源老师一直从事华德福教育的中国本土化工作，
                        将全人教育理念与中国传统文化结合、
                        创立了1-12 年级的具有东 方精神的“光的教育”课程体系。
                        这 20年中，他旅居美国十年，在中国任教19年，
                        带着他的学生游历了世界各地几十个人智学、RSE 社区、IB学校；
                        在自然原型生态场域、世界文化遗产遗址，以天地为课堂，以自然为友，以万物为师，
                        从事自然和人文教育，探索迈向东方、迈向现场、迈向未来的生态文明教育。
                    </div>
                    {/* <div className="left-align-box p1">image.jpg</div> */}
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/about"
                    textLeft="关于学会"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Founder;
