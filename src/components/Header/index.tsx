import './style.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Switch } from "@mui/material";
import { PropsWithChildren } from "react";
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
            <div className="box fd-row header-container">

                <div className="whcei">
                    WHCEI
                </div>
				
				<Switch className="center-vertical lang-switch" />

				<div className="tool-container">
					<button onClick={onClick} className="header-button">
						<MenuIcon className="center-vertical"/>
					</button>
					<button onClick={onClick} className="header-button">
						<MoreVertIcon className="center-vertical"/>
					</button>
				</div>
            </div>
        </header>
    );
};

export default Header;
