import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Avatar from 'components/avatar/Avatar';

describe('Avatar', () => {

    it('should exist', () => {
        expect((<Avatar />)).to.exist;
    });

    it('should have properly classname', () => {
        const wrapper = render(<Avatar />);

        expect(wrapper.hasClass('ch-avatar')).to.be.true;
    });

    it('should have properly icon', function () {
        const wrapper = render(<Avatar />);

        expect(wrapper.find('.ch-avatar__icon').length).to.equal(1);
    });

});