import React from "react";
import dynamic from "next/dynamic";

const PlayerCSR = dynamic(() => import("./PodcastDetailsPlayer"), { ssr: false });
const PodcastDetailsPlayer = props => <PlayerCSR {...props} />;

export default PodcastDetailsPlayer;
