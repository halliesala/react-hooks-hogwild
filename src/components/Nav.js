import React from "react";
import piggy from "../assets/porco.png";

function nextState(current) {
	if (current === 1) return -1;
	else return 1;
}

const Nav = ({showGreased, setShowGreased, sortWeightAsc, setSortWeightAsc, sortNameAsc, setSortNameAsc}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={() => setShowGreased(!showGreased)}>
				{showGreased ? "Show All": "Show Only Greased"}
			</button>
			<button onClick={sortWeight}>Sort by Weight</button>
			<button onClick={sortName}>Sort by Name</button>
		</div>
	);

	function sortName() {
		setSortNameAsc(0);
		setSortWeightAsc(nextState(sortWeightAsc));
	}
	
	function sortWeight() {
		setSortWeightAsc(0);
		setSortNameAsc(nextState(sortNameAsc));
	}
};

export default Nav;


