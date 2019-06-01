import React from 'react';
import WhatsForLunchButton from '../../components/WhatsForLunchButton/whatsForLunchButton';
import RecipeList from '../../components/RecipeList/recipeList';
import fetchRecipesAndIngredients from '../../utils/fetchRecipesAndIngredients';
import styles from './recipeDisplayPage.module.css';

class RecipeDisplayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayRecipes: false,
        };
    }

    displayRecipes = () => {
        this.setState({
            displayRecipes: true,
        });
    };

    render = () => (

        <div className={styles.root}>
            {
                this.state.displayRecipes ?
                    <RecipeList fetchRecipesAndIngredientsFn={fetchRecipesAndIngredients} /> :
                    <WhatsForLunchButton onClick={this.displayRecipes} />
            }
        </div>
    );
}

export default RecipeDisplayPage;