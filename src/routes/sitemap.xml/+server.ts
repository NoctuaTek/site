import { text } from "@sveltejs/kit";


export async function GET() {

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://noctuatek.com/</loc>
  <lastmod>2025-06-18T20:29:57+00:00</lastmod>
</url>


</urlset>`;

    return text(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
