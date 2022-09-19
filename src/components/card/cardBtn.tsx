import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

export const CardBtn = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  const handleClick = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生し、データの取得に失敗");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <button onClick={handleClick}>検索</button>

      <div>
        {loading ? (
          <div>ローディング中</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : posts.length > 0 ? (
          <div className="cards-wrap">
            {posts.map((props: any) => {
              return (
                <div key={props.id} className="cardBlock">
                  <Link href={`/post/${props.id}`}>
                    <a>
                      <div className="cardPost">
                        {props.postId <= 10 ? (
                          <p>No.1</p>
                        ) : props.postId <= 20 ? (
                          <p>No.2</p>
                        ) : props.postId <= 30 ? (
                          <p>No.3</p>
                        ) : props.postId <= 40 ? (
                          <p>No.4</p>
                        ) : (
                          <p>No5</p>
                        )}
                      </div>
                      <h3>{props.name}</h3>
                      <p>{props.email}</p>
                      <hr />
                      <p>{props.body}</p>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>データが空です</div>
        )}
      </div>
    </div>
  );
};
