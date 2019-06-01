import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should call function to fetch data on componentDidMount', async () => {
        const mockFetchRecipesAndIngredientsFn = jest.fn(async () => Promise.resolve({}));
        shallow(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        expect(mockFetchRecipesAndIngredientsFn).toBeCalledTimes(1);
    });

    it('should show loading gif while fetching data', async () => {
        const mockFetchRecipesAndIngredientsFn = jest.fn(async () => Promise.resolve({}));
        const wrapper = shallow(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        expect(wrapper.find('img').props().src).toEqual('loading.gif');
        expect(wrapper.find('img').props().alt).toEqual('Loading...');
    });


    it('should display recipe titles when fetched', async () => {
        const recipe1 = { title: 'Title 1' };
        const recipe2 = { title: 'Title 2' };
        const mockFetchRecipesAndIngredientsFn = () => Promise.resolve({ recipesToCook: [recipe1, recipe2] })
        const wrapper = mount(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        await wrapper.instance().componentDidMount();
        wrapper.update();
        expect(wrapper.find('ol>li>h1').at(0).text()).toEqual('🍽Title 1');
        expect(wrapper.find('ol>li>h1').at(1).text()).toEqual('🍽Title 2');
    });

    it('should display full recipe info when fetched', async () => {
        const recipe1 = { title: 'Title 1', ingredients: [{ title: 'ingredient 1' }, { title: 'ingredient 2' }] };
        const recipe2 = { title: 'Title 2', ingredients: [{ title: 'ingredient 3' }, { title: 'ingredient 4' }] };
        const mockFetchRecipesAndIngredientsFn = () => Promise.resolve({ recipesToCook: [recipe1, recipe2] })
        const wrapper = mount(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        await wrapper.instance().componentDidMount();
        wrapper.update();
        const firstRecipe = wrapper.find('ol>li').at(0);
        expect(firstRecipe.find('h1').text()).toEqual('🍽Title 1');
        expect(firstRecipe.find('h2').text()).toEqual("🍳What you'll need:");
        expect(firstRecipe.find('ul>li').at(0).text()).toContain('ingredient 1');
        expect(firstRecipe.find('ul>li').at(1).text()).toEqual('ingredient 2');

        const secondRecipe = wrapper.find('ol>li').at(1);
        expect(secondRecipe.find('h1').text()).toEqual('🍽Title 2');
        expect(secondRecipe.find('h2').text()).toEqual("🍳What you'll need:");
        expect(secondRecipe.find('ul>li').at(0).text()).toContain('ingredient 3');
        expect(secondRecipe.find('ul>li').at(1).text()).toEqual('ingredient 4');
    });

    it('should display blank screen if no recipes returned', async () => {
        const mockFetchRecipesAndIngredientsFn = () => Promise.resolve({ recipesToCook: [] })
        const wrapper = mount(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        await wrapper.instance().componentDidMount();
        wrapper.update();
        expect(wrapper.exists('ol>li')).toEqual(false);
    });

    it('should display no ingredients if none returned', async () => {
        const recipeWithNoIngredients = { title: 'Title 1', ingredients: [] };
        const mockFetchRecipesAndIngredientsFn = () => Promise.resolve({ recipesToCook: [recipeWithNoIngredients] })
        const wrapper = mount(<RecipeList fetchRecipesAndIngredientsFn={mockFetchRecipesAndIngredientsFn} />);
        await wrapper.instance().componentDidMount();
        wrapper.update();
        const recipes = wrapper.find('ol>li');
        expect(recipes.length).toEqual(1);
        const firstRecipe = recipes.at(0);
        expect(firstRecipe.find('h1').text()).toEqual('🍽Title 1');
        expect(firstRecipe.find('h2').text()).toEqual("🍳What you'll need:");
        expect(firstRecipe.exists('ul>li')).toEqual(false);
    });
});