export default { 
	home: {
		url: "/",
		title: t => t("header.home")
	},
	podcastDetails: {
		url: "/podcasts/:id",
		urlFor: id => `/podcasts/${id}`
	},
	podcasts: {
		url: "/podcasts",
		title: t => t("header.podcasts")
	},
	about: {
		url: "/sobre",
		title: t => t("header.about")
	}
};
