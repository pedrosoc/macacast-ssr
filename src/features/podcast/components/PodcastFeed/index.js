import React, { useState, useEffect, Fragment } from "react";

import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";

import PodcastFeedSpotight from "./PodcastFeedSpotight";
import PodcastList from "../PodcastList";

import { isEmpty } from "@/utils/list";

const PodcastFeed = ({ t, podcasts }) => {
	if (isEmpty(podcasts))
		return <Fragment />

	const [first, second, ...otherEpisodes] = podcasts;
	return (
		<Fragment>
			<PodcastFeedSpotight
				title={t("podcasts.lastEpisodes")}
				first={first}
				second={second}
			/>

			<PodcastList
				title={t("podcasts.anotherEpisodes")}
				podcasts={otherEpisodes}
			/>
		</Fragment>
	);
}

PodcastFeed.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	podcasts: PropTypes.array
};

export default withTranslation("common")(PodcastFeed);
