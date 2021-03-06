import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class ZilPayDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/favicon/apple-icon-192x192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="32x32" href="/favicon/apple-icon-32x32.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/favicon/apple-icon-96x96.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="16x16" href="/favicon/apple-icon-16x16.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="200x200" href="/favicon/ms-icon-200x200.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ZilPayDocument;
