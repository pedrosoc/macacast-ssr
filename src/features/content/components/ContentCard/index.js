import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";

import routes from "@/constants/routes";
import styles from "@/constants/styles";

import ContentCardInfo from "./ContentCardInfo";
import ContentCardImage from "./ContentCardImage";

const ContentCard = ({ className, post, spotlight }) => {
	if (!post)
		return <Fragment />

	return (
		<Link href={post.route}>
			<a className={className}>
				<ContentCardImage spotlight={spotlight} src={post.img} title={post.title} />
				<ContentCardInfo title={post.title} episode={post.episode} description={post.description} />
			</a>
		</Link>
	);
}

ContentCard.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object,
	spotlight: PropTypes.bool
};

export default styled(ContentCard)`
	width: 100%;
    margin-bottom: 50px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 5px;
    font-size: 14px;
    text-decoration: none;

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
    	width: ${props => props.spotlight ? "49%" : "215px"};
	}

	@media only screen and (min-width: ${styles.breakpoint_large}) {
    	width: ${props => props.spotlight ? "49%" : "370px"};
	}
`;
