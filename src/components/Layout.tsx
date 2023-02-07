import React from "react";
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ data, location, children }: any): any => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location?.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Helmet>
        <title>Andrew's Site</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
