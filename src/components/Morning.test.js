import React from 'react';
import { shallow } from 'enzyme';
import Morning from './Morning';
import Talk from './Talk';

describe('Morning', () => {
  const props = {talks: [<Talk key={1} id={1} title={'title1'} length={10} lengthtext={'10min'} />]};
  const morning = shallow(<Morning {...props}/>);
  
  it('renders correctly', () => {
      expect(morning).toMatchSnapshot();
  });

  it('creates Talk Component', () => {
    expect(morning.find('Talk').exists()).toBe(true);
  })

})