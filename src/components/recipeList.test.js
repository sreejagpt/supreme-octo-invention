import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipeList';

describe('Recipe List Component', () => {
    it('should render empty ordered list', () => {
        const wrapper = shallow(<RecipeList />);
        expect(wrapper.find('ol')).toEqual({});
    });
});