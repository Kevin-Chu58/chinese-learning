import React, { useState } from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    };

    const handleSubmitDisabled = (attribute, check) => {
        setSubmitDisabled(
            !(
                (attribute === "firstName" ? check : firstName).length > 0 &&
                (attribute === "lastName" ? check : lastName).length > 0 &&
                (attribute === "email" ? check : email).length > 0 &&
                (attribute === "phone" ? check : phone).length > 0 &&
                (attribute === "content" ? check : content).length > 0
            )
        );
    };

    return (
        <div className="left-align-box vw100">
            <div className="center-align-box h3">联系我们</div>
            <div className="left-align-box p1">
                感谢您对世界和图中文教育学会的关注，如果您有任何咨询、报名、需求或建议，请填写留言，我们会第一时间联系您。
            </div>
            <br />
            <div className="center-aglin-box p1" style={{ margin: "0 auto" }}>
                <form onSubmit={handleSubmit} className="p1 b-top-single">
                    <label htmlFor="name">
                        姓名<span className="txt-brown">*</span>
                        <br />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="名"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                handleSubmitDisabled(
                                    "firstName",
                                    e.target.value
                                );
                            }}
                        />
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="姓"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                handleSubmitDisabled(
                                    "LastName",
                                    e.target.value
                                );
                            }}
                        />
                    </label>
                    <br />
                    <label htmlFor="email">
                        邮箱<span className="txt-brown">*</span>
                        <br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                handleSubmitDisabled("email", e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label htmlFor="phone">
                        电话<span className="txt-brown">*</span>
                        <br />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                handleSubmitDisabled("phone", e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label htmlFor="content">
                        具体内容<span className="txt-brown">*</span>
                        <br />
                        <textarea
                            id="content"
                            name="content"
                            value={content}
                            style={{ height: "150px", width: "225px" }}
                            onChange={(e) => {
                                setContent(e.target.value);
                                handleSubmitDisabled("content", e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="提交"
                        disabled={submitDisabled}
                        className={`classic-button ${
                            submitDisabled
                                ? "bg-off-black"
                                : "bg-persian-red enlarge"
                        } shade`}
                    />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
