import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import {BookingLinkView} from 'pages';
import {fromJS} from 'immutable';

const navLinks = fromJS([
    {id: 1, icon: 'bg-calendar', text: 'Calendar', link: '/'},
    {id: 2, icon: 'bg-checkmark', text: 'Notes', link: '/note'},
    {id: 3, icon: 'bg-notebook', text: 'Tasks'}, // and so on..
    {id: 4, icon: 'bg-email', text: 'Email'},
    {id: 5, icon: 'bg-settings', text: 'Settings'},
]);

const bookingLinks = fromJS([
    {
        id: 1,
        title: 'Rules',
        message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
        icon: '',
        content: []
    }
]);

describe('Home page', () => {

    it('should exist home page', () => {
        const wrapper = render(<BookingLinkView navLinks={navLinks} bookingLinks={bookingLinks} />);

        expect(wrapper).to.exist;
    });

    it('should have booking list', function () {
        const wrapper = render(<BookingLinkView navLinks={navLinks} bookingLinks={bookingLinks} />);

        expect(wrapper.find('.ch-accordion-item').length).to.equal(1);
    });

});