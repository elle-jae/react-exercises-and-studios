import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile() {
   const listItem = oceans.map(ocean =>
      <div className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`} key={ocean.id}>
         <img className="img" src={ocean.image} alt={oceans.name} />
         <h1>{ocean.name}</h1>
         <h2>Fun Facts</h2>
         <ol>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ol>
         <Button />
      </div>
   );

   return (
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;