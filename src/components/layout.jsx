import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Grommet } from 'grommet';
import theme, { GlobalStyle, StyledWrap } from './theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(theme);

  return (
    <>
      <Grommet theme={theme} full themeMode="light" background="dark-1">
        <GlobalStyle />
        <StyledWrap>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </StyledWrap>
      </Grommet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
