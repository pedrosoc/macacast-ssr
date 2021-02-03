import api from "@api";
import { createSitemap } from "@/utils/seo";

import contentsStatus from "@/constants/contentsStatus";

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res }) => {
    const contents = await api.content.data.getAllByStatus(contentsStatus.published)

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(contents));
    res.end();
    
    return { namespacesRequired: [] };
}

export default Sitemap;
