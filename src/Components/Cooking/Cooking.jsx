
import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';

const Cooking = ({ cookingRecipes }) => {
    // console.log(cookingRecipes.reduce((recipes, recipe) => recipes + recipe));
    
    return (
        <div className='mt-6'>
            <h1 className='text-center text-xl font-semibold'>Currently Cooking: <span className='bg-[#cae0d7] px-2 rounded-full py-[2px]'>{cookingRecipes.length}</span> </h1><br />
            <hr />
            <table className='table'>
                <tbody>
            {
                cookingRecipes.map((recipe, index) => {
                    return (
                            <tr key={index} className="">
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td className='text-[12px]'>{recipe.preparing_time} min</td>
                                <td className='text-[12px]'>{recipe.calories} Calories</td>
                            </tr>
                    )
                })
                    }
                </tbody>
            </table>
        </div>
    );
};

Cooking.propTypes = {
    cookingRecipes: PropTypes.arrayOf(PropTypes.object),
};

export default Cooking;