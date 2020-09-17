import Link from 'next/link'

const PostBottomNavigation = ({ next, prev }) => {
    return (
        <section className="page-links" style={{ background: '#FEE315' }}>
            <div className="container d-flex py-5" style={{ justifyContent: 'space-between' }}>
                {prev && prev[0] ?
                    <Link as={`/blog/${prev[0].uid}`} href={'/blog/[post]'}>
                        <a><i className="arrow left"></i></a>
                    </Link>
                    : 
                    <div></div>
                }

                <Link href='/blog'>
                    <a className="page-links-button">Show More</a>
                </Link>
      

                {next && next[0] ?
                    <Link as={`/blog/${next[0].uid}`} href={'/blog/[post]'}>
                        <a><i className="arrow right"></i></a>
                    </Link>
                    : 
                    <div></div>
                }
            </div>
        </section>
    )
}

export default PostBottomNavigation
