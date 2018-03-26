import React, { Component } from "react";

export default class Statistics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const wordCount = this.props.words && this.props.words.length;
        const errorCount = this.props.errors && this.props.errors.length;
        return (
            <div>
                <div>
                    Word count: <span>{wordCount}</span>
                </div>
                <div>
                    Error count: <span>{errorCount}</span>
                </div>

                {/* <ul>
                    {wordCount &&
                        wordCount.map((word, i) => (
                            <li key={i} style={{ color: "green" }}>
                                {word}
                            </li>
                        ))}
                </ul> */}
            </div>
        );
    }
}
