import './Textfield.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class Textfield extends React.PureComponent {

    render() {
        const {text, style} = this.props;
        return (
          <div className="ch-textfield">
            <input type="text" style={style} defaultValue={text} />
          </div>
        );
    }
}

Textfield.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
};