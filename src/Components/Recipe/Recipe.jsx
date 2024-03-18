
import PropTypes from 'prop-types';
import { CiTimer } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";


const Recipe = ({ recipe, handleAddToCart, loadingRecipe }) => {

    const { ingredients } = recipe;
    const slicedIngredients = ingredients.slice(0, 3);
    // console.log(slicedIngredients);

    return (
        <div>
            {
                loadingRecipe ? (
                    <div className="card animate-pulse  bg-base-100 shadow-xl p-4 h-[560px] w-[320px]">
                        {/*  Image */}
                        <div className="h-[140px] w-[272px] mx-auto bg-gray-300 rounded-b-md rounded-t-2xl mb-2"></div>
                        <div className="card-body p-4">
                            {/* Title */}
                            <div className=" rounded-[5px] h-6 bg-gray-300 mb-2"></div>
                            {/*  Description */}
                            <div className="rounded-[5px] h-[70px] bg-gray-300 mb-4"></div>
                            <hr />
                            {/*  Ingredients */}
                            <div className="mt-2 flex flex-col gap-2 mb-4">
                                <div className=" h-4 w-40 bg-gray-300"></div>
                                <div className=" h-4 w-40 bg-gray-300"></div>
                                <div className=" h-4 w-40 bg-gray-300"></div>
                            </div>
                            <hr />
                            {/*  Time and Calories */}
                            <div className="flex mt-4 items-center gap-4">
                                <div className=" h-4 bg-gray-300 w-12"></div>
                                <div className=" h-4 bg-gray-300 w-[100px]"></div>
                            </div>
                            {/* Button */}
                            <div className=" mt-2 bg-gray-300 w-full h-12 rounded-md"></div>
                        </div>
                    </div>
                ) : (
                    <div className="card mx-auto  bg-base-100 shadow-xl p-4 h-[560px] w-[320px]">
                        <figure><img src={recipe.recipe_image} alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <h2 className="text-xl ">{recipe.recipe_name}</h2>
                            <p className='text-sm text-[#878787]'>{recipe.short_description}</p>
                            <hr className='my-2' />
                            <p>Ingredients: <span className='bg-[#cae0d7] px-[6px]  rounded-full'>{ingredients.length} </span></p>
                            <div>
                                {
                                    slicedIngredients.map((ingredient, index) => {
                                        return (
                                            <li className='text-sm' key={index}>{ingredient}</li>
                                        )
                                    })
                                }
                            </div>
                            <hr className='mt-2' />
                            <div className='text-sm flex item-center gap-3 mt-3'>
                                <CiTimer />
                                <span className='-mt-[2px] -ml-1'>{recipe.preparing_time} min</span>
                                <AiOutlineFire />
                                <span className='-mt-[2px] -ml-2'>{recipe.calories} calories</span>
                            </div>
                            <button onClick={() => { handleAddToCart(recipe) }} className='btn bg-[#0BE58A] hover:bg-[#35d190]'>Want to Cook</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    ingredients: PropTypes.array,
    handleAddToCart: PropTypes.func.isRequired,
    loadingRecipe: PropTypes.bool,
};

export default Recipe;