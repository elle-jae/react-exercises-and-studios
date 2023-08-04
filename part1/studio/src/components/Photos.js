import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <img style={{ width: 250, height: 300}} src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Chocolate-Pots-De-Creme-11.jpg" alt="recipe photo" className = {styles.imageUpdates} />
    );
}