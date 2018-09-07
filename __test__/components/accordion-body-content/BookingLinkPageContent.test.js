import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import BookingLinkPageContent from 'pages/booking-link-page/accordion-body-content/BookingLinkPageContent';
import {fromJS} from 'immutable';

const bookingLinks = fromJS([
    {
        id: 1,
        title: 'Rules',
        message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
        icon: 'ICON-RULES',
        content: [
            {
                id: 1,
                opportunityOwner: 'Opportunity Owner 1',
                active: 'Active',
                operation: '=',
                ruleNumber: '2'
            },
            {
                id: 2,
                opportunityOwner: 'Opportunity Owner 1',
                active: 'Active',
                operation: '=',
                ruleNumber: '2'
            },
            {
                id: 3,
                opportunityOwner: 'Opportunity Owner 1',
                active: 'Active',
                operation: '=',
                ruleNumber: '2'
            },
        ]
    },
    {
        id: 2,
        title: 'Algorithm',
        message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
        icon: 'ICON-ALGORITHM',
        content: []
    },
    {
        id: 3,
        title: 'Online Booking URL',
        message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
        icon: 'ICON-ALGORITHM',
        content: []
    }
]);

describe('BookingLinkPageContent', () => {

    it('should exist', () => {
        expect((<BookingLinkPageContent bookingLinks={bookingLinks} onExpandAccordion={() => {}} accordionIndexExpanded={0} />)).to.exist;
    });

    it('should have the properly classname', function () {
        const wrapper = render(<BookingLinkPageContent bookingLinks={bookingLinks} onExpandAccordion={() => {}} accordionIndexExpanded={0} />);

        expect(wrapper.hasClass('ch-booking-link-page-content')).to.be.true;
    });

    it('should show have the properly amount of content row', function () {
        const wrapper = render(<BookingLinkPageContent bookingLinks={bookingLinks} onExpandAccordion={() => {}} accordionIndexExpanded={0} />);

        expect(wrapper.find('.ch-accordion-item').children().length).to.equal(6);

    });
});