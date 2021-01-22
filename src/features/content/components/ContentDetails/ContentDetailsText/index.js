import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "@/constants/styles";

const ContentDetailsText = ({ className, post }) => {
    console.log(post);

    const publishedDate = new Date(post.created);

	return (
        <div className={className}>
            <div className="titleContainer">
                <h1>{post.title}</h1>
                <span>{post.description}</span>
                <div className="authorContainer">
                    <span className="author">Por {post.author}</span>  - Campinas
                    <div>Publicado em {publishedDate.toLocaleDateString('pt-BR')} - {publishedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
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

        .authorContainer {
            font-size: 16px;

            .author {
                font-weight: bold;
            }
        
            .city {
                font-weight: normal;
            }
        }
    }

    & > hr {
        margin-bottom: 30px;
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
