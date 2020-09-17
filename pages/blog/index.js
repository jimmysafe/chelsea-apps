import { getPosts } from "../../prismic/queries"
import Link from 'next/link'
import { hrefResolver, linkResolver } from "../../prismic/prismic-configuration"
import LazyLoad from "react-lazyload";
import Head from 'next/head'
import { useEffect } from "react";

const BlogPage = ({ posts }) => {
    useEffect(() => {
        $('.lazy').Lazy(
            {
              placeholder: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTBweCIgaGVpZ2h0PSI5MHB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5ZZWxsb3cgTG9hZGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlllbGxvdy1Mb2FkZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCI+PC9yZWN0PgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRUUzMTUiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCI+PC9yZWN0PgogICAgPC9nPgo8L3N2Zz4=",
              scrollDirection: 'vertical',
              effect: 'fadeIn',
              visibleOnly: true,
              onError: function(element) {
                  console.log('error loading ' + element.data('src'));
              }
            }
        );
    }, [])
    return (
        <>
        <Head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js"></script>
        </Head>

        <div id="blog-page">
            {/* {% for post in posts %}
            {% if loop.first %}
                    {% include '/components/page-hero-blog.twig' %}
                {% endif %}
            {% endfor %} */}
{/* 
            <section style=" color: #1E1E1E; padding: 3rem 0rem">
                <div className="container d-flex  align-items-center category-section" style="justify-content: space-between; ">
                    <div className="cat-wrapper">
                            {% for categorie in categories %}
                                <input type="button" className="cat-btn btn button-category {{categorie.slug}}" value="{{categorie.slug}}" {% if term.slug == categorie.slug %}{% endif %}>
                            {% endfor %}
                    </div>
                    <div className="search-wrapper">
                            <div className="search-wrapper">
                                {{function('get_search_form')}}
                            </div>
                    </div>
                </div>
            </section> */}

            <div id="all-posts" className="container cat-posts align-items-center container-blog">
                {posts.map(post => {
                    const banner = post.data.body.find(el => el.slice_type === 'hero_banner')
                    return (
                        // <LazyLoad
                        //     key={post.id}
                        //     height={200}
                        //     // placeholder={<PlaceholderComponent />}
                        //     offset={[-200, 0]}
                        // >
                        <Link as={linkResolver(post)} href={hrefResolver(post)}>
                            <a>
                                <div className="thumbnail">  
                                    <div className="cropper">
                                        <div className="cropper-bg lazy" data-src={banner.primary.image.url}></div>
                                        <div className="title-tease"><h3 className="title-test-blog">{banner.primary.hero_heading[0].text}</h3></div>
                                        <div className="author-tease"><p>Jimmy Grimble</p></div>
                                        <div className="bottom-blog"><p>Date Here</p></div>
                                    </div>	
                                </div>
                            </a>  
                        </Link>
                        // </LazyLoad>
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

export async function getStaticProps({ params, preview = null, previewData = {} }) {
    const posts = await getPosts()
    return {
        props: {
            posts,
            preview
        }
    }
}

export default BlogPage
