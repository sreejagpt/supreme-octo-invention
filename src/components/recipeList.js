import React from 'react';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }

    render = () => (
        <ol>
            {
                this.state.recipes.map((recipe, idx) => 
                    <li key={idx}>What You'll Need:</li>)
            }
        </ol>
    );
}

export default RecipeList;