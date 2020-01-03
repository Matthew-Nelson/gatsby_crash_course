import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage () {
    return (
        <Layout>
            <SEO title="About" />
            <h1>Welcome to my website!</h1>
            <p>This is a sample site for me to test some stuff on Gatsby and Netlify</p>
            <p>Lorem ipsum</p>
        </Layout>
    )
}
