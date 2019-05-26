import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should call function to fetch data on componentDidMount', () => {
        const mockGetRecipesToCookFn = jest.fn(() => Promise.resolve([]));
        shallow(<RecipeList getRecipesToCookFn={mockGetRecipesToCookFn}/>);
        expect(mockGetRecipesToCookFn).toBeCalledTimes(1);
    });
});