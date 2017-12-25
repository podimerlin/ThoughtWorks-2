import React from 'react';
import { shallow } from 'enzyme';
import Talk from './Talk';

describe('Talk', () => {
    const talk = shallow(<Talk/>);
    const mockChangeStringTime = jest.fn();
    var initDate = new Date();
    initDate.setHours(9,0,0,0);  //Time starts at 9:00AM

    it('renders correctly', () => {
        expect(talk).toMatchSnapshot();
    });
        
    it('calls function to display time', () => {
      expect(talk.instance().changeStringToTime(initDate, 10)).toEqual("9:10 AM");
    })

})