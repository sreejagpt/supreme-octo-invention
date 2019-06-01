import React from 'react';
import { shallow } from 'enzyme';
import RecipeDisplayPage from './recipeDisplayPage';
import WhatsForLunchButton from '../../components/WhatsForLunchButton/whatsForLunchButton';
import RecipeList from '../../components/RecipeList/recipeList';

describe('Recipe Display Page', () => {
    it('should render with button', () => {
        const wrapper = shallow(<RecipeDisplayPage/>);
        expect(wrapper.exists(WhatsForLunchButton)).toBeTruthy();
        expect(wrapper.find(WhatsForLunchButton).props().onClick).toBeTruthy();
    });

    it('should display Recipe List when button is clicked', () => {
        const wrapper = shallow(<RecipeDisplayPage/>);
        wrapper.find(WhatsForLunchButton).simulate('click');
        expect(wrapper.exists(WhatsForLunchButton)).toBeFalsy();
        expect(wrapper.exists(RecipeList)).toBeTruthy();
    });
});