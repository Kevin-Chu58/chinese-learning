import './Sidebar.css';

const Sidebar = () => {
    return (
        <header id="sidebar" className="sidebar">
            <nav>
                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/" ? "page" : undefined
                        }
                    >
                        <div className="sidebar-identifier" />
                        <a href="/">世界和图中文教育学会</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/about" ? "page" : undefined
                        }
                    >
                        <a href="/about">学会宗旨与使命</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/demo"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/demo">学会工作与目标</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">认识我们的团队</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">世界和图中文教程</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">二十年回眸</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">教程体系</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">原创主课板块</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">原创教学法</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福教育</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">什么是华德福教育</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福教育的基础</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福教育的益处</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福教师的核心角色</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福教育的缘起</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">培训课程</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">培训概述</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">世界和图中文教师证书</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">华德福中文教师证书</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">人智学与中国文化基础证书</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">转化课程</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">全科证书</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">教师团队</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">免费课程</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">培训报名注册</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">
                            世界和图中文教育
                            <br />
                            资料馆
                        </a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">邀约与合作</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">会员</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">中文教学机构</a>
                    </li>
                    <li
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">其他组织团体</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">出版物</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">博客</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">相关链接</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">常见问题回答</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">捐款</a>
                    </li>
                </ul>

                <ul>
                    <li
                        className="h3"
                        aria-current={
                            window.location.pathname === "/sverdle"
                                ? "page"
                                : undefined
                        }
                    >
                        <a href="/sverdle">会员登录</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Sidebar;
