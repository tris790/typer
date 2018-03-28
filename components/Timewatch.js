import React, { Component } from "react";
import moment from "moment";
import "bulma/css/bulma.css";

export default class Timewatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: {},
            paused: true
        };
    }

    startTimer() {
        const update = () => {
            const duration = moment.duration(moment() - this.state.startTime);
            this.setState({ time: duration });
        };
        this.setState({
            startTime: moment(),
            interval: setInterval(update.bind(this), 100)
        });
    }

    stopTimer() {
        clearInterval(this.state.interval);
        this.setState({ time: undefined, interval: {} });
    }

    render() {
        const { time } = this.state;
        const timeDisplay = time && (
            <div>
                {time.minutes()}:{time.seconds()}
            </div>
        );
        return (
            <div>
                {timeDisplay}
                <div>
                    <button
                        className="button"
                        onClick={() => this.startTimer()}
                    >
                        start
                    </button>
                    <button className="button" onClick={() => this.stopTimer()}>
                        stop
                    </button>
                </div>
            </div>
        );
    }
}
