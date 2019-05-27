import React from 'react';
import PropTypes from 'prop-types';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            ingredients: [],
            isFetching: true,
        };
    }

    componentDidMount = async () => {
        const {recipes, ingredients} = await this.props.getRecipesToCookFn();
        this.setState({ 
            recipes,
            ingredients,
            isFetching: false,
        });
    }

    render = () => ( 
        this.state.isFetching ? <p>Loading...</p> :
        <ol>
            {
                this.state.recipes.map((recipeToCook, idx) =>
                    <li key={recipeToCook.title}>What You'll Need:</li>)
            }
        </ol>
    );
}

RecipeList.propTypes = {
    getRecipesToCookFn: PropTypes.func,
};

export default RecipeList;