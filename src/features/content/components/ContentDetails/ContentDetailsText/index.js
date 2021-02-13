import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import SocialShare from "@/components/SocialShare";

import styles from "@/constants/styles";
import urls from "@/constants/urls";

import { formatDate } from "@/utils/date";

const ContentDetailsText = ({ className, post }) => {
    const time = post.publicationTime ? post.publicationTime : post.created;

    return (
        <div className={className}>
            <div className="titleContainer">
                <h1>{post.title}</h1>
                <span>{post.description}</span>
                <div className="extraContainer">
                    <div className="authorContainer">
                        <span className="author">Por {post.author}</span>
                        <div>Publicado em {formatDate(new Date(time))}</div>
                    </div>
                    <div className="shareContainer">
                        <SocialShare url={`${urls.website.baseUrl}${post.route}`} title={post.title} iconSize={36} />
                    </div>
                </div>
            </div>
            <hr />
            <div className="text" dangerouslySetInnerHTML={{__html: post.text}}></div>
        </div>
    );
};

ContentDetailsText.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object
};

export default styled(ContentDetailsText)`
    & > .titleContainer {
        display: flex;
        flex-direction: column;
        
        > * {
            margin-bottom: 30px;
        }

        .extraContainer {
            display: flex;
            flex-direction: column;

            @media only screen and (min-width: ${styles.breakpoint_medium}) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            .authorContainer {
                font-size: 16px;

                .author {
                    font-weight: bold;
                }
            
                .city {
                    font-weight: normal;
                }
            }

            .shareContainer {
                margin-top: 30px;

                @media only screen and (min-width: ${styles.breakpoint_medium}) {
                    margin-top: 0;
                }

                > * {
                    margin-right: 5px;

                    @media only screen and (min-width: ${styles.breakpoint_medium}) {
                        margin-left: 5px;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    & > hr {
        margin-bottom: 60px;
        border-top: 1px solid #fff;
    }

    & > .text {

        blockquote {
            margin-inline-start: 0;
            margin-inline-end: 0;
            padding-left: 20px;
            border-left: 5px solid #eaeaea;
        }

        p {
            margin: 0;
            line-height: 1.4;
        }

        img {
            max-width: 100%;
        }

        img ~ s {
            display: block;
            position: relative;
            text-decoration: none;
            top: -5px;
            padding: 10px;
            font-size: 14px;
            background-color: #eaeaea;
        }

    }
`;
