import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		let jsoutput = () => {
			let players = ["Alan", "ryan", "carlos"];
			let output = players.filter(e => e.length === 4);
			console.log(output);
			return output;
		};

		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a
					href="#"
					onClick={() => {
						jsoutput();
					}}
					className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		);
	}
}
