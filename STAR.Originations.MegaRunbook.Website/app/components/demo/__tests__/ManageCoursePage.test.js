import React                from 'react';
import { mount }            from 'enzyme';
import { shallow }          from 'enzyme';

import { ManageCoursePage } from '../ManageCoursePage';

function setup() {

        const props = {
                          demo:    {}, 
                          errors:  {},
                          authors: [],
                          actions: {
                                        saveCourse: () => { return Promise.resolve(); }
                                   }
                      };

    return shallow(<ManageCoursePage {...props} />);
}

describe ('Manage Course Page', () => {

    it('does not crash', () => {

        //const wrapper = setup();
        //expect(wrapper.find('div').length).toBe(1);
    });
});
