import * as React from "react";
import { NextPage } from "next";
import configureStore from "@/store";
import { Provider } from "react-redux";
import Layout from "@/components/Layout";
import Puzzle from "@/components/Puzzle";
import Commands from "@/components/Commands";

const store = configureStore();

const IndexPage: NextPage = () => {
  return (
    <Provider store={store}>
      <Layout title="Home | Twitterパズル">
        <Commands />
        <Puzzle />
      </Layout>
    </Provider>
  );
};

export default IndexPage;
