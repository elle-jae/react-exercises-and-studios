const RecipeAuthor = () => {
   let authorLink = "https://downshiftology.com/about-lisa/";
   let authorPhoto = "https://downshiftology.com/wp-content/uploads/2023/06/Lisa-Bryan-square-4-720x720.webp";
   let authorName = "Lisa Bryan";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "coconut flakes",
      "honey",
      "vanilla extract",
      "egg whites",
      "salt",
      "chocolate chips"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>COCONUT MACAROONS</h1>
            <p>Coconut macaroons are classic bite sized treats with a crispy coating and chewy interior. But when dipped in chocolate, they make for one indulgent dessert.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/10/Coconut-Macaroons-12.jpg" alt="coconut macaroons" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}