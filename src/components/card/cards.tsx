import { useState, useCallback, useEffect } from "react";

export const Cards = () => {
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
    <div className="cards-wrap">
      {posts.map((props: any) => {
        return (
          <div key={props.id} className="cardBlock">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <hr />
            <p>{props.body}</p>
          </div>
        );
      })}
    </div>
  );
};
