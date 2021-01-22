import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import ContentDetailsInfoBiographyImage from "./ContentDetailsInfoBiographyImage";
import ContentDetailsInfoBiographyData from "./ContentDetailsInfoBiographyData";

const ContentDetailsInfo = ({ className, profile }) => {
	if (!profile) 
		return <div className={className} /> 

	return (
		<div className={className}>
			<h4> Biografia: </h4>

			<div className="biografia">
				<ContentDetailsInfoBiographyImage url={profile.photo}/>
				<ContentDetailsInfoBiographyData biography={profile.biography} />
			</div>

		</div>
	);
};

ContentDetailsInfo.propTypes = {
	className: PropTypes.string,
	profile: PropTypes.object
};

export default styled(ContentDetailsInfo)`
	margin: 40px 0;

	& > h4 {
        margin-bottom: 20px;
    } 

    & > div {
        display: flex;
        align-items: center;
    } 
`;
