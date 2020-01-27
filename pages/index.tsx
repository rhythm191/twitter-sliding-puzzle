import * as React from "react";
import Layout from "../components/Layout";
import Pazzle from "../components/Pazzle";
import { NextPage } from "next";
import configureStore from "../store";
import { Provider } from "react-redux";
import Commands from "../components/Commands";

const store = configureStore();

const IndexPage: NextPage = () => {
  return (
    <Provider store={store}>
      <Layout title="Home | Twitter Sliding Puzzle">
        <Commands />
        <Pazzle />
      </Layout>
    </Provider>
  );
};

export default IndexPage;
