import React from "react";
import dynamic from "next/dynamic";

const ShareCSR = dynamic(() => import("./ContentDetailsInfoShare"), { ssr: false });
const ContentDetailsInfoShare = props => <ShareCSR {...props} />;

export default ContentDetailsInfoShare;
