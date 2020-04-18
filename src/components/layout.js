/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet } from "grommet"
import styled, { css } from "styled-components"
import theme, { GlobalStyle, StyledWrap } from "./theme"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(theme)

  return (
    <>
      <Grommet theme={theme} full themeMode="light" background="dark-1">
        <GlobalStyle />
        <StyledWrap>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledWrap>
      </Grommet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
