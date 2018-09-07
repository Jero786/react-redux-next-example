import './BookingLinkPage.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import {fetchBooking} from 'actions/home/HomeActions';
import BookingLinkPageSideBar from './BookingLinkPageSidebar';
import BookingLinkPageContent from './accordion-body-content/BookingLinkPageContent';

export class BookingLinkPage extends React.PureComponent {

    static getInitialProps({isServer, store}) {
        store.dispatch(fetchBooking());
        return {isServer}
    }

    render() {
        const {navLinks, tabIndex, bookingLinks, onExpandAccordion, accordionIndexExpanded} = this.props;

        return (
            <div className="ch-home-view">
                <Layout
                    title="Booking Links"
                    navLinks={navLinks}
                    tabIndex={tabIndex}
                >
                    <div className="booking-link-page">
                        <BookingLinkPageSideBar />
                        <BookingLinkPageContent
                            bookingLinks={bookingLinks}
                            onExpandAccordion={onExpandAccordion}
                            accordionIndexExpanded={accordionIndexExpanded}
                        />
                    </div>
                </Layout>
            </div>
        );
    }
}

BookingLinkPage.propTypes = {
    bookingLinks: PropTypes.object.isRequired,
    onExpandAccordion: PropTypes.func,
    accordionIndexExpanded: PropTypes.number
};

export default BookingLinkPage;