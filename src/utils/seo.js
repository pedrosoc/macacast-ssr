import urls from "@/constants/urls";

const createSitemap = podcasts => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${urls.website.baseUrl}</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/podcasts</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/sobre</loc>
        </url>
        ${
            podcasts.map(({ episode }) => `
                <url>
                    <loc>${urls.website.baseUrl}/podcasts/${episode}</loc>
                </url>
            `).join("")
        }
    </urlset>`;

const createRobots = () => `User-agent: *
Sitemap: ${urls.website.baseUrl}/sitemap.xml
`;

export { createSitemap, createRobots };