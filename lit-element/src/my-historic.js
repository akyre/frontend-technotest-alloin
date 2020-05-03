import {LitElement, html, css} from "lit-element";

export class MyHistoric extends LitElement {
    static get styles() {
        return css`
            .container {
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 15px #00000029;
                border-radius: 8px;
                width: 75%;
                height: 456px;
                margin: 2.5% 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .marginContainer {
                height: 80%;
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .infoContainer {
                display: flex;
                flex-direction: column;
                width: 40%;
                justify-content: space-between;
            }
            
            .historicInfo {
                background: #6689E6 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 15px #00000029;
                border-radius: 8px;
                width: 100%;
                height: 40%;
                
            }
            
            .historicCommentary {
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 15px #00000029;
                border-radius: 8px;
                width: 100%;
                height: 50%;
            }
            
            .commentaryTitle {
                font-family: 'Roboto', sans-serif;
                font-style: italic;
                font-weight: 300;
                font-size: 30px;
                margin-top: 1%;
                margin-left: 3%;
                color: #262525;
            }
            
            .commentaryContent {
                font-family: 'Roboto', sans-serif;
                font-style: italic;
                font-weight: 300;
                font-size: 24px;
                margin-top: 1%;
                margin-left: 3%;
                color: #262525;
            }
            
            .historicExpertName {
                font-family: 'Roboto', sans-serif;
                font-style: italic;
                font-size: 30px;
                color: #FFFFFF;
                margin-top: 1%;
                margin-left: 3%;
            }
            
            .historicDate {
                display: flex;
                flex-direction: row;
            }
            
            .videoContainer {
                width: 50%;
            }
            
            .fullDate {
                font-family: 'Roboto', sans-serif;
                font-style: italic;
                font-weight: 100;
                font-size: 25px;
                margin-left: 3%;
                color: #FFFFFF;
            }
            
            .hours {
                font-family: 'Roboto', sans-serif;
                font-size: 25px;
                font-weight: 500;
                color: #FFFFFF;
                margin-left: 2%;
            }
            
            .expertBottom {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 7%;
                margin-left: 3%;
            }
            
            .starContainer {
                display: flex;
                width: 60%;
            }
            
            .nbrAvis {
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                font-weight: 100;
                color: #FFFFFF;
                margin-left: 7%;
            }
        `;
    }

    static get properties() {
        return {
            name: { type: String },
            workName: { type: String },
            nbrStar: { type: Number },
        };
    }

    constructor() {
        super();
    }

    render() {
        const star = [];
        for (let i = 0; i < this.nbrStar; i++) {
            star.push(html`<img width="25" height="23" src="/manifest/fill_star.svg"/>`)
        }
        for (let i = this.nbrStar; i < 5; i++) {
            star.push(html`<img width="25" height="23" src="/manifest/star_empty.svg"/>`)
        }
        console.log(this.nbrStar);

        return html`
            <div class="container">
                <div class="marginContainer">
                    <div class="infoContainer">
                        <div class="historicInfo">
                            <div class="historicExpertName">${this.name} - ${this.workName}</div>
                            <div class="historicDate">
                                <div class="fullDate">Mardi 12 août 2019</div>
                                <div class="hours">- 17h27</div>
                            </div>
                            <div class="expertBottom">
                                <div class="starContainer">
                                    ${star}
                                    <div class="nbrAvis">4 avis</div>
                                </div>
                                
                                <img width="49" height="35" src="/manifest/envelope.svg"/>
                            </div>
                        </div>
                        <div class="historicCommentary">
                            <div class="commentaryTitle">Commentaire :</div>
                            <div class="commentaryContent">J'espère pouvoir retravailler avec toi pour avoir un avis externe sur mon infrastructure.</div>
                        </div>
                    </div>
                    <div class="videoContainer">
                        <video width="578" controls>
                            <source src="/manifest/video.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("my-historic", MyHistoric);
