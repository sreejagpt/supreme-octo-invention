import React from 'react';
import PropTypes from 'prop-types';
import loading from './loading.gif';
import styles from './recipeList.module.css';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesToCook: [],
            isFetching: true,
        };
    }

    async componentDidMount() {
        const { recipesToCook } = await this.props.fetchRecipesAndIngredientsFn();
        this.setState({
            recipesToCook,
            isFetching: false,
        });
    }

    recipes() {
        return (
            <ol>
                {
                    (this.state.recipesToCook || []).map((recipe, idx) =>
                        <li key={idx}>
                            <h1>🍽{recipe.title}</h1>
                            <h2>🍳What you'll need:</h2>
                            <br />
                            <ul>
                                {
                                    (recipe.ingredients || []).map(
                                        (ingredient, idx) =>
                                            <li key={idx}>
                                                {ingredient.title}
                                            </li>
                                    )
                                }
                            </ul>
                            <hr />
                        </li>)
                }
            </ol>
        );
    }

    render() {
        return (
            <div className={styles.root}>
                {
                    this.state.isFetching === true ?
                        <img src={loading} alt="Loading..." /> :
                        this.recipes()
                }
            </div>
        );
    }
}

RecipeList.propTypes = {
    fetchRecipesAndIngredientsFn: PropTypes.func,
};

export default RecipeList;