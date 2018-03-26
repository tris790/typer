import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import TypingZone from "../components/TypingZone";
import TextContainer from "../components/TextContainer";
import ArticleHeader from "../components/ArticleHeader";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps() {
        const article = await fetch("http://localhost:3000/random").then(r =>
            r.json()
        );
        return { article };
    }

    render() {
        return (
            <Layout>
                <ArticleHeader title={this.props.article.title} />
                <TextContainer randomArticle={this.props.article.content} />
            </Layout>
        );
    }
}
