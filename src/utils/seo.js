import urls from "@/constants/urls";

const createSitemap = contents => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${urls.website.baseUrl}</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/sobre</loc>
        </url>
        ${
            contents.map(c => 
                c.data.map(d => ` 
                    <url>
                        <loc>${urls.website.baseUrl}${c.baseRoute}/${d.id}</loc>
                    </url>
                `)
            ).flat().join("")
        }
    </urlset>`;

const createRobots = () => `User-agent: *
Sitemap: ${urls.website.baseUrl}/sitemap.xml
`;

export { createSitemap, createRobots };