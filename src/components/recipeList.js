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

    componentDidMount = async () => {
        const recipesToCook = await this.props.getRecipesToCookFn();
        this.setState({ 
            recipesToCook,
            isFetching: false,
        });
    }

    render = () => ( 
        this.state.isFetching ? <p>Loading...</p> :
        <ol>
            {
                this.state.recipesToCook.map((recipeToCook, idx) =>
                    <li key={recipeToCook.title}>What You'll Need:</li>)
            }
        </ol>
    );
}

RecipeList.propTypes = {
    getRecipesToCookFn: PropTypes.func,
};

export default RecipeList;