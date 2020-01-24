import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Twitter Slide Pazzle">
      <h1>Twitter Slide Pazzle</h1>
      <p>Twitterの投稿画像で遊ぶパズルゲームです。</p>
    </Layout>
  );
};

export default IndexPage;
