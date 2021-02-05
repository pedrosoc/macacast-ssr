import React from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

const CompleteMetaHeader = ({ t, meta }) => (
	<Head>
        <title>{meta.title(t)}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        <meta name="robots" content="noindex" />

        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />

        <link rel="icon" sizes="16x16 32x32 64x64" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="196x196" href="/static/favicons/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/static/favicons/favicon-160.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/static/favicons/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16.png" />

        <link rel="apple-touch-icon" href="/static/favicons/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/favicon-180.png" />

        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/static/favicons/favicon-144.png" />
        <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
    </Head>
);

CompleteMetaHeader.propTypes = {
    t: PropTypes.func,
    meta: PropTypes.object
};

export default withTranslation("common")(CompleteMetaHeader);
