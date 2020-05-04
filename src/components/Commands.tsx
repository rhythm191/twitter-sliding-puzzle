/** @jsx jsx */
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actions from "@/actions/puzzle";
import { css, jsx } from "@emotion/core";

const commandStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0 8px;

  button {
    margin: 0;
    margin-right: 1rem;
    padding: 0.4em 1.2em;
    color: #00bfa5;
    background: none;
    border: 1px solid #00bfa5;
    border-radius: 5px;
    transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);

    &:last-of-type {
      margin-right: 0;
    }

    &:hover,
    &:focus {
      color: #fff;
      background: #00bfa5;
    }
  }
`;

export const Commands: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleinitPieces = useCallback(() => dispatch(actions.init()), []);
  const handleRandom = useCallback(() => dispatch(actions.setRandom()), []);
  const handleDebugInit = useCallback(() => dispatch(actions.debugInit()), []);

  return (
    <div css={commandStyle}>
      <button onClick={handleDebugInit}>デバッグ初期化</button>
      <button onClick={handleinitPieces}>初期化</button>
      <button onClick={handleRandom}>ランダム</button>
    </div>
  );
};

export default Commands;
