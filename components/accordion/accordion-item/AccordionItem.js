import './AccordionItem.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccordionItemBody from './AccordionItemBody';
import AccordionItemHeader from './AccordionItemHeader';

export default class AccordionItem extends React.PureComponent {
    render() {
        const {icon, title, message, isActive, indexItem, children} = this.props;

        return (
          <div className={classNames('ch-accordion-item', {'is-active': isActive})}>
            <AccordionItemHeader
              icon={icon}
              title={title}
              message={message}
              isActive={isActive}
              indexItem={indexItem}
            />
            <AccordionItemBody isVisible={isActive}>
              {children}
            </AccordionItemBody>
          </div>
        );
    }
}

AccordionItem.propTypes = {
    children: PropTypes.any,
    isActive: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
};