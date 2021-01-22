import React from "react";

import PropTypes from "prop-types";

import SimpleMetaHeader from "./SimpleMetaHeader";
import CompleteMetaHeader from "./CompleteMetaHeader";

const MetaHeader = ({ t, meta, content }) =>
    meta.simpleMap
        ? <SimpleMetaHeader meta={meta} />
        : <CompleteMetaHeader meta={meta} content={content} />
;

MetaHeader.propTypes = {
    t: PropTypes.func,
    meta: PropTypes.object,
    content: PropTypes.object,
};

export default MetaHeader;
