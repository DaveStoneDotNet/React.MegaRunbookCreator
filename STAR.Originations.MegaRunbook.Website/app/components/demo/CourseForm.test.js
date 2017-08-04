import React       from 'react';
import { mount }   from 'enzyme';
import { shallow } from 'enzyme';

import CourseForm  from './CourseForm';

import { padZero } from '../../utils';

function setup(isSaving) {

    const props = {
                      isSaving: isSaving, 
                      course:   {}, 
                      errors:   {},
                      onSave:   () => {},
                      onChange: () => {}
                  };

    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {

        const shallowWrapper = setup(false);

        expect(shallowWrapper.find('form').length).toBe(1);
        expect(shallowWrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const shallowWrapper = setup(false);
        expect(shallowWrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const shallowWrapper = setup(true);
        expect(shallowWrapper.find('input').props().value).toBe('Saving...');
    });
});

describe('Pad Zero', () => {
    it('Prepends a ZERO when the provided number is between one and nine unclusive', () => {
            const s = padZero(1);
            expect(s).toBe('01');
        }
    );
});