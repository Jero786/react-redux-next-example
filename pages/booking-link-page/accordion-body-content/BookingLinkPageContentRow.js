import './BookingLinkPageContentRow.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/object';
import Textfield from 'components/textfield/Textfield';

export default class BookingLinkPageContentRow extends React.PureComponent {
    render() {
        const {rule} = this.props;
        const ruleContentId = get(rule, 'id');
        const opportunityOwner = get(rule, 'opportunityOwner');
        const active = get(rule, 'active');
        const operation = get(rule, 'operation');
        const ruleNumber = get(rule, 'ruleNumber');

        return (
          <div className="ch-booking-link-page-content-row">
            <span className="ch-booking-link-page-content-row__id">
              <span className="ch-booking-link-page-content-row__id-number">{ruleContentId}</span>
            </span>
            <span><Textfield text={opportunityOwner} /></span>
            <span><Textfield text={active} /></span>
            <span><Textfield style={{maxWidth: '30px'}} text={operation} /></span>
            <span><Textfield style={{maxWidth: '30px'}} text={ruleNumber} /></span>
          </div>
        );
    }
}

BookingLinkPageContentRow.propTypes = {
    rule: PropTypes.object,
};