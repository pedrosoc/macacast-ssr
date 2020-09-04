import React, { Fragment } from "react";
import Head from "next/head";

import PropTypes from "prop-types";
import styled from "styled-components";

import api from "@api";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import containerTypes from "@/constants/containerTypes";
import { withTranslation } from "@i18n";

import env from "@/constants/env";

const About = ({ className, t, social }) => {
	return (
		<Fragment>
			<Head>
				<title>Sobre | Macacast</title>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
			
				<link rel="shortcut icon" type="image/png" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="shortcut icon" sizes="192x192" href={`${env.baseUrl}/static/images/favicon.png`} />
				<link rel="apple-touch-icon" href={`${env.baseUrl}/static/images/favicon.png`} />
				
				<meta name="description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta name="keywords" content="Ponte Preta, Podcast, Campinas, Ponte, Macaca, Maior do Interior, Entrevista, Resenha" />

				<meta property="og:title" content="Sobre | Macacast" />
				<meta property="og:url" content={`${env.baseUrl}/sobre`} />
				<meta property="og:description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta property="og:image" content={`${env.baseUrl}/static/images/macacast_macaco.png`} />
				<meta property="og:locale" content="pt_BR" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@macacastaapp" />
				<meta name="twitter:creator" content="@macacastaapp" />
				<meta name="twitter:title" content="Sobre | Macacast" />
				<meta name="twitter:description" content="O podcast da maior do Interior. Pré-jogo, Pós-jogo, Resenhas, Entrevistas e muito mais da Ponte Preta, a nossa Macaca Querida de Campinas." />
				<meta name="twitter:image" content={`${env.baseUrl}/static/images/macacast_macaco.png`} />
			</Head>

            <Header social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>{t("about.title")}</h5>
						<p>Nascido em 2019, o projeto de um podcast criado por pontepretanos para pontepretanos tem um objetivo primordial claro: resgatar o interesse dos torcedores e torcedoras pelo clube, com informações quentes, com opiniões isentas e contundentes, com histórias sobre o seu passado e reforçar a identidade da Ponte Preta. O dia a dia do clube, pós e pré-jogo, entrevistas exclusivas com jogadores que marcaram seu nome em nossa história e até bastidores políticos. O Macacast é a voz do pontepretano das arquibancadas na internet.</p>
					</div>
					<div className="second">
						<h4>Ajude o Macacast</h4>
						<p>Se você curte o nosso trabalho, não deixe de nos prestigiar e ajude a melhorar ainda mais a qualidade do seu podcast preferido e a sua experiência como ouvinte. Fazemos o Macacast com muita paixão e, com as doações, podemos fazer ainda melhor e nos dedicar ainda mais ao projeto. O valor será investido na melhoria de materiais, como a compra de microfones para os membros, pagamento de servidores, gravações, e manutenção de outras estruturas.</p>
						<p className="list">
							<span>Você pode fazer a sua doação de duas formas:</span>
							<a href="https://apoia.se/macacast" target="_blank" rel="noopener noreferrer">
								<span className="arrow">-</span>
								<span className="underline">Mensalmente:</span>
								<span className="link">apoia.se/macacast</span>
							</a>
							<a href="https://apoia.se/ajudeomacacast" target="_blank" rel="noopener noreferrer">
								<span className="arrow">-</span>
								<span className="underline">Avulso:</span>
								<span className="link">apoia.se/ajudeomacacast</span>
							</a>
						</p>
						<p>Se você deseja ser patrocinador oficial do projeto, entre em contato conosco por meio de nossas plataformas digitais. Temos certeza de que, com a audiência que temos, a parceria renderá muitos frutos para sua empresa.</p>
					</div>
				</div>
			</Section>

			<Footer />
		</Fragment>
	);
};

About.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	social: PropTypes.array
}

export const getStaticProps = async () => {
	const social = await api.me.data.getSocial();
	return { props: { social }, revalidate: 600 };
}

export default withTranslation("common")(styled(About)`
	& h5 {
		font-size: 35px;
	}

	& .second {
		margin-top: 50px;
	}

	& p.list {
		display: flex;
		flex-direction: column;

		& > a {
			margin-top: 5px;
		}
	}

	& a {
		color: #111;

		& span {
			margin-right: 10px;
		
			&.link {
				color: rgba(0,0,0,.68);
				border-bottom: solid 1px rgba(0,0,0,.68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}
`);
