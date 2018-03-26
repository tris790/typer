import React, { Component } from "react";
import Head from "next/head";

export default props => (
    <React.Fragment>
        <Head>
            <meta name="description" content="Practice your typing" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <link rel="manifest" href="/static/manifest.webmanifest" />

            <meta name="theme-color" content="#ff6600" />
            <link rel="shortcut icon" href="/static/icon.png" />
            <link rel="apple-touch-icon" href="/static/icon.png" />
            <meta name="apple-mobile-web-app-title" content="Typer" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />

            <link rel="stylesheet" href="/_next/static/style.css" />
            <title>Typer</title>
        </Head>
        <div className="container">{props.children}</div>
    </React.Fragment>
);
