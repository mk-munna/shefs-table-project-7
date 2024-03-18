import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import MarkAsCook from "../MarkAsCook/MarkAsCook";

const Recipes = () => {
    const [loadingRecipe, setLoadingRecipe] = useState(true);
    const [loadingCook, setLoadingCook] = useState(true);
    const [loadingCooking, setLoadingCooking] = useState(true);
    const [recipes, setRecipes] = useState([]);
    // console.log(recipes);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mk-munna/api/main/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);
    const [markedRecipes, setMarkedRecipes] = useState([]);
    const handleAddToCart = (recipe) => {
        if (!markedRecipes.some((markedRecipe) => markedRecipe.recipe_id === recipe.recipe_id)) {
            setMarkedRecipes([...markedRecipes, recipe]);
        }
        else {
            toast('❗ Already Exist');
        }
    }
    const updateWantToCook = (restRecipes) => {
        setMarkedRecipes(restRecipes);
    }
    // console.log(recipes.length);
    useEffect(() => {
        if (recipes.length > 0) {
            setLoadingRecipe(false);
            setLoadingCook(false);
            setLoadingCooking(false);
        }
    }, [recipes])


    // console.log(loadingRecipe);
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
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {
                        recipes.map((recipe) => <Recipe
                            loadingRecipe={loadingRecipe}
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleAddToCart={handleAddToCart}
                        ></Recipe>)
                    }
                </div>
                <div>
                    <MarkAsCook
                        loadingCook={loadingCook}
                        loadingCooking={loadingCooking}
                        markedRecipes={markedRecipes}
                        updateWantToCook={updateWantToCook}
                    ></MarkAsCook>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};
export default Recipes;