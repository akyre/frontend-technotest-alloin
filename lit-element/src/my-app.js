import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import { LitElement, html } from "lit-element";
import { router } from "lit-element-router";

import "./app-link";
import "./app-main";
import "./app-footer";
import "./no-review";
import "./app-message"

class App extends router(LitElement) {
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            query: { type: Object },
            data: { type: Object }
        };
    }

    static get routes() {
        return [
            {
                name: "home",
                pattern: "",
                data: { title: "Home" }
            },
            {
                name: "footer",
                pattern: "footer"
            },
            {
                name: "review",
                pattern: "review"
            },
            {
                name: "message",
                pattern: "message"
            }
        ];
    }

    constructor() {
        super();
        this.route = "";
        this.params = {};
        this.query = {};
        this.data = {};
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        this.data = data;
        console.log(route, params, query, data);
    }

    render() {
        return html`
          <app-link href="/">Home</app-link>
          <app-link href="/footer">Footer</app-link>
          <app-link href="/review">Review</app-link>
          <app-link href="/message">Message</app-link>
    
          <app-main active-route=${this.route}>
            <h1 route="home">Home</h1>
            <h1 route="footer"><app-footer/></h1>
            <h1 route="review"><app-no-review title="Review"/></h1>
            <h1 route="message"><app-message/></h1>
          </app-main>
    `;
    }
}

customElements.define("my-app", App);
