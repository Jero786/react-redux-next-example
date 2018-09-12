import './BookingLinkPageContent.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'components/accordion/Accordion';
import AccordionItem from 'components/accordion/accordion-item/AccordionItem';
import {map} from 'lodash/collection';
import {get} from 'lodash/object';
import BookingLinkPageContentRow from './BookingLinkPageContentRow';

export default class BookingLinkPageContent extends React.PureComponent {

    getContentEl(content) {
        const listRules = content.toJS();
        return map(listRules, rule => <BookingLinkPageContentRow rule={rule} key={`rule-id-${ get(rule, 'id')}`} />);
    }

    render() {
        const { bookingLinks, onExpandAccordion, accordionIndexExpanded} = this.props;

        const bookingLinksEl = bookingLinks.map(bookingItem => (
          <AccordionItem
            key={`ch-booking-item-index-${bookingItem.get('id')}`}
            icon={bookingItem.get('icon')}
            title={bookingItem.get('title')}
            message={bookingItem.get('message')}
          >
            {this.getContentEl(bookingItem.get('content'))}
          </AccordionItem>
        )).toJS();
        return (
          <div className="ch-booking-link-page-content">
            <div className="booking-link-page__main">
              <div className="booking-link-page__title">
                <div className="booking-link-page__title-icon" />
                <div className="booking-link-page__title-text">Edit Booking Link</div>
              </div>
              <div className="booking-link-page__body">
                <Accordion
                  onClick={onExpandAccordion}
                  indexExpanded={accordionIndexExpanded}
                >
                  {bookingLinksEl}
                </Accordion>
              </div>
            </div>
          </div>
        );
    }
}

BookingLinkPageContent.propTypes = {
    bookingLinks: PropTypes.any.isRequired,
    onExpandAccordion: PropTypes.func,
    accordionIndexExpanded: PropTypes.number
};