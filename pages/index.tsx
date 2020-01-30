import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import configureStore from "../store";
import { Provider } from "react-redux";
import firebase from "../utils/firebase";
import { User } from "firebase";

const store = configureStore();

const provider = new firebase.auth.TwitterAuthProvider();

const IndexPage: NextPage = () => {
  // const [token, setToken] = useState(undefined);
  // const [secret, setSecret] = useState<AuthCredential | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const authorize = useCallback(() => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // if (credential in result) {

        // }
        // if (accessToken in result?.credential) {

        // }

        // console.log(result?.credential?.accessToken);
        // console.log(result?.credential?.secret);
        // The signed-in user info.
        console.log("hogehgoe");
        window.console.log(result);
        setUser(result?.user);
        window.console.log(result?.user);
        // ...
      })
      .catch(function(error) {
        console.log("fugafuga");
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;

        window.console.log(errorCode);
        window.console.log(errorMessage);
      });
  }, [user]);

  return (
    <Provider store={store}>
      <Layout title="Home | Twitter Sliding Puzzle">
        <p>Twitterにログインしてください。</p>
        {user !== null || <button onClick={authorize}>Twitterにログイン</button>}
        <p>{user?.uid}</p>
      </Layout>
    </Provider>
  );
};

export default IndexPage;
