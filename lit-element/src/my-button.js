import { LitElement, html, css } from "lit-element";

export class MyButton extends LitElement {
    static get properties() {
        return {
            color: { type: String },
            text: { type: String }
        };
    }
    static get styles() {
        return css`
            .button-container {
                background: padding-box;
                box-shadow: 0px 0px 15px #00000029;
                border-radius: 24px;
                width: 393px;
                height: 89px;
                color: #FFFFFF;
                display: flex;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `;
    }

    constructor() {
        super();
        this.color = "";
        this.text = "";
    }

    render() {
        return html`
            <div class="button-container" style="background-color: ${this.color}">
                ${this.text}
            </div>
        `;
    }
}

customElements.define("my-button", MyButton);
