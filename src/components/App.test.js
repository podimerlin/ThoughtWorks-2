import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UploadForm from './UploadForm';

const app = shallow(<App />);

describe('App', () => {

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('starts with empty tracks `state`', () => {
      expect(app.state().tracks.length).toEqual(0);
    })

    const input = 'Writing Fast Tests Against Enterprise Rails 60min';

    describe('when text file is uploaded', () => {
      beforeEach(() => {
        app.instance().addTalks(input);
      })

      it('track is created', () => {
        expect(app.state().tracks.length).toBeGreaterThan(0);
      })

    });

})
