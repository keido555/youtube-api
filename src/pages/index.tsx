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
// https://qiita.com/nyagato_00/items/d2ef6c4a0edb0c745098
// https://www.postgresql.jp/document/7.3/programmer/jdbc-binary-data.html
// https://www.web-dev-qa-db-ja.com/ja/python/postgres%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AB%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BF%9D%E5%AD%98%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%81%AF%EF%BC%9F/1073446444/

// Python3でPostgreSQLに入れた画像ファイルをCGIで表示する
// http://horliy.seri.gr.jp/mt/horliy-blog/2020/07/python3postgresqlcgi.html
