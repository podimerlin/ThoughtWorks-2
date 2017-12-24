import React from 'react';
import { shallow } from 'enzyme';
import Talk from './Talk';

describe('Talk', () => {
    const talk = shallow(<Talk/>);
    const mockChangeStringTime = jest.fn();
    var initDate = new Date();
    initDate.setHours(9,0,0,0);

    it('renders correctly', () => {
        expect(talk).toMatchSnapshot();
    });

    it('initializes a title, length and lengthtext in `state`'), () => {
        expect(talk.state()).toEqual({ title:'', length:0, lengthtext:'', time:new Date()});
    }

    it('calls function to display time', () => {
      expect(talk.instance().changeStringToTime(initDate, 10)).toEqual("9:10 AM");
    })

})