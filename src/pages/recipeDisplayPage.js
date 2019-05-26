import React from 'react';
import WhatsForLunchButton from '../components/whatsForLunchButton';
import RecipeList from '../components/recipeList';

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
        this.state.displayRecipes ? <RecipeList getRecipesToCookFn={() => []}/> : <WhatsForLunchButton onClick={this.displayRecipes}/>
    );
}   

export default RecipeDisplayPage;