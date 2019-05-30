import React from 'react';
import PropTypes from 'prop-types';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesToCook: [],
            isFetching: true,
        };
    }

    async componentDidMount() {
        const { recipesToCook } = await this.props.fetchRecipesAndIngredientsFn()
        this.setState({
            recipesToCook,
            isFetching: false,
        });
    }

    render() {
        return (
            this.state.isFetching === true ? <p>Loading...</p> :
                <ol>
                    {
                        (this.state.recipesToCook || []).map((recipe) =>
                            <li key={recipe.title}><h1>{recipe.title}</h1></li>)
                    }
                </ol>
        );
    }
}

RecipeList.propTypes = {
    fetchRecipesAndIngredientsFn: PropTypes.func,
};

export default RecipeList;