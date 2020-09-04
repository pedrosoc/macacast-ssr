import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "@/constants/styles";

import PodcastDetailsInfo from "./PodcastDetailsInfo";
import PodcastDetailsPlayer from "./PodcastDetailsPlayer";

const Podcast = ({ className, podcast }) => {
	if (!podcast.id)
		return <Fragment />

	return (
		<div className={className}>
			<PodcastDetailsInfo podcast={podcast} />
			<PodcastDetailsPlayer url={podcast.player} />
		</div>
	);
};

Podcast.propTypes = {
	className: PropTypes.string,
	podcast: PropTypes.object
};

export default styled(Podcast)`
	display: flex;
	flex-direction: column;
	color: #fff;

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
