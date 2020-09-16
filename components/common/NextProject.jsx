import React from 'react'
import Link from 'next/link'

const NextProject = ({ nextLink, page }) => {

    const pageColor = page.data.page_color

    return (
        <section className="page-links" style={{background: pageColor}}>
            <div className="container d-flex py-5" style={{ justifyContent: 'center' }}>
                <Link as={`/our-work/${nextLink}`} href="/our-work/[project]">
                    <a className="page-links-button"> View next project </a>
                </Link>
            </div>
        </section>
    )
}

export default NextProject
