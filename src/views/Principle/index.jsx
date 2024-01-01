import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const Principle = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                教学原理
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        中国语言文字是中国人特有的精神原型、象数思维方式以及心理情境的反应。
                        中文的字、词、句、章具有相同的中国象数思维的深层精神结构和心理模式，
                        这个结构的图式就是龙手、连山易、太极图、河图洛书、易经卦图、内景图、
                        修真图的总称，即和图。它既是中文的根本，是中华民族文明之源，
                        也必将成为缔造世界和平的精神基石。世界和图中文，不仅承载着语言教育的责任，
                        也期望成为人类和平精神传扬的使者。
                    </div>
                    <div className="left-align-box p1">
                        汉字形藏易理，音通情境，义达精神。只有从汉字的象数理气的起源、
                        创造及历史演进的整体把握中，才能了解字里乾坤，把握汉语精神内涵与智慧。
                        汉语之道上通宇宙自然、下达万类物器，中解人事义理。只有在语言学习过程中，
                        渗透科学、人文及道德教育，才能对汉语有整体把握，从而内化到思维和人格中。
                    </div>
                    <div className="left-align-box p1">
                        中文书面语言与口头语言的起源、功能及历史发展过程有不同的轨迹，
                        汉语教学需要将两者先分开后合并，才能达到殊途同归的有效掌握。
                    </div>
                    <div className="left-align-box p1">
                        学生的身心灵发展过程，与宇宙进化、人类意识进化有同构关系。
                        针对不同年龄段孩子心理发展特点，选择在汉语文化现象中与之相对应的内容、
                        方法，才能帮助学生健康成长，快乐而自然地习得语言。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/twenty-years"
                    textLeft="二十年回眸"
                    navRight="/content"
                    textRight="教程内容"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Principle;