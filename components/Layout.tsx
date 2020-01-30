/** @jsx jsx */

import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { css, jsx } from "@emotion/core";

const footerStle = css`
  display: flex;
  justify-content: space-between;
`;

const footerMenu = css`
  display: block;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    list-style: none;
    padding-right: 1em;
  }
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Twitter Sliding Puzzle" }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Twitterの投稿画像でパズルをするウェブアプリです。" />
    </Head>
    <header>
      <h1>Twitter Sliding Puzzle</h1>
      <p>Twitterの投稿画像で遊ぶパズルゲームです。</p>
    </header>
    <main>{children}</main>
    <footer css={footerStle}>
      <nav>
        <ul css={footerMenu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>プライバシー</a>
            </Link>
          </li>
        </ul>
      </nav>
      <small
        css={css`
          font-size: 1rem;
        `}
      >
        Copyright @rhythm191 2020
      </small>
    </footer>
  </div>
);

export default Layout;
