import { BindChanged } from '../src/bind-changed';
import {fixture, html, expect} from '@open-wc/testing';

describe('BindChanged', () => {

    it('should change the text format to date format', async () => {
        const el = await fixture(html`<bind-changed></bind-changed>`);
        el.getDate();
        
        expect(el.numberValue).to.be.equal(el.getDate());
    });
    
});