
import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleAddToCart }) => {
    const { ingredients } = recipe;
    const slicedIngredients = ingredients.slice(0, 3);
    // console.log(slicedIngredients);

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl p-6 h-[580px] w-[320px]">
                <figure><img src={recipe.recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl ">{recipe.recipe_name}</h2>
                    <p className='text-sm text-[#878787]'>{recipe.short_description}</p>
                    <p>Ingredients: <span className='bg-[#cae0d7] px-2 rounded-full'>{ingredients.length} </span></p>
                    <div>
                        {
                            slicedIngredients.map((ingredient, index) => {
                                return (
                                        <li className='text-sm' key={index}>{ingredient}</li>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => {handleAddToCart(recipe)}} className='btn bg-[#0BE58A] hover:bg-[#35d190]'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    ingredients: PropTypes.array,
    handleAddToCart: PropTypes.func.isRequired,
};

export default Recipe;