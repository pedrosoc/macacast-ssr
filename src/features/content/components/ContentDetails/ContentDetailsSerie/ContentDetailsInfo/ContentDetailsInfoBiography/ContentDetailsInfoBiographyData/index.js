import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import ContentDetailsInfoBiographyDataItem from "./ContentDetailsInfoBiographyDataItem";

const ContentDetailsInfo = ({ className, biography }) => {
	return (
		<div className={className}>
			{
				biography.map(b => <ContentDetailsInfoBiographyDataItem
					key={b.name}
					name={b.name}
					value={b.value}
				/>)
			}
		</div>
	);
};

ContentDetailsInfo.propTypes = {
	className: PropTypes.string,
	biography: PropTypes.array
};

export default styled(ContentDetailsInfo)`
    margin-left: 20px;
`;
