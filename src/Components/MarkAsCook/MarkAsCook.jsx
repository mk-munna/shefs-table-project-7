
import PropTypes from 'prop-types';
import { useState } from 'react';
import Cooking from '../Cooking/Cooking';

const MarkAsCook = ({ markedRecipes, updateWantToCook }) => {
    const [cookingRecipes, setCookingRecipes] = useState([]);
    // sum of time and calories
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const handleAddTime = (time, calorie) => {
        setTotalTime(totalTime + time);
        setTotalCalories(totalCalories + calorie);
    }
    // console.log('total time',totalTime);
    // console.log('total calories',totalCalories);



    const handleAddToCooking = (recipe) => {
        setCookingRecipes([...cookingRecipes, recipe]);
        // console.log(recipe);
        // console.log('marked recipe',markedRecipes.length);
        const restRecipes = markedRecipes.filter(cookingRecipe => cookingRecipe.recipe_id !== recipe.recipe_id);
        // console.log('rest recipe', restRecipes.length);
        updateWantToCook(restRecipes);
        handleAddTime(recipe.preparing_time, recipe.calories)
    }

    return (
        <div className="card w-[350px] lg:w-[500px] bg-base-100 shadow-xl py-8 px-6">
            <h1 className='text-center text-xl font-semibold'>Want to cook: <span className='bg-[#cae0d7] px-2 rounded-full py-[2px]'>{markedRecipes.length}</span> </h1><br />
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            markedRecipes.map((recipe, index) => {
                                return (
                                    <tr key={index} className="bg-base-200">
                                        <th>{index+1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td className='text-[12px]'>{recipe.preparing_time} min</td>
                                        <td className='text-[12px]'>{recipe.calories} Calories</td>
                                        <td><button onClick={()=>handleAddToCooking(recipe)} className='bg-[#0BE58A] px-4 py-1 rounded-full'>Prepare</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* cooking */}
            <div>
                <Cooking cookingRecipes={cookingRecipes}></Cooking>
            </div>
            <div className='flex justify-end mt-6 '>
                <div className='w-[250px] gap-6 flex'>
                    <div>
                        <p className='text-sm mb-2'>Total Time = </p>
                        <p className='text-sm'><span className='bg-[#f0f0f0] px-2 rounded-md py-[2px] '>{totalTime}</span> minutes </p>
                    </div>
                    <div>
                        <p className='text-sm mb-2'>Total Calories = </p>
                        <p className='text-sm'><span className='bg-[#f0f0f0] px-2 rounded-md py-[2px] '>{totalCalories}</span> calories </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MarkAsCook.propTypes = {
    markedRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateWantToCook: PropTypes.func.isRequired,
};

export default MarkAsCook;