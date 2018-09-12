import {actionTypes} from 'actions/home/HomeActions';
import {fromJS} from 'immutable';
import {get} from 'lodash/object';

const navLinks = [
    {id: 1, icon: 'bg-calendar', text: 'Calendar', link: '/'},
    {id: 2, icon: 'bg-checkmark', text: 'Notes', link: '/note'},
    {id: 3, icon: 'bg-notebook', text: 'Tasks'}, // and so on..
    {id: 4, icon: 'bg-email', text: 'Email'},
    {id: 5, icon: 'bg-settings', text: 'Settings'},
];

const defaultState = fromJS({
    accordionIndexExpanded: undefined,
    navLinks,
    tabIndex: 1,
    bookingLinks: [] // go to backend to fetch that
});

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKING_LINK_REQUEST: {
            return state.merge({
                tabIndex: 1
            });
        }
        case actionTypes.EXPAND_ACCORDION: {
            const isAccordionCollapsed = state.get('accordionIndexExpanded') !== get(action, 'payload');
            return state.merge({
                accordionIndexExpanded: isAccordionCollapsed ? get(action, 'payload') : -1
            });
        }
        case actionTypes.FETCH_BOOKING_LINK_SUCCESS: {
            return state.merge({
							bookingLinks: get(action,'payload')
            });
        }
        default:
            return state
    }
};

export default homeReducer;
