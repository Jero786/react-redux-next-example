import React from 'react';
import {expect} from 'chai';
import {render, mount} from 'enzyme';
import Accordion from 'components/accordion/Accordion';
import AccordionItem from 'components/accordion/accordion-item/AccordionItem';
import sinon from 'sinon';

describe('Accordion', () => {

    it('should exist', () => {
        expect(Accordion).to.be.exist;
    });

    it('should have the properly style', function () {
        const wrapper = render(
            <Accordion>
            <AccordionItem />
            <AccordionItem />
            </Accordion>);

        expect(wrapper.hasClass('ch-accordion')).to.be.true;
    });

    it('should contain the proper amount of their child', function () {
        const wrapper = render((
            <Accordion>
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            </Accordion>)
        );

        expect(wrapper.children().length).to.equal(3);
    });

    it('should contain properly text each accordion item', function () {
        const wrapper = render((
            <Accordion>
            <AccordionItem title="Rules" message="Some texts about message of rules" />
            <AccordionItem title="Algorithm" message="Some texts about algorithm" />
            </Accordion>)
    );

        expect(wrapper.find('.ch-accordion-item-header').eq(0).text()).to.contain('Rules');
        expect(wrapper.find('.ch-accordion-item-header').eq(1).text()).to.contain('Algorithm');
    });

    it('should expand accordion given index', function () {
        const wrapper = mount((
            <Accordion indexExpanded={0}>
            <AccordionItem title="Rules" message="Some texts about message of rules" />
            <AccordionItem title="Algorithm" message="Some texts about algorithm" />
            </Accordion>
    )
    );

        expect(wrapper.find('.ch-accordion .ch-accordion-item-header').first().hasClass('is-active')).to.be.true;
    });

    it('should handler click event properly', function () {
        const spy = sinon.spy();
        const wrapper = mount((
            <Accordion onClick={spy}>
            <AccordionItem title="Rules" message="Some texts about message of rules" />
            <AccordionItem title="Algorithm" message="Some texts about algorithm" />
            </Accordion>
    ));

        wrapper.find('.ch-accordion-item-header').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
    });

    it('should show the properly content of the accordion once it\'s already expanded', function () {
        const wrapper = mount((
            <Accordion indexExpanded={0}>
            <AccordionItem title="Rules" message="Some texts about message of rules">
            <div>Some fun content</div>
        </AccordionItem>
        <AccordionItem title="Algorithm" message="Some texts about algorithm">
            <div>Other some fun content too</div>
        </AccordionItem>
        </Accordion>));

        expect(wrapper.find('.ch-accordion-item-body').first().hasClass('is-visible')).to.be.true;
    });

});