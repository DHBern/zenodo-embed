import clip from 'text-clipper';

export async function get(req, res, next) {
    res.setHeader('Content-Type', 'text/xml; charset=UTF-8');
    res.end("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<rss xmlns:media=\"http://search.yahoo.com/mrss/\" version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n" +
        "\t<channel>\n" +
        "\t\t<title>https://quizzical-saha-7bc91b.netlify.app</title>\n" +
        "\t\t<description>https://quizzical-saha-7bc91b.netlify.app</description>\n" +
        "\t\t<pubDate>Wed, 17 Mar 2021 16:34:25 +0000</pubDate>\n" +
        "\t\t<generator>FetchRSS</generator>\n" +
        "\t\t<link>https://quizzical-saha-7bc91b.netlify.app/</link>\n" +
        "\t\t<image>\n" +
        "\t\t\t<link>https://quizzical-saha-7bc91b.netlify.app/</link>\n" +
        "\t\t\t<url>https://www.google.com/s2/favicons?domain=https://quizzical-saha-7bc91b.netlify.app</url>\n" +
        "\t\t\t<title>https://quizzical-saha-7bc91b.netlify.app</title>\n" +
        "\t\t</image>\n" +
        "\n" +
        "\t\t<item>\n" +
        "\t\t\t<title>Cool!The encyclopaedia, its innovators, and the intellectual networks in the Carolingian world</title>\n" +
        "\t\t\t<link>https://zenodo.org/record/4430506</link>\n" +
        "\t\t\t<description><![CDATA[<p>When Isidore of Seville (d. 636) wrote his Etymologiae, he hardly foresaw that his encyclopaedia will become a bestseller. More than 1500 medieval manuscripts of this work survive, a testament to its popularity. Moreover, we observe what may be termed the ‘wikipedization’ of the Etymologiae: …</p>\n" +
        "\n" +
        "<br/><br/><span style=\"font-size:12px; color: gray;\">(Feed generated with <a href=\"http://fetchrss.com\" target=\"_blank\">FetchRSS</a>)</span>]]></description>\n" +
        "\t\t\t<dc:creator>Steinová, Evina</dc:creator>\n" +
        "\t\t\t<pubDate>Wed, 17 Mar 2021 16:33:33 +0000</pubDate>\n" +
        "\t\t\t<guid>https://zenodo.org/record/4430506</guid>\n" +
        "\t\t</item>\n" +
        "\t\t<item>\n" +
        "\t\t\t<title>Transkribus - Handwritten Text Recognition for Premodern Documents (SIMS 2020 Lightning Talk)</title>\n" +
        "\t\t\t<link>https://zenodo.org/record/4420244</link>\n" +
        "\t\t\t<description><![CDATA[<p>Transkribus is a platform for text recognition and can be used via the Transkribus Expert Software (available after registration: transkribus.eu). Through Transkribus different tools for document analysis and text recognition can be directly applied. The intro demonstrates very briefly how …</p>\n" +
        "\n" +
        "<br/><br/><span style=\"font-size:12px; color: gray;\">(Feed generated with <a href=\"http://fetchrss.com\" target=\"_blank\">FetchRSS</a>)</span>]]></description>\n" +
        "\t\t\t<dc:creator>Hodel, Tobias</dc:creator>\n" +
        "\t\t\t<pubDate>Wed, 17 Mar 2021 16:33:33 +0000</pubDate>\n" +
        "\t\t\t<guid>https://zenodo.org/record/4420244</guid>\n" +
        "\t\t</item>\n" +
        "\t\t<item>\n" +
        "\t\t\t<title>The Elusive Book, or the Digitization of the Materiality[-ies] of Books</title>\n" +
        "\t\t\t<link>https://zenodo.org/record/4392796</link>\n" +
        "\t\t\t<description><![CDATA[<p>13<sup>th</sup> Annual Schoenberg Symposium on Manuscript Studies in the Digital Age: <em>invited</em> <em>presentation - online delivery, ‘The Elusive Book, </em><em>or the Digitization of the Materiality[-ies] of Books’</em> (18/11/2020)</p>\n" +
        "\n" +
        "<br/><br/><span style=\"font-size:12px; color: gray;\">(Feed generated with <a href=\"http://fetchrss.com\" target=\"_blank\">FetchRSS</a>)</span>]]></description>\n" +
        "\t\t\t<dc:creator>Alberto Campagnolo</dc:creator>\n" +
        "\t\t\t<pubDate>Wed, 17 Mar 2021 16:33:33 +0000</pubDate>\n" +
        "\t\t\t<guid>https://zenodo.org/record/4392796</guid>\n" +
        "\t\t</item>\n" +
        "\t\t<item>\n" +
        "\t\t\t<title>eCodicesNL: a virtual library for medieval manuscripts in Dutch collections</title>\n" +
        "\t\t\t<link>https://zenodo.org/record/4338443</link>\n" +
        "\t\t\t<description><![CDATA[<p>This is a presentation about eCodicesNL: a new initiative to build a virtual library for medieval manuscripts in Dutch collections. The elements that go into this library are, just as in its model project e-codices Switzerland, high quality and complete images, high quality descriptions and an …</p>\n" +
        "\n" +
        "<br/><br/><span style=\"font-size:12px; color: gray;\">(Feed generated with <a href=\"http://fetchrss.com\" target=\"_blank\">FetchRSS</a>)</span>]]></description>\n" +
        "\t\t\t<dc:creator>Teeuwen, Mariken</dc:creator>\n" +
        "\t\t\t<pubDate>Wed, 17 Mar 2021 16:33:33 +0000</pubDate>\n" +
        "\t\t\t<guid>https://zenodo.org/record/4338443</guid>\n" +
        "\t\t</item>\n" +
        "\t\t<item>\n" +
        "\t\t\t<title>Digital Humanities: New Approaches to Research and Teaching of the Medieval Mediterranean (5th to 15th centuries). (Digital Teac...</title>\n" +
        "\t\t\t<link>https://zenodo.org/record/4335364</link>\n" +
        "\t\t\t<description><![CDATA[<p>This webinar was funded by the Society for the Medieval Mediterranean, thanks to the “Simon Barton Postgraduate & ECR Conference Prize 2020” awarded to Nerea Fernández Cadenas (https://www.societymedievalmediterranean.com/simon-barton-postgraduate-conference-prize)<br/> It has been designed to offer a …</p>\n" +
        "\n" +
        "<br/><br/><span style=\"font-size:12px; color: gray;\">(Feed generated with <a href=\"http://fetchrss.com\" target=\"_blank\">FetchRSS</a>)</span>]]></description>\n" +
        "\t\t\t<dc:creator>Nerea Fernández Cadenas, Jamie Wood, Charles West, Lynn Ramey, Robert Houghton, Ainoa Castro Correa</dc:creator>\n" +
        "\t\t\t<pubDate>Wed, 17 Mar 2021 16:33:33 +0000</pubDate>\n" +
        "\t\t\t<guid>https://zenodo.org/record/4335364</guid>\n" +
        "\t\t</item>\n" +
        "\n" +
        "\t</channel>\n" +
        "</rss>");

}