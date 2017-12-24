import React from 'react';
import { shallow } from 'enzyme';
import Afternoon from './Afternoon';
import Talk from './Talk';

describe('Afternoon', () => {
  const props = {talks: [<Talk key={1} id={1} title={'title1'} length={10} lengthtext={'10min'} />]};
  const afternoon = shallow(<Afternoon {...props}/>);
  
  it('renders correctly', () => {
      expect(afternoon).toMatchSnapshot();
  });

  it('creates Talk Component', () => {
    expect(afternoon.find('Talk').exists()).toBe(true);
  })

  it('create Networking Talk Component', () => {
    expect(afternoon.find('Talk.networking').exists()).toBe(true);
  })

})