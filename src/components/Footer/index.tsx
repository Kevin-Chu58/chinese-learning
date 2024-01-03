import React from "react";
import { useNavigate } from "react-router-dom";
import ConnectForm from "./components/ConnectForm";
import ImageHolder from "../ImageHolder";
import 微信公众号 from "../../assets/images/media/微信公众号.png";
import 天地课堂 from "../../assets/images/media/天地课堂.png";
import 行走青年EWIP from "../../assets/images/media/行走青年EWIP.png";
import 美篇号 from "../../assets/images/media/美篇号.png";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="box no-margin fd-row-mobile-col_900 bg-brown">
                <div className="left-align-box no-margin padding_20">
                    <div>
                        保持联系
                        <br />
                        加入我们的邮件通讯
                        <br />
                        接收学会最新消息、培训及活动信息
                        <br />
                        请放心，您的信息不会被分享
                    </div>
                    <button className="classic-button marginy_10 bg-persian-red shade enlarge">
                        <a className="padding_10 bold" href="/invitation-cooperation">
                            欢迎与我们联系
                        </a>
                    </button>
                    <ConnectForm />
                </div>
                <div className="right-align-box mobile-left_900 no-margin margin-left_max-mobile padding_20">
                    敬请关注：
                    <div className="right-align-box no-margin mobile-left_900 fd-row-mobile-col_500 p2">
                        <ImageHolder image={天地课堂}>“天地课堂”</ImageHolder>
                        <div className="center-align-box fd-col-mobile-row_500 no-margin p2">
                            <ImageHolder image={微信公众号}>
                                微信公众号“春之谷SVE”
                            </ImageHolder>
                            <ImageHolder image={行走青年EWIP}>
                                行走青年EWIP
                            </ImageHolder>
                        </div>
                        <ImageHolder image={美篇号}>美篇号31543228</ImageHolder>
                    </div>
                </div>
            </div>
    );
};

export default Footer;