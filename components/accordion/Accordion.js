import './Accordion.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ContentUtils from 'utils/ContentUtils';

export default class Accordion extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(evt) {
        const {onClick} = this.props;

        if(!this.isClickFromBodyContent(evt) && onClick) onClick(_getIndexElement(evt));
    }

    hydrateChildrenProps() {
        const {children, indexExpanded} = this.props;

        return React.Children.map(children, (accordionItem, indexItem) => {
            return React.cloneElement(accordionItem, {
                isActive: (indexItem === indexExpanded),
                indexItem
            });
        })
    }

    isClickFromBodyContent(event) {
        return !!ContentUtils.getElementByClassName(event.target, 'ch-accordion-item-body');
    }

    render() {
        return (
          <div
            role="button"
            tabIndex="0"
            onKeyDown={() => {
                }}
            onClick={this.onClick}
            className="ch-accordion"
          >
            {this.hydrateChildrenProps()}
          </div>
        );
    }
}

/**
 * Retrieve the current index of the accordionEl from target event
 * @param event
 * @returns {number}
 * @private
 */
function _getIndexElement(event) {
    const parentEl = ContentUtils.getElementByClassName(event.target, 'ch-accordion-item-header');
    if (parentEl) {
        return Number(parentEl.getAttribute('data-index-item'));
    } else {
        return -1;
    }
}

Accordion.propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    indexExpanded: PropTypes.number,
};