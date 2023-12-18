import { PropsWithChildren } from "react";

import './style.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

type Props = {
    hidden: boolean,
    onClick: (event: {}) => void;
};

const Header = ({
    hidden,
    onClick,
    ...otherProps
}: PropsWithChildren<Props>) => {
    return (
        <header id="header" className="header">
            <div className="headerContainer">

                <div className="headerEng">
                    World Hetu Chinese
                    <br />
                    Education Institute
                </div>

                <div className="headerChi">
                    世界和图中文
                    <br />
                    教育学会
                </div>

                <button onClick={onClick} className="headerButton">
                    <MoreVertIcon className="icon"/>
                </button>
            </div>
            {/* <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> */}

            {/* <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> */}
        </header>
    );
};

export default Header;
