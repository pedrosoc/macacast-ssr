import React from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

const CompleteMetaHeader = ({ t, meta, podcast }) => (
	<Head>
        <title>{meta.title(t, podcast)}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" type="image/png" href={meta.icon} />
        <link rel="shortcut icon" sizes="192x192" href={meta.icon} />
        <link rel="apple-touch-icon" href={meta.icon} />

        <meta name="description" content={meta.description(t, podcast)} />
        <meta name="keywords" content={meta.keywords(t, podcast)} />

        <meta property="og:title" content={meta.socialTitle(t, podcast) ? meta.socialTitle(t, podcast) : meta.title(t, podcast)} />
        <meta property="og:url" content={meta.url(podcast)} />
        <meta property="og:description" content={meta.description(t, podcast)} />
        <meta property="og:image" content={meta.image(podcast)} />
        <meta property="og:image:alt" content={meta.socialTitle(t, podcast) ? meta.socialTitle(t, podcast) : meta.title(t, podcast)} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Macacast" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@macacastaapp" />
        <meta name="twitter:creator" content="@macacastaapp" />
        <meta name="twitter:title" content={meta.socialTitle(t, podcast) ? meta.socialTitle(t, podcast) : meta.title(t, podcast)} />
        <meta name="twitter:description" content={meta.description(t, podcast)} />
        <meta name="twitter:image" content={meta.image(podcast)} />
    </Head>
);

CompleteMetaHeader.propTypes = {
    t: PropTypes.func,
    meta: PropTypes.object,
    podcast: PropTypes.object,
};

export default withTranslation("common")(CompleteMetaHeader);
