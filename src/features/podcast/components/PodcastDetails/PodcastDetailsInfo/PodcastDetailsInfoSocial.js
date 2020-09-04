import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import SocialIcons from "@/components/SocialIcons";

const PodcastDetailsInfoSocial = ({ t, uuid, socialList }) => {
	return (
		<SocialIcons
			uuid={uuid}
			title={t("podcast.avaiableFor")}
			size="50"
			distance="20px"
			fill="#ffffff"
			socialList={socialList}
		/>
	);
};

PodcastDetailsInfoSocial.propTypes = {
	t: PropTypes.func,
	uuid: PropTypes.string,
	socialList: PropTypes.array
};

export default withTranslation("common")(PodcastDetailsInfoSocial);
