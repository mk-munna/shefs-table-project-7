
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import MarkAsCook from "../MarkAsCook/MarkAsCook";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('../../../public/Recipes.JSON')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);
    const [markedRecipes, setMarkedRecipes] = useState([]);
    const handleAddToCart =(recipe)=> {
        if (!markedRecipes.some((markedRecipe) => markedRecipe.recipe_id === recipe.recipe_id)) {
            setMarkedRecipes([...markedRecipes, recipe]);
        }
    }

    return (
        <div className="mt-4 lg:mt-24">
            {/* Heading */}
            <div>
                <h1 className='text-4xl font-bold text-center text-gray-800'>
                    Our Recipes
                </h1>
                <p className="lg:w-[700px] mx-auto text-center my-6">
                    Unlock a treasure trove of culinary delights with Our Recipes. From comforting classics to exotic flavors, find inspiration for every palate.
                </p>
            </div>
            {/* functional container */}
            <div className="flex gap-6 justify-center">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleAddToCart={handleAddToCart}
                        ></Recipe>)
                    }
                </div>
                <div>
                    <MarkAsCook markedRecipes={markedRecipes}></MarkAsCook>
                </div>
            </div>
        </div>
    );
};

// Recipes.propTypes = {
    
// };

export default Recipes;