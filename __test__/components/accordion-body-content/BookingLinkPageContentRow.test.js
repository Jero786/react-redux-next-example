import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import BookingLinkPageContentRow from 'pages/booking-link-page/accordion-body-content/BookingLinkPageContentRow';

const rules = [
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
    }
];

describe('BookingLinkPageContentRow', () => {

    it('should exist', () => {
        expect((<BookingLinkPageContentRow rule={rules[0]} />));
    });

    it('should contain the properly classname', function () {
        const wrapper = render(<BookingLinkPageContentRow rule={rules[0]} />);

        expect(wrapper.hasClass('ch-booking-link-page-content-row')).to.be.true;
    });

    it('should properly rule content id', function() {
        const wrapper = render(<BookingLinkPageContentRow rule={rules[0]} />);

        expect(wrapper.find('.ch-booking-link-page-content-row__id-number').text()).to.equal('1');
    });

});