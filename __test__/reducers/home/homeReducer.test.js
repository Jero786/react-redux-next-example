import homeReducer from 'reducer/home/homeReducer';
import {actionTypes} from 'actions/home/HomeActions';
import {expect} from 'chai';
import {fromJS} from 'immutable';

describe('Home Reducer', () => {

    it('should initialize the booking link by default', () => {
        const store = undefined;
        const action = {};

        const result = homeReducer(store, action);
        expect(result.get('tabIndex')).to.equals(1);
    });

    it('should fetch booking link properly', function () {
        const store = fromJS({tabIndex: 4});

        const result = homeReducer(store, {type:actionTypes.FETCH_BOOKING_LINK});
        expect(result.get('tabIndex')).to.equals(1);
    });

    it('should expand accordion properly', function () {
        const store = fromJS({accordionIndexExpanded: -1});

        const result = homeReducer(store, {type:actionTypes.EXPAND_ACCORDION, payload: 2 });
        expect(result.get('accordionIndexExpanded')).to.equals(2);
    });

    it('should toggle expand accordion properly', function () {
        const store = fromJS({accordionIndexExpanded: 2});

        const result = homeReducer(store, {type:actionTypes.EXPAND_ACCORDION, payload: 2 });
        expect(result.get('accordionIndexExpanded')).to.equals(-1);
    });

});