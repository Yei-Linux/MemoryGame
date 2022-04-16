import React from "react";
import Layout from "../layouts/Layout";
import Topbar from "../layouts/Topbar";

const WithLayout = () => (Component) => (props) => {
  return (
    <Layout>
      <Layout.Header>
        <Topbar />
      </Layout.Header>
      <Layout.Content>
        <Component {...props} />
      </Layout.Content>
    </Layout>
  );
};

export default WithLayout;
