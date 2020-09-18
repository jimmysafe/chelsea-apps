import { getPosts, getSinglePage } from "../../prismic/queries"
import Link from 'next/link'
import { hrefResolver, linkResolver } from "../../prismic/prismic-configuration"
import Hero from "../../components/slices/Hero";
import { useEffect, useState } from "react";

const categories = [ 'culture', 'design', 'development', 'news', 'start-ups', 'strategy' ]

const BlogPage = ({ posts: allPosts, page }) => {

    const lastPostBannerSlice = allPosts[0].data.body.find(el => el.slice_type === "hero_banner")

    const [selectedTag, setSelectedTag] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [posts, setPosts] = useState(allPosts)

    const handleCatClick = (e) => {
        setSearchTerm('')
        if(selectedTag === e.target.value){
            setSelectedTag('')
        } else {
            setSelectedTag(e.target.value)
        }
    }

    useEffect(() => {
        if(!selectedTag){
            setPosts(allPosts)
        } else {
            const filteredPosts = allPosts.filter(post => post.tags.includes(selectedTag))
            setPosts(filteredPosts)
        }
    }, [selectedTag])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        if(!searchTerm){
            setPosts(allPosts)
        } else {
            setSelectedTag('')
            const filteredPosts = allPosts.filter(post => post.data.title[0].text.toLowerCase().includes(searchTerm))
            setPosts(filteredPosts)
        }
    }, [searchTerm])

    return (
        <>
        <div id="blog-page"  style={{ background: '#1E1E1E' }}>
            <Link as={linkResolver(allPosts[0])} href={hrefResolver(allPosts[0])}>
                <a>
                    <Hero page={page} slice={lastPostBannerSlice} />
                </a>
            </Link>

            <section style={{color: "#1E1E1E", padding: "3rem 0rem" }}>
                <div className="container d-flex  align-items-center category-section" style={{ justifyContent: 'space-between' }}>
                    <div className="cat-wrapper">
                        {categories.map(cat => (
                             <input 
                                style={{ marginRight: '0.4rem' }}
                                key={cat}
                                type="button" 
                                className={`cat-btn btn button-category ${selectedTag === cat ? 'cat-active' : ''}` }
                                value={cat}
                                onClick={(e) => handleCatClick(e)}
                            />
                        ))}
                    </div>
                    <div className="search-wrapper">
                        <div className="search-wrapper">
                            <form role="search" method="get" id="searchform" className="searchform" action="https://chelsea-apps.com/">
                                <div>
                                    <label className="screen-reader-text" htmlFor="s">Search for:</label>
                                    <input 
                                        type="text" 
                                        name="s"
                                        id="s"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        className="search-field" 
                                        placeholder="search"  
                                    />
                                    <img className="search-pic" src="/app/themes/starter-theme/images/Search.svg" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 



            <div id="all-posts" className="container cat-posts align-items-center container-blog">
                {posts.map(post => {
                    const banner = post.data.body.find(el => el.slice_type === 'hero_banner')
                    return (
                        <Link as={linkResolver(post)} href={hrefResolver(post)} key={post.id}>
                            <a>
                                <div className="thumbnail">  
                                    <div className="cropper">
                                        <div className="cropper-bg" style={{ backgroundImage: `url( ${banner.primary.image.url} )` }}></div>
                                        <div className="title-tease"><h3 className="title-test-blog">{banner.primary.hero_heading[0].text}</h3></div>
                                        <div className="author-tease"><p>Jimmy Grimble</p></div>
                                        <div className="bottom-blog"><p>Date Here</p></div>
                                    </div>	
                                </div>
                            </a>  
                        </Link>
                    )
                })}
              
           
            </div>

            {/* {% for catPosts in cats %}
                <div id="{{ catPosts.category }}" className="container cat-posts  align-items-center container-blog" style="display:none">
                    {% for post in catPosts.posts %}
                        {% include ['tease-'~post.post_type~'.twig', 'tease.twig'] %}
                    {% endfor %}
                </div>
            {% endfor %} */}
        </div>
        </>
    )
}

export async function getServerSideProps({ params, preview = null, previewData = {} }) {
    const posts = await getPosts()
    const page = await getSinglePage('blog', previewData)
    return {
        props: {
            posts,
            page,
            preview
        }
    }
}

export default BlogPage