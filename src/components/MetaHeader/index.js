import React from "react";

import PropTypes from "prop-types";

import SimpleMetaHeader from "./SimpleMetaHeader";
import CompleteMetaHeader from "./CompleteMetaHeader";

const MetaHeader = ({ t, meta, podcast }) =>
    meta.simpleMap
        ? <SimpleMetaHeader meta={meta} />
        : <CompleteMetaHeader meta={meta} podcast={podcast} />
;

MetaHeader.propTypes = {
    t: PropTypes.func,
    meta: PropTypes.object,
    podcast: PropTypes.object,
};

export default MetaHeader;
