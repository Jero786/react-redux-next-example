import './Sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends React.PureComponent {
    render() {
        const {children} = this.props;
        return (
            <ul className="ch-side-bar">{children}</ul>
        );
    }
}

SideBar.propTypes = {
    children: PropTypes.any.isRequired,
};