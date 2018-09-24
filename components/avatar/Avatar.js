import './Avatar.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.PureComponent {
    render() {
        const {icon} = this.props;
        return (
          <div className="ch-avatar">
            <i className={`ch-avatar__icon bg-avatar ${icon}`} />
          </div>
        );
    }
}

Avatar.propTypes = {
    icon: PropTypes.string,
};