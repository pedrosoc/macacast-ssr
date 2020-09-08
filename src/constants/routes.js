import urls from "./urls";
import images from "./images";

export default { 
	home: {
		url: "/",
		title: t => t("header.home"),
		meta: {
			title: t => t("home.meta.title"),
			description: t => t("home.meta.description"),
			keywords: t => t("home.meta.keywords"),
			socialTitle: () => "",
			url: () => urls.website.baseUrl,
			image: () => images.social,
			icon: images.favicon
		}
	},
	about: {
		url: "/sobre",
		title: t => t("header.about"),
		meta: {
			title: t => t("about.meta.title"),
			description: t => t("about.meta.description"),
			keywords: t => t("about.meta.keywords"),
			socialTitle: () => "",
			url: () => `${urls.website.baseUrl}/sobre`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	podcasts: {
		url: "/podcasts",
		title: t => t("header.podcasts"),
		meta: {
			title: t => t("podcasts.meta.title"),
			description: t => t("podcasts.meta.description"),
			keywords: t => t("podcasts.meta.keywords"),
			socialTitle: () => "",
			url: () => `${urls.website.baseUrl}/podcasts`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	podcastDetails: {
		url: "/podcasts/:id",
		urlFor: id => `/podcasts/${id}`,
		meta: {
			title: (t, opt) => t("podcast.meta.title", opt),
			description: (t, opt) => t("podcast.meta.description", opt),
			keywords: t => t("podcast.meta.keywords"),
			socialTitle: (t, opt) => t("podcast.meta.socialTitle", opt),
			url: podcast => `${urls.website.baseUrl}/podcasts/${podcast.episode}`,
			image: podcast => podcast.img,
			icon: images.favicon
		}
	},
	error: {
		meta: {
			title: t => t("error.meta.title"),
			icon: images.favicon,
			simpleMap: true,
		}
	}
};
