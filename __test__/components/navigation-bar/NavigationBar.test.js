import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import NavigationBar from 'components/navigation-bar/NavigationBar';

const TABS = [
    {id: 1, icon: 'bg-calendar', text: 'Calendar'},
    {id: 2, icon: 'bg-checkmark', text: 'Notes'},
    {id: 3, icon: 'bg-notebook', text: 'Tasks'},
    {id: 4, icon: 'bg-email', text: 'Email'},
    {id: 5, icon: 'bg-settings', text: 'Settings'},
];

describe('Navigation bar', () => {

    it('should exist', () => {
        const wrapper = render(<NavigationBar navLinks={TABS} />);

        expect(wrapper).to.exist;
    });

    it('should should render the properly amount of tabs', function () {
        const wrapper = render(<NavigationBar navLinks={TABS} />);

        expect(wrapper.find('.ch-navigation-bar-item').length).to.equal(5);
    });

});