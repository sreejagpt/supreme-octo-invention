import React from 'react';
import { shallow } from 'enzyme';
import RecipeDisplayPage from './recipeDisplayPage';
import WhatsForLunchButton from '../components/whatsForLunchButton';

describe('Recipe Display Page', () => {
    it('should render with button', () => {
        const wrapper = shallow(<RecipeDisplayPage/>);
        expect(wrapper.find(WhatsForLunchButton).props().onClick).toBeTruthy();
    });
});