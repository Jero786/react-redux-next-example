import fetch from 'cross-fetch';


export const requestBooking = () => {
	return {type: 'FETCH_BOOKING_LINK_REQUEST'};
};

export const requestBookingSuccess = payload => {
	return {type: 'FETCH_BOOKING_LINK_SUCCESS', payload};
};

export const requestBookingFailure = () => {
	return {type: 'FETCH_BOOKING_LINK_FAILURE'};
};

export const expandAccordion = payload => {
	return {type: 'EXPAND_ACCORDION', payload};
};

export const fetchBooking = () => {
	return dispatch => {
		dispatch(requestBooking());
		return fetch('http://nrd5j.mocklab.io/json/booking-links')
			.then(response => response.json())
			.then(json => {
				dispatch(requestBookingSuccess(json));
			})
	}
};

export const actionTypes = {
	FETCH_BOOKING_LINK_REQUEST: 'FETCH_BOOKING_LINK_REQUEST',
	FETCH_BOOKING_LINK_SUCCESS: 'FETCH_BOOKING_LINK_SUCCESS',
	FETCH_BOOKING_LINK_FAILURE: 'FETCH_BOOKING_LINK_FAILURE',
	EXPAND_ACCORDION: 'EXPAND_ACCORDION'
};
