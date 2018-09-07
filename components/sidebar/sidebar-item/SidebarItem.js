import './SidebarItem.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SideBarItem extends React.PureComponent {
    render() {
        const {icon, text, isActive} = this.props;
        return (
            <li className={classNames('ch-side-bar-item', {'is-active': isActive})}>
                <span className={`ch-side-bar-item__icon ${icon}`}></span>
                <span className="ch-side-bar-item__text">{text}</span>
            </li>
        );
    }
}

SideBarItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};