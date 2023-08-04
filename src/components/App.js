import {useState, React} from "react";
import Nav from "./Nav";
import PigMenu from "./PigMenu";
import NewPigForm from "./NewPigForm"
// import SemanticPigCard from "./SemanticPigCard"

import staticHogs from "../porkers_data";



function App() {

	const [showGreased, setShowGreased] = useState(false);
	const [formData, setFormData] = useState({});
	const [hogs, setHogs] = useState(staticHogs);


	// 1 => ascending sort  by weight; -1 => descending; 0 => no sort
	const [sortWeightAsc, setSortWeightAsc] = useState(0);
	const [sortNameAsc, setSortNameAsc] = useState(0);

	const processedHogs = hogs
		.sort((a, b) => sortWeightAsc * (a.weight - b.weight))
		.sort((a, b) => sortNameAsc * (a.name < b.name? -1 : 1))
		.filter(hog => {
			// Return false if filtering for greased & hog is ungreased
			if (showGreased && !(hog.greased)) return false;

			// Otherwise, 
			return true;
		});

	return (
		<div className="App">
			<Nav 
				showGreased={showGreased} 
				setShowGreased={setShowGreased} 
				sortWeightAsc={sortWeightAsc}
				setSortWeightAsc={setSortWeightAsc}
				sortNameAsc={sortNameAsc}
				setSortNameAsc={setSortNameAsc}
			/>
			{/* <SemanticPigCard /> */}
			<PigMenu hogs={processedHogs}/>
			<NewPigForm formData={formData} handleSubmit={handleSubmit}/>
		</div>
	);

	function handleSubmit(e) {
		e.preventDefault()
		const newHogObj = {};
		const fields = ["name", "specialty", "greased", "weight", "highest-medal-achieved", "image"]
		fields.forEach(field => {Object.assign(newHogObj, {[field] : e.target[field].value})})
		console.log(newHogObj);
		setFormData(newHogObj);
		
		setHogs([...hogs, newHogObj]);

		e.target.reset();
	}
}

export default App;
