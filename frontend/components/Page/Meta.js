import Head from 'next/head';

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Weird Flex</title>
    </Head>
);

export default Meta;
