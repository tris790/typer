import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class TypingZone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input
                    className="input"
                    type="text"
                    onChange={this.props.onTyping}
                    value={this.props.text}
                    autoFocus
                />
            </div>
        );
    }
}
