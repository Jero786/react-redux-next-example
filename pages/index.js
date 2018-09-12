import './index.scss';
import React from 'react';
import {fromJS} from 'immutable';
import {fetchBooking, expandAccordion} from 'actions/home/HomeActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookingLinkPage from 'pages/booking-link-page/BookingLinkPage';


export class BookingLinkView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchBooking());
		return {isServer}
	}

	render() {
		const {navLinks, tabIndex, bookingLinks, onExpandAccordion, accordionIndexExpanded} = this.props;

		return (
  <div className="ch-home-view">
    <BookingLinkPage
      navLinks={navLinks}
      tabIndex={tabIndex}
      bookingLinks={bookingLinks}
      onExpandAccordion={onExpandAccordion}
      accordionIndexExpanded={accordionIndexExpanded}
    />
  </div>
		);
	}
}

BookingLinkView.propTypes = {};

const mapStateToProps = (state = fromJS({})) => {

	const homeReducer = state.get('homeReducer');
	return {
		tabIndex: homeReducer.get('tabIndex'),
		navLinks: homeReducer.get('navLinks'),
		bookingLinks: homeReducer.get('bookingLinks'),
		accordionIndexExpanded: homeReducer.get('accordionIndexExpanded')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onExpandAccordion: bindActionCreators(expandAccordion, dispatch)
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(BookingLinkView);
