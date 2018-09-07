import {expect} from 'chai';
import {fetchBooking, expandAccordion} from 'actions/home/HomeActions';

describe('Home Actions', () => {

    it('should show properly the fetch booking action', () => {
        expect(fetchBooking()).to.deep.equals({type: 'FETCH_BOOKING_LINK'});
    });

    it('should trigger properly the action when accordion is already expanded', () => {
        expect(expandAccordion(1)).to.deep.equals({type: 'EXPAND_ACCORDION', payload: 1});
    });

});