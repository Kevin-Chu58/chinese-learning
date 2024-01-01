import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const Method = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                教学方法
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box h3">按听-说-写-读的顺序引入汉语</div>
                    <div className="left-align-box p1">
                        说听到的—写会说的—读写出的。以听说模仿口述语言入门，并与游戏、童谣、
                        手工、绘画及故事相结合；再从认读甲骨文、金文、篆书等不同形式汉字的过程中，
                        建立对汉字“形”与“义”的联系；最后练习阅读与书写现代汉字。
                    </div>
                    <br />
                    <div className="left-align-box h3">声韵太极操</div>
                    <div className="left-align-box p1">
                        将文字的象形特点与发音的呼吸关系结合，将僵化的文本与喉部声音延伸到整个身体与空间中，让学生全身心感受语言的发音与运动。
                    </div>
                    <br />
                    <div className="left-align-box h3">用不同的标准，在不同时间考核学生</div>
                    <div className="left-align-box p1">
                        学生绘制自己的中文课本，语法书及字典。
                    </div>
                    <br />
                    <div className="left-align-box h3">真言、真画、真情</div>
                    <div className="left-align-box p1">
                        在课堂教学中，教师少用音像辅助设备，而是用真言、真画、真情演说，
                        激发鲜活的语言、传达生动的图像、在美好的想象氛围中进入语言氛围。
                    </div>
                    <br />
                    <div className="left-align-box h3">坚持周期主题教学</div>
                    <div className="left-align-box p1">
                        针对不同年龄、季节、节日及时事特点，确定相应的主题活动。用小品、戏剧、
                        游览、绘画、手工制作、集会表演等多种形式，强化主题，把语言带到教学中，
                        把教学带到语言中，让孩子沉浸在特定的语言环境中。
                    </div>
                    <br />
                    <div className="left-align-box h3">让学生自己发现规律</div>
                    <div className="left-align-box p1">
                        让学生们在特定情境下大声跟读、朗诵，坚持不用翻译，但可以进行不同语言的句子表达对比。
                        语法教学不记例句，而是从例句中总结规律，让学生举例、拼读、组词、造句、写作。
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/content"
                    textLeft="教程内容"
                    navRight="/effect"
                    textRight="教学效果"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Method;