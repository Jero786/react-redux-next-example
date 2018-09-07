import React from 'react';
import {expect} from 'chai';
import {mount, render} from 'enzyme';
import Textfield from 'components/textfield/Textfield';

describe('Textfield', () => {

    it('should exist', () => {
        expect((<Textfield />)).to.exist;
    });

    it('should have their properly classname', function () {
        const wrapper = render(<Textfield />);

        expect(wrapper.hasClass('ch-textfield')).to.be.true;
    });

    it('should have their propery value', function () {
        const wrapper = mount(<Textfield text="brisa" />);

        expect(wrapper.getDOMNode().querySelector('input').getAttribute('value')).to.equal('brisa');
    });

    it('should able to customize the style', function () {
        const wrapper = mount(<Textfield style={{width: '10px'}} />);

        expect(wrapper.getDOMNode().querySelector('input').style.width).to.equal('10px');
    });
});