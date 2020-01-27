/** @jsx jsx */
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/puzzle";
import { css, jsx } from "@emotion/core";
import { AppState } from "../store";

const commandStyle = css`
  display: block;
`;

const mapStateToProps = (state: AppState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleinitPieces: () => dispatch(actions.init()),
    handleRandom: () => dispatch(actions.setRandom()),
  };
};

interface CommandHandler {
  handleinitPieces(): void;
  handleRandom(): void;
}

type Props = AppState & CommandHandler;

const Commands: React.FunctionComponent<Props> = ({ handleinitPieces, handleRandom }) => (
  <div css={commandStyle}>
    <button onClick={handleinitPieces}>初期化</button>
    <button onClick={handleRandom}>ランダム</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Commands);
