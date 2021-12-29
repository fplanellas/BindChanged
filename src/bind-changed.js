import { LitElement, html, css } from 'lit-element';

export class BindChanged extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                font-family: sans-serif;
            }
            div {
                display: flex;
                align-items: center; 
            }

            span {
                border: 1px solid darkgray;
                background: #fff;
                border-radius: 8px;
                padding: 3px 12px;
                margin-right: 15px;
            }

            button {
                border: 1px solid lightsalmon;
                background: #fff;
                border-radius: 8px;
                padding: 4px 12px;
                cursor: pointer;
            }

            button:hover{
                background: #eee;
                box-shadow: 2px 2px #ccc;
                font-weight: bold;
            }
        `;
    }

    static get properties() {
        return {
        numberValue: { type: String },
        buttonValue: { type: String }
        };
    }

    constructor() {
        super();
        this.buttonValue = 'click here to change numberValue to date format';
        this.numberValue = '343434';
    }

    render() {
        return html`
            <h1>Bind changed</h1>
            <div>
                <span>${this.numberValue}</span>
                <button @click = "${this.getDate}" >${this.buttonValue}</button>
            </div>
        `;
    }

    getDate(e) {
        let date = new Date(parseInt(this.numberValue));
        let changeValue = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        return this.numberValue = changeValue;
    }
}
customElements.define('bind-changed', BindChanged);