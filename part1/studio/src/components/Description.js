import React from "react";
import styles from './Description.module.css';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>CHOCOLATE POTS DE CRÈME</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

function RecipeAuthor() {
    const authorLink = "https://downshiftology.com/recipes/chocolate-pots-de-creme/#wprm-recipe-container-65291";
    const authorPhoto = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-5-1.jpg";
    const authorName = "Lisa Bryan";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img style={{ width: 250, height: 100 }}src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Downshiftology</a>
            </div>
        </div>
    );
}

export default RecipeDescription;