import React from "react";
import dynamic from "next/dynamic";

const PlayerCSR = dynamic(() => import("./ContentDetailsPlayer"), { ssr: false });
const ContentDetailsPlayer = props => <PlayerCSR {...props} />;

export default ContentDetailsPlayer;
