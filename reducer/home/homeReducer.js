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
    bookingLinks: [
        {
            id: 1,
            title: 'Rules',
            message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
            icon: 'bg-icon_rules',
            content: [
                {
                    id:1,
                    opportunityOwner: 'Opportunity Owner 1',
                    active: 'Active',
                    operation: '=',
                    ruleNumber: '2'
                },
                {
                    id:2,
                    opportunityOwner: 'Opportunity Owner 1',
                    active: 'Active',
                    operation: '=',
                    ruleNumber: '2'
                },
                {
                    id:3,
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
            icon: 'bg-icon_algorithm',
            content: []
        },
        {
            id: 3,
            title: 'Online Booking URL',
            message: 'Filter which events get assigened. For instance only events with accounts in San Francisco',
            icon: 'bg-icon_cloud',
            content: []
        },
        {
            id: 4,
            title: 'Metting Seetings',
            message: 'Meeting template and availability',
            icon: 'bg-icon_calendar',
            content: []
        },
        {
            id: 5,
            title: 'Advance Metting Seetings',
            message: 'Meeting ownership & Salesforce settings',
            icon: 'bg-icon_calendar',
            content: []
        },
        {
            id: 6,
            title: 'Active Meeting Rooms',
            message: 'Optional, for in person meetings',
            icon: 'bg-icon_advance_room',
            content: []
        },
        {
            id: 7,
            title: 'Active Users',
            message: 'Optional, for in person meetings',
            icon: 'bg-icon_user',
            content: []
        }
    ]
});

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKING_LINK: {
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
        default:
            return state
    }
};

export default homeReducer;