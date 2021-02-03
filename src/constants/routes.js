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
	content: {
		meta: {
			title: (t, opt) => t("content.meta.title", opt),
			description: (t, opt) => t("content.meta.description", opt),
			keywords: (t, opt) => t("content.meta.keywords", opt),
			url: opt => `${urls.website.baseUrl}${opt.baseRoute}`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	contentPost: {
		meta: {
			title: (t, opt) => t("contentPost.meta.title", opt),
			description: (t, opt) => t("contentPost.meta.description", opt),
			keywords: t => t("contentPost.meta.keywords"),
			url: opt => `${urls.website.baseUrl}${opt.route}`,
			image: opt => opt.img,
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
