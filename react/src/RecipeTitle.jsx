import React from "react";

function RecipeTitle() {
    const recipe = {
        title: 'Chocolate cake',
        feedback: {
            rating: 4.5,
            reviews: 200,
        },
        ingredients: [
            { name: '1 and 1/2 cups of all-purpose flour', prepared: false },
            { name: '1 cup of granulated sugar', prepared: false },
            { name: '2 teaspoons of baking powder', prepared: false },
            { name: '1/2 teaspoon of salt', prepared: false },
            { name: '1/2 cup of unsalted butter, softened', prepared: false },
            { name: '2 large eggs', prepared: false },
            { name: '1/2 cup of whole milk', prepared: false },
            { name: '2 teaspoons of vanilla extract', prepared: false },
            { name: '1 cup of semi-sweet chocolate chips and toppings of your wish', prepared: false },
        ],
    };

    return (
        <>
            <h2>How To Prepare a Cake!</h2>
            <div>
                <h2>{recipe.title}</h2>
                <p>Rating: {recipe.feedback.rating} ({recipe.feedback.reviews} reviews)</p>
                <h3>Ingredients</h3>
                <ol>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={{ textDecoration: ingredient.prepared ? 'line-through' : 'none' }}>
                            {ingredient.name}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default RecipeTitle;
