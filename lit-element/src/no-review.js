import { LitElement, html, css } from "lit-element";

import "./my-button"

export class NoReview extends LitElement {
    static get properties() {
        return {
            title: { type: String }
        };
    }
    static get styles() {
        return css`
          .title {
            font-family: 'Roboto', sans-serif;
            letter-spacing: 0px;
            color: #91AFFF;
            font-size: 61px;
            font-weight: 300;
          }
          
          .container {
            margin: 1%;
          }
          
          .appointement-container {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            width: 100%;
            height: 652px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .noapointment-text {
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            font-size: 52px;
            letter-spacing: 0px;
            color: #91AFFF;
            width: 30%;
          }
          
          .noapointbutton {
            margin-top: 2%;
            height: 13%;
            width: 20%;
          }
    `;
    }

    constructor() {
        super();
        this.title = "Default Title";
    }

    render() {
        return html`
            <div class="container">
                <div class="title">${this.title}</div>
                <div class="appointement-container">
                    <div class="noapointment-text">It looks like you still don’t have an appointment with our experts</div>
                    <div class="noapointbutton">
                        <my-button text="Let’s find one…" color="#FF1053"/>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-no-review", NoReview);
