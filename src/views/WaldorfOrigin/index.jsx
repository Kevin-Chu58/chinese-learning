import Footer from "../../components/Footer";
import SubNavBar from "../../components/SubNavBar";

const WaldorfOrigin = () => {

    return (
        <div className="main-box">
            <div className="center-align-box h1 txt-bravado-red bold vw70 padding_20" style={{fontFamily: "kaiti"}}>
                华德福教育的缘起
            </div>

            <div className="center-align-box vw70">
                <div className="left-align-box">
                    <div className="left-align-box p1">
                        <p>
                            <strong>1919</strong>年，
                            德国斯图加特华尔道夫-阿斯托里亚卷烟厂的老板埃米尔·莫特<strong>(Emil Molt)</strong>打算为员工的子女创办一所学校。
                            莫尔特希望寻找一种课程，不仅能满足孩子们的智力需求，还能满足他们的精神本质和人性发展需求，
                            从而帮助他们在第一次世界大战动荡的社会环境中茁壮成长。
                            为此，莫尔特求助于鲁道夫·斯坦纳。斯坦纳同意承担这项任务，条件是学校必须:
                        </p>
                        <p>
                            <strong>
                                -自治 <br />
                                -艺术和文化丰富 <br />
                                -综合性(即不分单独的学术和职业轨道) <br />
                                -对所有工人的孩子，不分男女，全面开放
                            </strong>
                        </p>
                        <p>
                            斯坦纳坚持认为，他的学校的老师应该了解并回应孩子们的发展需求，
                            这所学校培养出的孩子应该成为独立的思考者和问题解决者，能够创造性地迎接他们所处时代的挑战。
                            这种包容的，具有前瞻性的理想主义精神，以及参与世界的承诺，仍然是我们当下这个时代华德福教育的标志。
                        </p>
                    </div>
                </div>
            </div>
            <div className="box">
                <SubNavBar
                    width={window.innerWidth}
                    navLeft="/waldorf-teacher-core-role"
                    textLeft="华德福教师的核心角色"
                />
            </div>

            <Footer />
        </div>
    );
};

export default WaldorfOrigin;