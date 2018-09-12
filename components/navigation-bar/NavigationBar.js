import './NavigationBar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/collection';
import {get} from 'lodash/object';
import Avatar from 'components/avatar/Avatar';
import NavigationBarItem from './navigation-bar-item/NavigationBarItem';

export default class NavigationBar extends React.PureComponent {
    render() {
        const {navLinks, tabIndex} = this.props;
        return (
          <div className="ch-navigation-bar">
            <div className="ch-navigation-bar__logo" />
            <div className="ch-navigation-bar__nav">
              {map(navLinks, (tab, index) => (
                <NavigationBarItem
                  key={`key-${get(tab, 'id')}`}
                  isActive={(index + 1) === tabIndex}
                  text={get(tab, 'text')}
                  icon={get(tab, 'icon')}
                  link={get(tab, 'link')}
                />
                    ))}
            </div>
            <div className="ch-navigation-bar__activity" />
            <div className="ch-navigation-bar__avatar">
              <Avatar />
            </div>
          </div>
        );
    }
}
NavigationBar.propTypes = {
    navLinks: PropTypes.array.isRequired,
    tabIndex: PropTypes.number,
};