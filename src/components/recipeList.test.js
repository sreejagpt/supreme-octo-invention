import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should call function to fetch data on componentDidMount', async () => {
        const mockFetchRecipesAndIngredientsFn = jest.fn(async () => Promise.resolve({}));
        shallow(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        expect(mockFetchRecipesAndIngredientsFn).toBeCalledTimes(1);
    });

    it('should display recipe titles when fetched', async () => {
        const recipe1 = { title: 'Title 1' };
        const recipe2 = { title: 'Title 2' };
        const mockFetchRecipesAndIngredientsFn = () => Promise.resolve({recipesToCook: [recipe1, recipe2]})
        const wrapper = mount(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        await wrapper.instance().componentDidMount();
        wrapper.update();
        expect(wrapper.find('ol>li').at(0).text()).toEqual('Title 1');
        expect(wrapper.find('ol>li').at(1).text()).toEqual('Title 2');
    });
});