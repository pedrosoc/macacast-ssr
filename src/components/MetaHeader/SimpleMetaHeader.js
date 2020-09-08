import React from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

const CompleteMetaHeader = ({ t, meta }) => (
	<Head>
        <title>{meta.title(t)}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        <meta name="robots" content="noindex" />

        <link rel="shortcut icon" type="image/png" href={meta.icon} />
        <link rel="shortcut icon" sizes="192x192" href={meta.icon} />
        <link rel="apple-touch-icon" href={meta.icon} />
    </Head>
);

CompleteMetaHeader.propTypes = {
    t: PropTypes.func,
    meta: PropTypes.object
};

export default withTranslation("common")(CompleteMetaHeader);
