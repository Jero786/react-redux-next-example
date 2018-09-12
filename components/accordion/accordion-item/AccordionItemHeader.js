import './AccordionItemHeader.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AccordionItemHeader extends React.PureComponent {
    render() {
        const {icon, title, message, isActive, indexItem} = this.props;
        return (
          <div className={classNames('ch-accordion-item-header', {'is-active': isActive})} data-index-item={indexItem}>
            <i className={`ch-accordion-item-header__icon ${icon}`} />
            <div className="ch-accordion-item-header__body">
              <div className="ch-accordion-item-header__body-title">{title}</div>
              <div className="ch-accordion-item-header__body-message">{message}</div>
            </div>
            <div className="ch-accordion-item-header__expend">
              <i className={classNames('ch-icon ' , {'icon-add': !isActive, 'icon-minus' : isActive})} />
            </div>
          </div>
        );
    }
}

AccordionItemHeader.propTypes = {
    isActive: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
};