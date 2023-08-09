import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const list = data.projects;
    const listItem = list[index];

    function handleClick() {
        if (index < list.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{listItem.gym}</h2>
            <h3>{listItem.climbType}</h3>
            <img src={listItem.photoUrl} width="300" height="300" alt={listItem.alt} />
        </div>
    );
}