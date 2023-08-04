import { useState } from 'react';


const HIDDEN_IMG_URL = "https://d7hftxdivxxvm.cloudfront.net/?height=533&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fc_ljYIFRvBI4pL5YoqEEpg%2Fnormalized.jpg&width=800"
const EXPIGIT = "This expigit has been temporarily removed."

export default function PigTile({ hog }) {

    const [showDetails, setShowDetails] = useState(false);
    const [hidden, setHidden] = useState(false);


    const imageCard = <img className="piggyProfilePic" src={hog.image} alt={`Piggy profile pic: ${hog.name}`}/>;
    const detailCard = (
        <>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        </>
    );
    const hiddenCard = (
        <img className="piggyProfilePic" src={HIDDEN_IMG_URL} title={EXPIGIT} alt={EXPIGIT}/>
    )

    return (
        <div className="pigTile minPigTile 'ui eight wide column'" onClick={() => setShowDetails(!showDetails)}>

            <h3>
                {hog.name}
                <button onClick={() => setHidden(!hidden)}>{hidden ? "Show" : "Hide"}</button>
            </h3>
            {hidden ? hiddenCard : (showDetails ? detailCard : imageCard)}
        </div>
    )
}