import React from "react";
import ReactDOM from "react-dom";



function Footer(){
	const d = new Date(1987, 3, 11);
	const year = d.getFullYear();
	return(
		<div>
			<footer>
				<p>Copyright &copy; {year}</p>
			</footer>
		</div>
	);
}

export default Footer;