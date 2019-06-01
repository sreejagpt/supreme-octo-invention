import React from 'react';
import { shallow } from 'enzyme';
import WhatsForLunchButton from './whatsForLunchButton';

describe('Whats for lunch button component', () => {
    it('should render with text', () => {
        const wrapper = shallow(<WhatsForLunchButton/>);
        expect(wrapper.find('button').text()).toEqual("What's For Lunch?"); 
    });

    it('should call on click listener from props', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(<WhatsForLunchButton onClick={onClickMock} />);
        expect(onClickMock).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(onClickMock).toHaveBeenCalled();
    });
});