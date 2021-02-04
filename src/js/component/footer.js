import React from "react";
import c3poIcon from "../../img/SWIcons/C3P0.jpg";
import chewbeIcon from "../../img/SWIcons/chewbaca.jpg";
import hanIcon from "../../img/SWIcons/han-solo.jpg";
import lukeIcon from "../../img/SWIcons/luke-skywalker.jpg";
import leiaIcon from "../../img/SWIcons/princess-leia.jpg";
import r2d2Icon from "../../img/SWIcons/r2d2Icon.jpg";
import "../../styles/index.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<img src={c3poIcon} className="icon" />
			<img src={chewbeIcon} className="icon" />
			<img src={hanIcon} className="icon" />
			<img src={lukeIcon} className="icon" />
			<img src={leiaIcon} className="icon" />
			<img src={r2d2Icon} className="icon" />
		</p>
	</footer>
);
