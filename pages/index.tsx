import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Twitter Sliding Puzzle">
      <h1>Twitter Sliding Puzzle</h1>
      <p>Twitterの投稿画像で遊ぶパズルゲームです。</p>
    </Layout>
  );
};

export default IndexPage;
