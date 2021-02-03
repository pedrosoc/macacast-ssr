import React from "react";
import PropTypes from "prop-types";

import contentsConfig from "@/constants/contentsConfig";
import ContentList from "@/features/content/components/ContentList";

import parser from "../../utils/parser";

const FullContentResume = ({ contents }) => {
    return contents.map(c => (
        <ContentList
            key={c.id}
            title={c.name}
            posts={parser.limitLastPosts(c.data, contentsConfig.limit, c.id)}
            link={c.baseRoute}
        />
    ));
};

FullContentResume.propTypes = {
	t: PropTypes.func,
	contents: PropTypes.array,
};

export default FullContentResume;
