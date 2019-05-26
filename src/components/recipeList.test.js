import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should render loading... text on first render', () => {
        const wrapper = shallow(<RecipeList />);
        expect(wrapper.find('p').text()).toEqual('Loading...');
    });
});