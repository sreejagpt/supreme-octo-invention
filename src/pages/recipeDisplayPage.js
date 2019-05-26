import React from 'react';
import WhatsForLunchButton from '../components/whatsForLunchButton';

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
        this.state.displayRecipes ? null : <WhatsForLunchButton onClick={this.displayRecipes}/>
    );
}

export default RecipeDisplayPage;