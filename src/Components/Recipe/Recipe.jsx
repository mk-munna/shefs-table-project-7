
import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleAddToCart }) => {
    const { ingredients } = recipe;
    const slicedIngredients = ingredients.slice(0, 3);
    // console.log(slicedIngredients);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl p-6 w-[320px]">
                <figure><img src={recipe.recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl ">{recipe.recipe_name}</h2>
                    <p className='text-base text-[#878787]'>{recipe.short_description}</p>
                    <p>Ingredients: {ingredients.length} </p>
                    <div>
                        <ul>

                        </ul>
                        {
                            slicedIngredients.map((ingredient, index) => {
                                return (
                                        <li key={index}>{ingredient}</li>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => handleAddToCart(recipe)} className='btn bg-[#0BE58A] hover:bg-[#35d190]'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    ingredients: PropTypes.array,
    handleAddToCart: PropTypes.func,
};

export default Recipe;