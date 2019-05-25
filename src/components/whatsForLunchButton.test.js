import React from 'react';
import { shallow } from 'enzyme';
import WhatsForLunchButton from './whatsForLunchButton';

describe('Whats for lunch button component', () => {
    it('should render with text', () => {
        const wrapper = shallow(<WhatsForLunchButton/>);
        expect(wrapper.find('button').text()).toEqual("What's For Lunch?"); 
    });
});