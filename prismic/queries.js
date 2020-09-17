import { Client } from './prismic-configuration'
import Prismic from 'prismic-javascript'
 
async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
};

// POSTS

export const getPosts = async () => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(doc => doc.type === 'blog_post').slice(0, 5)
}

export const getSinglePost = async (uid) => {
    const post = await Client().getByUID("blog_post", uid)
    return post
}

// PAGES

export const getPages = async () => {
    const allRoutes = await fetchDocs() 
    return allRoutes.filter(doc => doc.type === 'page')
}

export const getSinglePage = async (uid, previewData) => {
    const { ref } = previewData
    const page = await Client().getByUID("page", uid, ref ? { ref } : null)
    return page
}


// PROJECTS

export const getProjects = async () => {
  const allRoutes = await fetchDocs() 
  return allRoutes.filter(doc => doc.type === 'project')
}

export const getSingleProject = async (uid, previewData) => {
  const { ref } = previewData
  const page = await Client().getByUID("project", uid, ref ? { ref } : null)
  return page
}

// SERVICES

export const getServices = async () => {
  const allRoutes = await fetchDocs() 
  return allRoutes.filter(doc => doc.type === 'service')
}

export const getSingleService = async (uid, previewData) => {
  const { ref } = previewData
  const page = await Client().getByUID("service", uid, ref ? { ref } : null)
  return page
}

export const nextLink = async(docType, id) => {
  const next = await Client().query(Prismic.Predicates.at('document.type', docType), { pageSize : 1 , after : `${id}`, orderings: '[document.first_publication_date]'})
  return next.results
}

export const prevLink = async(docType, id) => {
  const prev = await Client().query(Prismic.Predicates.at('document.type', docType), { pageSize : 1 , after : `${id}`, orderings: '[document.first_publication_date desc]'})
  return prev.results
}
