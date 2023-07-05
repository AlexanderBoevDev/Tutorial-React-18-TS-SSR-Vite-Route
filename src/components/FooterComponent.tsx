import React from "react";
import "../scss/FooterComponent.scss";

export const FooterComponent:React.FC = () => {
	return (
		<footer>
			<div className="container-fluid container-xxl">
				<p>© { (new Date().getFullYear()) } Company, Inc</p>
			</div>
		</footer>
	)
}
