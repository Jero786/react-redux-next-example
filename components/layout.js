import 'commons/commons.scss';
import 'commons/reset.scss';
import './layout.scss';

import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'components/navigation-bar/NavigationBar';

class Layout extends React.PureComponent {

    render() {
        const {tabIndex, title, children, description, navLinks} = this.props;
        const someDescription = description ? description : title;
        return (
          <div className="ch-layout">
            <Head>
              <title>
                {title}
              </title>
              <meta charSet="utf-8" />
              <meta name="Description" content={someDescription} />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
              />
            </Head>
            <NavigationBar tabIndex={tabIndex} navLinks={navLinks.toJS()} />
            {children}
            <div className="ch-layout__dark-background" />
          </div>
        );
    }
}

Layout.propTypes = {
    title: PropTypes.string,
    tabIndex: PropTypes.number,
    children: PropTypes.any,
    navLinks: PropTypes.object.isRequired,
    description: PropTypes.string,
};

export default Layout;