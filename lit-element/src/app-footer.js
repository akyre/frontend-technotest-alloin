import {LitElement, html, css} from "lit-element";

export class AppFooter extends LitElement {
    static get styles() {
        return css`
            .footer {
                width: 100%;
                height: 283px;
                background: #262525 0% 0% no-repeat padding-box;
                display: flex;
                flex-direction: row;
            }
            
            img {
                width: 20%;
            }
            
            .link-container {
                width: 70%;
                display: flex;
                flex-direction: row;
            }
            
            .link-column {
                margin-left: 4%;
                margin-right: 2%;
                margin-top: 4%;
                height: 100%;
            }
            
            .category-font {
                font-family: Regular 16px/19px Roboto;
                color: #FFFFFF;
                font-size: 16px;
                margin-bottom: 20%;
            }
            
            .link-font {
                font: Regular 12px/14px Roboto;
                color: #888888;
                font-size: 12px;
                margin-top: 10%;
                margin-bottom: 10%;
            }
            
            .link-font:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        `;
    }

    render() {
        return html`
            <div class="footer">
                <div class="link-container">
                    <div class="link-column">
                        <div class="category-font">Products</div>
                        <div class="link-font">Code review</div>
                        <div class="link-font">Peer coding</div>
                        <div class="link-font">Benchmarking</div>
                        <div class="link-font">Analytics</div>
                    </div>
                    <div class="link-column">
                        <div class="category-font">Company</div>
                        <div class="link-font">About us</div>
                        <div class="link-font">Management</div>
                        <div class="link-font">Newsroom</div>
                        <div class="link-font">Contact us</div>
                    </div>
                    <div class="link-column">
                        <div class="category-font">Ressources</div>
                        <div class="link-font">Github</div>
                    </div>
                </div>
                <img src="/manifest/logo-footer.svg" alt="logo-footer"/>
            </div>
    `;
    }
}

customElements.define("app-footer", AppFooter);
