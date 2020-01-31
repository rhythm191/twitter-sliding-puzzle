import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import configureStore from "../store";
import { Provider } from "react-redux";
import firebase from "../utils/firebase";
import { User } from "firebase";
// import { OAuthCredential } from "firebase/auth";
import LoginContent from "../components/LoginContent";
// import Twitter from "twitter";

const store = configureStore();

// const provider = new firebase.auth.TwitterAuthProvider();

const IndexPage: NextPage = () => {
  // const [token, setToken] = useState(undefined);
  // const [secret, setSecret] = useState<AuthCredential | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        // if (result.credential) {
        //   // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        //   // You can use these server side with your app's credentials to access the Twitter API.
        //   const token = result.credential.accessToken;
        //   const secret = result.credential.secret;
        //   // ...
        // }
        // The signed-in user info.
        if (result.user && result.credential) {
          alert((result.credential as firebase.auth.OAuthCredential).accessToken);

          // const client = Twitter({
          //   consumer_key: "ECQaC3kvQ35DMg2wPWLQyc8UG",
          //   consumer_secret: "TMfjtKlFNnDIcKSHEuF02RKtONvYYPlgoHXnid4nMRKmIqxbwA",
          //   access_token_key: crendential.accessToken,
          //   access_token_secret: crendential.secret,
          // });

          setUser(result.user);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // ...
        console.log(errorCode);
      });

    return () => {};
  }, [user]);

  return (
    <Provider store={store}>
      <Layout title="Home | Twitter Sliding Puzzle">
        {user === undefined ? (
          <LoginContent user={undefined}></LoginContent>
        ) : (
          <div>{user.uid}</div>
        )}
      </Layout>
    </Provider>
  );
};

export default IndexPage;
