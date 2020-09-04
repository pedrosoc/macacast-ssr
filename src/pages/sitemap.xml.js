import api from "@api";
import { createSitemap } from "@/utils/seo";

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res }) => {
    const podcasts = await api.podcast.data.getAll();
    
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(podcasts));
    res.end();
    
    return { namespacesRequired: [] };
}

export default Sitemap;
