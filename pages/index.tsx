import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import configureStore from "../store";
import { Provider } from "react-redux";

const store = configureStore();

const IndexPage: NextPage = () => {
  return (
    <Provider store={store}>
      <Layout title="Home | Twitter Sliding Puzzle">
        <p>Twitterにログインしてください。</p>
      </Layout>
    </Provider>
  );
};

export default IndexPage;
