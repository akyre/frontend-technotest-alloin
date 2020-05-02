import {LitElement, html, css} from "lit-element";

export class AppMessage extends LitElement {
    static get properties() {
        return {
            message: {
                type: Array
            }
        }
    }

    static get styles() {
        return css`
            .app-message {
                width: 100%;
                height: 100%;
            }
            
            .chat-tab {
                display: flex;
                flex-direction: column;
                width: 20%;
                height: 100%;
            }
            
            .container {
                width: 100%;
                height: 7%;
                display: flex;
                flex-direction: row;
            }
            
            .selected {
                background-color: #6689E6;
            }
            
            .profile-img {
                border-radius: 50%;
                height: 50px;
                width: 50px;
                margin-top: 2%;
                margin-left: 5%;
                margin-right: 5%;
            }
            
            .message-text {
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                color: white;
                height: 100%;
                margin-top: 6.5%;
            }
            
        `;
    }

    constructor() {
        super();
        this.message = [
            {
                img: "/manifest/fourcat.png",
                title: "Lucas ALLOIN",
                selected: false
            },
            {
                img: "/manifest/fourcat.png",
                title: "Alexandre FOURCAT",
                selected: true
            },
            {
                img: "/manifest/fourcat.png",
                title: "Nathan GUIGUI",
                selected: false
            }
        ]
    }

    onClick(number) {
        this.message = this.message.map((value) => {
            return {
                ...value,
                selected: false
            }
        })
        this.message[number].selected = true;
    }

    render() {

        const allMessageHTML = this.message.map((value, index) => {
            return html`
                <div @click="${() => this.onClick(index)}" class="container ${(value.selected) ? "selected" : ""}">
                    <img class="profile-img" src="${value.img}"/>
                    <div style="color: ${(value.selected) ? "white" : "#91AFFF"}" class="message-text ">${value.title}</div>
                </div>
            `
        })

        return html`
            <div>
                <div class="chat-tab">
                    ${allMessageHTML}
                </div>
            </div>
        `;
    }
}

customElements.define("app-message", AppMessage);
