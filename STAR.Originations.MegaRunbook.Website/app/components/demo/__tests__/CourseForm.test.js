import React       from 'react';
import { mount }   from 'enzyme';
import { shallow } from 'enzyme';
import renderer    from 'react-test-renderer';

import CourseForm  from '../CourseForm';

function getTestProps(isSaving) {
    return {
        course:     {}, 
        allAuthors: [], 
        onSave:     () => {},
        onChange:   () => {}, 
        isSaving:   isSaving, 
        errors:     {}
    };
}

function getShallowCourseFormWrapper(isSaving) {
    const props = getTestProps(isSaving);
    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {

        const shallowCourseFormWrapper = getShallowCourseFormWrapper(false);
        expect(shallowCourseFormWrapper.find('form').length).toBe(1);
        expect(shallowCourseFormWrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const shallowCourseFormWrapper = getShallowCourseFormWrapper(false);
        expect(shallowCourseFormWrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const shallowCourseFormWrapper = getShallowCourseFormWrapper(true);
        expect(shallowCourseFormWrapper.find('input').props().value).toBe('Saving...');
    });

    it('rendered CourseForm matches snapshot', () => {
        const props = getTestProps(false);
        
        const tree = renderer.create(<CourseForm {...props} />).toJSON();
        // console.log(tree);

        // If the test fails (but is valid), press 'u' to update the snapshot...
        expect(tree).toMatchSnapshot();

        // Unnecessary - Illustrative only. Does the same thing as 'toMatchSnapshot'... 
        // ... just more explicitly and granularly.
        
        expect(tree.children.length).toBe(6);
        expect(tree.children[0].type).toBe('h1');
        expect(tree.children[5].type).toBe('input');
    });
});
