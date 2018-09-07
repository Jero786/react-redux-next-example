import './NavigationBarItem.scss';
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

export default class NavigationBarItem extends React.PureComponent{
    render() {
        const {text, icon, isActive} = this.props;
        const underLine = isActive ? (<i className="ch-active" />) : null;
        return (
            <div className={className('ch-navigation-bar-item', {'is-active': isActive})}>
                <i className={`ch-navigation-bar-item__icon ${icon}`} />
                <span className="ch-navigation-bar-item__text">{text}</span>
                {underLine}
            </div>
        );
    }
}

NavigationBarItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool
};