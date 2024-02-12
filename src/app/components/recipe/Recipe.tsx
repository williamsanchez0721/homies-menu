// Recipe.tsx
import styles from './recipe.module.css'
import React from 'react';

interface RecipeProps {
    name: string;
    image: string;
    recipe: string;
    price: number;
}

const Recipe: React.FC<RecipeProps> = ({ name, image, recipe, price }) => {

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);

    return (
        <div className={styles.card__recipe}>
            <div className={styles.container__recipe}>
                <img src={image} alt="" />
            </div>
            <div className={styles.recipe__content}>
                <h3 className={`${styles.recipe__title} montserrat-600`}>{name}</h3>
                <p className={`${styles.recipe__category} montserrat-100`}>Categoría</p>
                <p className={`${styles.recipe} montserrat-600`}>{recipe}</p>
            </div>
            <div className={styles.content__bottom}>
                <p className={styles.recipe__price}>{formattedPrice}</p>
                <button className={styles.add__button}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" fill="var(--color-rosa-morado)">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Recipe;
