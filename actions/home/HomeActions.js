export const fetchBooking = () => {
    return {type: 'FETCH_BOOKING_LINK'};
};

export const expandAccordion = payload => {
    return {type: 'EXPAND_ACCORDION', payload};
};

export const actionTypes = {
    FETCH_BOOKING_LINK: 'FETCH_BOOKING_LINK',
    EXPAND_ACCORDION: 'EXPAND_ACCORDION'
};