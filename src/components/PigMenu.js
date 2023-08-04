import PigTile from "./PigTile";
import { useState } from 'react';

export default function PigMenu({ hogs }) {


    return (
        <div className="ui grid container">
            {hogs.map(hog => {
				return (
					<PigTile key={hog.name} hog={hog}/>
				)
			})}
        </div>
    )
}