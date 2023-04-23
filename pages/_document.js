import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="max-h-screen">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/brand/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;600&family=Open+Sans:ital,wght@0,300;0,400;0,500;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-blueGray-700 antialiased max-h-screen">
          <div id="page-transition" className="relative"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
