/** @jsx jsx */

import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { css, jsx } from "@emotion/core";

const pageStyle = css`
  font-family: "Hiragino Sans", Meiryo, sans-serif;

  display: grid;
  grid-template-rows: 80px 1fr 48px;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: 768px) {
    width: 768px;
  }

  margin: 0 auto;

  height: 100vh;
`;

const headerStyle = css`
  grid-row: 1;
  text-align: center;

  h1 {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin: 0;
  }
`;

const mainStyle = css`
  display: flex;
  flex-direction: column;
`;

const footerStle = css`
  grid-row: 3;
  height: 40px;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: block;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        list-style: none;
        padding-right: 1em;

        a {
          padding: 0.5em 0.8em;
        }
      }
    }
  }

  p {
    magin: 0;
    text-align: center;

    small {
      font-size: 0.7rem;
    }
  }
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Twitterパズル" }) => (
  <div css={pageStyle}>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Twitterの投稿画像でパズルをするウェブアプリです。" />
    </Head>
    <header css={headerStyle}>
      <h1>Twitterパズル</h1>
      <p>Twitterの投稿画像で遊ぶパズルゲームです。</p>
    </header>
    <main css={mainStyle}>{children}</main>
    <footer css={footerStle}>
      <nav>
        <ul>
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
      <p>
        <small
          css={css`
            font-size: 1rem;
          `}
        >
          © 2020 @rhythm191
        </small>
      </p>
    </footer>
  </div>
);

export default Layout;
