import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon
} from "react-share";

const SocialShare = ({ url, title, iconSize }) => {
	if (!url) {
		return <Fragment />
	}
	
	return (
		<Fragment>
			<FacebookShareButton url={url} quote={`${title} - @macacastpodcast`}>
                <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
            <FacebookMessengerShareButton appId={"612818166073904"} url={url}>
                <FacebookMessengerIcon size={iconSize} round />
            </FacebookMessengerShareButton>
            <TelegramShareButton url={url} title={title}>
                <TelegramIcon size={iconSize} round />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={`${title} - @macacastaapp`} related={["@macacastaapp"]}>
                <TwitterIcon size={iconSize} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>
		</Fragment>
	);
};

SocialShare.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string,
	title: PropTypes.string
};

export default SocialShare;
