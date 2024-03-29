import clip from 'text-clipper';
const fetch = require('node-fetch');

export async function get(req, res, next) {

    const zenodo = await fetch('https://zenodo.org/api/records/?page=1&size=10&communities=dmwr&sort=mostrecent');
    const allEntries = await zenodo.json();
    let entries = allEntries.hits.hits;
    /*entries = entries.map(e => {
        e.metadata.description = clip(e.metadata.description, 300, {html: true, maxLines: 3})
        return e
    });*/
    //
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    const start = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
\t<channel>
\t\t<title>Zenodo Articles</title>
\t\t<description>shows the 10 latest zenodo articles from zenodo.org</description>
\t\t<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
\t\t<link>https://zenodo-feed.netlify.app</link>
\t\t<image>
\t\t\t<link>https://zenodo-feed.netlify.app</link>
\t\t\t<url>https://www.google.com/s2/favicons?domain=https://zenodo-feed.netlify.app</url>
\t\t\t<title>https://zenodo-feed.netlify.app</title>
\t\t</image>
`;

    const end = `</channel>
                </rss>`;

    let items = entries.map(e => {
        return `<item>
            <title>${e.metadata.title}</title>
            <link>${e.links.latest_html}</link>
            <description><![CDATA[${clip(e.metadata.description, 300, {html: true, maxLines: 3})}]]></description>
            <dc:creator>${e.metadata.creators.map(e => e.name).join(', ')}</dc:creator>
            <pubDate>${e.metadata.publication_date}</pubDate>
            <guid>${e.links.latest_html}</guid>
        </item>`;
    })

    res.setHeader('Content-Type', 'text/xml; charset=UTF-8');
    res.end(start + items.join() + end);

}