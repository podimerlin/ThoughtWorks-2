import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('starts with empty tracks `state`', () => {
      expect(app.state().tracks.length).toEqual(0);
    })

    const input = 'First Title 60min\nSecond Title 180min';

    describe('when text file is uploaded', () => {
      beforeEach(() => {
        app.instance().addTalks(input);
      })

      afterEach(() => {
        app.setState({ tracks: [] });
        app.instance().remainingTalks = [];
        app.instance().splittedTalks = [];
      })

      it('tracks list is at least 1', () => {
        expect(app.state().tracks.length).toBeGreaterThan(0);
      })

    });

})
