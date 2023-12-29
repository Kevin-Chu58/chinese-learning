import { useState } from "react";
import React from "react";

const ConnectForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
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
                (attribute === "fullName" ? check : fullName).length > 0 &&
                (attribute === "email" ? check : email).length > 0
            )
        );
    };

    return (
        <form onSubmit={handleSubmit} className="p1 b-top-single">
            <label htmlFor="fullName">
                姓名框
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="填写你的全名"
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        handleSubmitDisabled("fullName", e.target.value);
                    }}
                />
            </label>
            <br />
            <label htmlFor="email">
                邮箱框
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="填写你的邮箱"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        handleSubmitDisabled("email", e.target.value);
                    }}
                />
            </label>
            <br />
            <input
                type="submit"
                value="提交"
                disabled={submitDisabled}
                className={`classic-button ${
                    submitDisabled ? "bg-off-black" : "bg-persian-red enlarge"
                } shade`}
            />
        </form>
    );
};

export default ConnectForm;
