import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should call function to fetch data on componentDidMount', () => {
        const mockfetchRecipesAndIngredientsFn = jest.fn(() => Promise.resolve([]));
        shallow(<RecipeList fetchRecipesAndIngredientsFn={mockfetchRecipesAndIngredientsFn}/>);
        expect(mockfetchRecipesAndIngredientsFn).toBeCalledTimes(1);
    });
});