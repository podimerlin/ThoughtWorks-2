import React from 'react';
import { shallow } from 'enzyme';
import Track from './Track';
import Talk from './Talk';

describe('Track', () => {    
  const talkid = 1;
  const props = {talks: [ <Talk title={'title'} length={10} lengthtext={'lengthtext'} /> ], length: 0};
  const track = shallow(<Track {...props} />);
  
  it('renders correctly', () => {
      expect(track).toMatchSnapshot();
  });

  it('creates Morning and Afternoon components', () => {
    expect(track.find('Morning').exists()).toBe(true);
    expect(track.find('Afternoon').exists()).toBe(true);
  });

  it('create a lunch talk component', () => {
    expect(track.find('Talk.lunch').exists()).toBe(true);
  })

})
