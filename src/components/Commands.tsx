/** @jsx jsx */
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actions from "@/actions/puzzle";
import { css, jsx } from "@emotion/core";

const commandStyle = css`
  display: block;
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
