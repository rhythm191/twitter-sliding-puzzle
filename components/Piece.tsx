/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

type Props = {
  bgImage: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const Piece: React.FunctionComponent<Props> = props => (
  <div
    css={css`
    position: absolute;
    background: url("${props.bgImage}") no-repeat;
    background-position: ${props.x * props.width * -1}px ${props.y * props.height * -1}px;
    background-size: 627px 839px;
    left: ${props.x * props.width}px;
    top: ${props.y * props.height}px;
    width: ${props.width}px;
    height: ${props.height}px;

    cursor: pointer;
  `}
  ></div>
);

export default Piece;
