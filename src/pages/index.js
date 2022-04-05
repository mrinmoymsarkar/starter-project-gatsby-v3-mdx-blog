import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage = ({data}) => {

  const {
    allMdx: { nodes: posts },
} = data
  return <Layout>
<Hero showPerson />
    <Posts posts={posts}
    title = "recently published"/>
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {order: ASC, fields: frontmatter___date}, limit: 3) {
      nodes {
        id
        frontmatter {
          author
          category
          readTime
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
          date(formatString: "MMMM DD,YYYY")
        }
        excerpt
      }
    }
  }
`


export default IndexPage
