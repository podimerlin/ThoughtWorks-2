import React from 'react';
import { shallow } from 'enzyme';
import UploadForm from './UploadForm';



describe('UploadForm', () => {    
    const mockOnUpload = jest.fn();
    const file = new File([""], "filename");
    const form = shallow(<UploadForm onUpload={mockOnUpload}/>);
    const event = {
              preventDefault: jest.fn(),
              target: {files : [file]}
            };

    const input = 'Writing Fast Tests Against Enterprise Rails 60min';

    it('renders correctly', () => {
        expect(form).toMatchSnapshot();
    });

    it('initialize the `state` with a null file', () => {
        expect(form.state().file).toEqual(null);
    });

    describe('when clicking `upload-file` button', () => {
        beforeEach(() => {
          form.find('#fileinput').simulate('change', event);
          form.find('form').simulate('submit', event);
        });

        it('calls the `state` file to be not null CallBack', () => {
          expect(form.state().file).not.toBeNull();
        });

    });
})
