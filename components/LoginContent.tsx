/** @jsx jsx */
import React, { useCallback } from "react";
import { css, jsx } from "@emotion/core";
import firebase from "../utils/firebase";
import { User } from "firebase";

const style = css`
  margin: 10px auto 20px;
`;

const provider = new firebase.auth.TwitterAuthProvider();

interface Props {
  user: User | undefined;
}

const LoginContent: React.FunctionComponent<Props> = user => {
  const authorize = useCallback(() => {
    firebase.auth().signInWithRedirect(provider);
  }, [user]);

  return (
    <div css={style}>
      <p>Twitterにログインしてください。</p>
      <button onClick={authorize}>Twitterにログイン</button>
    </div>
  );
};

export default LoginContent;
