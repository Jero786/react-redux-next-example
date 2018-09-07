import './AccordionItemBody.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AccordionItemBody extends React.PureComponent {
    render() {
        const {children, isVisible} = this.props;
        return (
            <div className={classNames('ch-accordion-item-body', {'is-visible': isVisible})}>
                {children}
            </div>
        );
    }
}

AccordionItemBody.propTypes = {
    children: PropTypes.any,
};

export default AccordionItemBody;