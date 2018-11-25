import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Theme Region" />
          <meta name="description" content="" />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/my-resume/css/magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/my-resume/css/animate.css"
          />

          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/my-resume/css/main.css"
          />

          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/my-resume/css/responsive.css"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Sacramento"
            rel="stylesheet"
          />

          <link
            rel="icon"
            href="https://storage.googleapis.com/my-resume/images/ico/favicon.ico"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="https://storage.googleapis.com/my-resume/images/ico/apple-touch-icon-144-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="https://storage.googleapis.com/my-resume/images/ico/apple-touch-icon-114-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="https://storage.googleapis.com/my-resume/images/ico/apple-touch-icon-72-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="https://storage.googleapis.com/my-resume/images/ico/apple-touch-icon-57-precomposed.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script src="https://storage.googleapis.com/my-resume/js/jquery.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/bootstrap.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/waypoints.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/counterup.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/inview.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/easypiechart.js" />
          <script src="https://storage.googleapis.com/my-resume/js/magnific-popup.min.js" />
          <script src="https://storage.googleapis.com/my-resume/js/main.js" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
