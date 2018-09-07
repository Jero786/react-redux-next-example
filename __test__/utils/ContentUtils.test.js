import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import ContentUtils from 'utils/ContentUtils';

describe('ContentUtils', () => {

    it('should find parent element by className', () => {
        const spy = sinon.spy();
        const el = mount(<div role="button" tabIndex="0" onKeyDown={() => {}} onClick={spy} className="parent-element"><div className="child-element" /></div>);

        const nodeChild = el.find('.child-element').getDOMNode();

        expect(ContentUtils.getElementByClassName(nodeChild, 'parent-element').classList.contains('parent-element')).to.be.true;
    });

    it('should not find parent element by className', () => {
        const spy = sinon.spy();
        const el = mount(<div role="button" tabIndex="0" onKeyDown={() => {}} onClick={spy} className="parent-element"><div className="child-element" /></div>);

        const nodeChild = el.find('.child-element').getDOMNode();

        expect(ContentUtils.getElementByClassName(nodeChild, 'parent-element-wrong')).to.be.null;
    });

});