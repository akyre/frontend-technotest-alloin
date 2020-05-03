import {LitElement, html, css} from "lit-element";

import "./my-historic"

export class AppHistoric extends LitElement {
    static get styles() {
        return css`
            .container {
                width: 100%;
            }
            
            .title {
                font-family: 'Roboto', sans-serif;
                color: #91AFFF;
                font-size: 61px;
                font-weight: 300;
            }
        `;
    }

    render() {
        return html`
            <div class="container">
                <div class="title">Historic</div>
                <my-historic name="Emilie" workName="Architecte Cloud" nbrStar="5" />
                <my-historic name="Nathan" workName="Architecte JS" nbrStar="4" />
                <my-historic name="Alexandre" workName="Architecte Wayland" nbrStar="1" />
            </div>
        `;
    }
}

customElements.define("app-historic", AppHistoric);
