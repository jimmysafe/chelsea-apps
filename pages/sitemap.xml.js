import React from 'react'
import { fetchDocs } from '../prismic/queries'

const createSitemap = (pages) => {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                  switch(page.type){
                    case 'page':
                        return `<url><loc>${`https://chelsea-apps.com/${page.uid}`}</loc></url>`
                    case 'post':
                        return `<url><loc>${`https://chelsea-apps.com/blog/${page.uid}`}</loc></url>`
                    case 'project':
                        return `<url><loc>${`https://chelsea-apps.com/our-work/${page.uid}`}</loc></url>`
                    case 'service':
                        return `<url><loc>${`https://chelsea-apps.com/services/${page.uid}`}</loc></url>`
                    default: 
                        return `<url><loc>${`https://chelsea-apps.com/${page.uid}`}</loc></url>`
                  }
              })
              .join('')}
        </urlset>
        `
    )
}

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const pages = await fetchDocs()
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(pages));
    res.end();
  }
}



export default Sitemap