import Prismic from 'prismic-javascript'
 
export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = ''
 
// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)
 
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
  switch(doc.type){
    case 'page':
      return `/${doc.uid}`
    case 'service':
      return `/services/${doc.uid}`
    case 'project':
      return `/our-work/${doc.uid}`
    default:
      return '/'
  }
}
  
// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  switch(doc.type){
    case 'page':
      return `/[page]`
    case 'service':
      return `/services/[service]`
    case 'project':
      return `/our-work/[project]`
    default:
      return '/[page]'
  }
}