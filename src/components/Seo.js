import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = () => (
  <StaticQuery
    query={graphql`
      query MetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          {
            name: "keywords",
            content:
              "webdeveloper portfolio goetynck html css php javascript react gatsby website developer",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
    )}
  />
)

export default Seo
