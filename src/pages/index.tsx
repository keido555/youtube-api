import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";

import { Layout } from "src/components/layout/layout";
import ImageConverter from "src/components/button/ImgConverter";

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <ImageConverter />

          {posts.map((props: any) => {
            return (
              <div
                key={props.id}
                style={{ width: "900px", borderBottom: "solid 1px" }}
              >
                <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.body}</p>
              </div>
            );
          })}
        </main>
      </Layout>
    </div>
  );
};

export default Home;

//https://python-work.com/postgresql-psycopg2/

//https://www.learning-nao.com/?p=3016

//https://www.gis-py.com/entry/py-postgre
