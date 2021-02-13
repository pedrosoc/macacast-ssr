import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import SocialIcons from "@/components/SocialIcons";
import social from "@/features/me/constants/social";

const ContentDetailsInfoSocial = ({ t, post }) => {
    const socialList = social.map(s => ({
        name: s.name,
        url: post[`${s.name}_url`]
    })).filter(s => !!s.url);
    
    return (
		<SocialIcons
			uuid={post.id}
			title={t("contentPost.avaiableFor")}
			size="50"
			distance="10px"
			fill="#ffffff"
			socialList={socialList}
		/>
	);
};

ContentDetailsInfoSocial.propTypes = {
	t: PropTypes.func,
	post: PropTypes.object
};

export default withTranslation("common")(ContentDetailsInfoSocial);
