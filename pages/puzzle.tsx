import * as React from "react";
import Layout from "../components/Layout";
import Puzzle from "../components/Puzzle";
import { NextPage } from "next";
import configureStore from "../store";
import { Provider } from "react-redux";
import Commands from "../components/Commands";

const store = configureStore();

const PuzzlePage: NextPage = () => {
  return (
    <Provider store={store}>
      <Layout title="Puzzle | Twitter Sliding Puzzle">
        <Commands />
        <Puzzle />
      </Layout>
    </Provider>
  );
};

export default PuzzlePage;
