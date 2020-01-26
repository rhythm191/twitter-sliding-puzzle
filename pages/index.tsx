import * as React from "react";
import Layout from "../components/Layout";
import Pazzle from "../components/Pazzle";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Twitter Sliding Puzzle">
      {/* この辺にコマンドを乗っける */}
      <Pazzle bgImage="/sample.jpeg" />
    </Layout>
  );
};

export default IndexPage;
