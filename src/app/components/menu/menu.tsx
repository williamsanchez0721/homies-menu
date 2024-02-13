// Menu.tsx
import React from 'react';
import styles from './menu.module.css';
import { Category, RecipeData, burgers, niños, acompañamientos, bebidas, malteadas, adicionales } from './Recipe';
import Recipe from '../recipe/Recipe';

interface MenuProps {
  title: string,
}

const Menu: React.FC<MenuProps> = ({ title }) => {
  // Map de las categorías disponibles
  const categories: Record<string, Category> = {
    burgers,
    niños,
    acompañamientos,
    bebidas,
    malteadas,
    adicionales,
  };

  // Obtén la categoría correspondiente según el título
  const selectedCategory = categories[title];

  // Función para renderizar las recetas de la categoría seleccionada y sus subcategorías
  const renderRecipes = (category: Category) => {
    return Object.entries(category).map(([key, recipe]) => {
      // Comprueba si la receta es un array (caso de nuggets)
      const recipes: RecipeData[] = Array.isArray(recipe) ? recipe : [recipe];

      return (
        <>
            <h2>{key.toUpperCase()}</h2>
          <div className={styles.container__menu} key={key}>
            {recipes.map((singleRecipe) => (
              <Recipe
                  key={`${key}_${singleRecipe.name}`}
                  name={singleRecipe.name}
                  image={singleRecipe.image}
                  category={singleRecipe.category}
                  recipe={singleRecipe.recipe}
                  price={singleRecipe.price}
              />
            ))}
          </div>
        </>
      );
    });
  };

  return (
    <>
    <section className={styles.container__recipes}>
      <div className={styles.category}>
        {selectedCategory && renderRecipes(selectedCategory)}
      </div>
    </section>
    </>
  );
};

export default Menu;
