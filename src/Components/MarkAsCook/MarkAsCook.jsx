
import PropTypes from 'prop-types';

const MarkAsCook = ({ markedRecipes }) => {
    console.log(markedRecipes);
    return (
        <div className="card w-[466px] bg-base-100 shadow-xl py-8 px-6">
            <h1>Want to cook: {markedRecipes.length} </h1>
        </div>
    );
};

MarkAsCook.propTypes = {
    markedRecipes: PropTypes.arrayOf(PropTypes.object)
};

export default MarkAsCook;