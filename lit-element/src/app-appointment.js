import {LitElement, html, css} from "lit-element";
import moment from "moment";


export class AppAppointment extends LitElement {
    static get properties() {
        return {
            selectedMonth: {
                type: Number
            },
            selectedDay: {
                type: Number
            },
            selectedHour: {
                type: Number
            }
        }
    }

    static get styles() {
        return css`
             .container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 40%;
                height: 40%;
             }
             
             .calendar {
                width: 55%;
                height: auto;
                background: #6689E6 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 8px;
             }
             
             .hour-select {
                width: 20%;
                height: auto;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
             }
             
             .month-line {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
                width: 100%;
                justify-content: space-around;
             }
             
             .week-line {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
                width: 100%;
             }
             
             .month-box {
                font-family: 'Roboto', sans-serif;
                font-size: 35px;
                color: white;
                font-weight: 300;
                font-style: italic;
                cursor: pointer;
             }
             
             .day-box {
                font-family: 'Roboto', sans-serif;
                font-size: 35px;
                color: white;
                font-weight: 300;
                font-style: italic;
                cursor: pointer;
                margin: 0 2%;
             }
             
             .hour-box {
                font-family: 'Roboto', sans-serif;
                font-size: 35px;
                color: black;
                font-weight: 300;
                font-style: italic;
                cursor: pointer;
                margin: 2% 0;
             }
             
             .month-box-selected {
                color: #FF1053;
             }
             
             .week {
                margin-top: 10%;
                margin-left: 3%;
             }
        `;
    }

    constructor() {
        super();
        this.selectedMonth = Number(moment().format("MM")) - 1;
        this.selectedDay = Number(moment().format("DD")) - 1;
        this.selectedHour = 0;
    }

    onClickMonth(number) {
        if (number === this.selectedMonth)
            return;
        this.selectedMonth = number
    }

    onClickDay(number) {
        if (number === this.selectedDay)
            return;
        this.selectedDay = number
    }

    onClickHour(number) {
        if (number === this.selectedHour)
            return;
        this.selectedHour = number
    }

    render() {

        const numberOfDayInMonth = moment(`${moment().format("YYYY")}-${((this.selectedMonth <= 9) ? "0" : "") + (this.selectedMonth + 1)}`).daysInMonth()
        const dayArray = [];
        for (let i = 0; i < (Math.ceil(numberOfDayInMonth / 7)); i++) {
            const cursor = i * 7;
            const dayInWeek = [];
            for (let y = cursor; y < (cursor + 7) && y < numberOfDayInMonth; y++) {
                dayInWeek.push(y)
            }
            dayArray.push(dayInWeek)
        }

        const weekHtml = dayArray.map((week) => {
            return html`
                <div class="week-line">
                    ${week.map((day) => {
                        return html`
                            <div @click="${() => this.onClickDay(day)}" class="day-box ${(this.selectedDay === day) ? "month-box-selected" : ""}">
                                ${((day < 9) ? "0": "") + (day + 1)}
                            </div>
                        `
                    })}
                </div>
            `
        })

        const months = [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D",
        ]

        const hours = [
            "11h00",
            "12h00",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00",
        ]

        const monthToDisplay = months.map((month, index) => {
            return html`
                <div @click="${() => this.onClickMonth(index)}" class="month-box ${(this.selectedMonth === index) ? "month-box-selected" : ""}">
                    ${month}
                </div>
             `
        })

        return html`
            <div class="container">
                <div class="calendar">
                    <div class="month-line">
                        ${monthToDisplay}
                    </div>
                    <div class="week">
                        ${weekHtml}
                    </div>
                </div>
                <div class="hour-select">
                    ${hours.map((hour, index) => {
                        return html`
                            <div @click="${() => this.onClickHour(index)}" class="hour-box ${(this.selectedHour === index) ? "month-box-selected" : ""}">
                                ${hour}
                            </div>
                        `    
                    })}
                </div>
            </div>
        `;
    }
}

customElements.define("app-appointment", AppAppointment);
