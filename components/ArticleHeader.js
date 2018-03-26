import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class ArticleHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="title">{this.props.title}</h2>
                <hr />
            </React.Fragment>
        );
    }
}
