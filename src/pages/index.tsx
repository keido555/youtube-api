import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";

import { Layout } from "src/components/layout/layout";
import ImageConverter from "src/components/button/ImgConverter";
import { Cards } from "src/components/card/cards";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <ImageConverter />

          <Cards />
        </main>
      </Layout>
    </div>
  );
};

export default Home;

//https://python-work.com/postgresql-psycopg2/

//https://www.learning-nao.com/?p=3016

//https://www.gis-py.com/entry/py-postgre

// postgres に画像データを入れる
// https://teratail.com/questions/82258
// https://www.postgresql.jp/document/7.3/programmer/jdbc-binary-data.html
