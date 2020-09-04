import env from "@/constants/env";

const createSitemap = podcasts => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${env.baseUrl}</loc>
        </url>
        <url>
            <loc>${env.baseUrl}/podcasts</loc>
        </url>
        <url>
            <loc>${env.baseUrl}/sobre</loc>
        </url>
        ${
            podcasts.map(({ episode }) => `
                <url>
                    <loc>${env.baseUrl}/podcasts/${episode}</loc>
                </url>
            `).join("")
        }
    </urlset>`;

const createRobots = () => `User-agent: *
Sitemap: ${env.baseUrl}/sitemap.xml
`;

export { createSitemap, createRobots };