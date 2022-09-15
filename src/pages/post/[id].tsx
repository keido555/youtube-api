import { Layout } from "src/components/layout/layout";
import ImageConverter from "src/components/button/ImgConverter";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { usePost } from "src/hooks/usePost";

const PostId = () => {
  const { comments, posts, error } = usePost();
  // const router = useRouter();
  // const fetcher = (url: string): Promise<any> =>
  //   fetch(url).then((res) => res.json());
  // const { data: comments, error: commentsError } = useSWR(
  //   router.query.id
  //     ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
  //     : null,
  //   fetcher
  // );
  // const { data: posts, error: postsError } = useSWR(
  //   comments?.postId
  //     ? `https://jsonplaceholder.typicode.com/posts/${comments.postId}`
  //     : null,
  //   fetcher
  // );

  return (
    <div>
      <Layout>
        <main>
          <div className="postImg">
            <ImageConverter />
          </div>
          <div className="backBtn">
            <Link href="http://localhost:3000/">
              <a>戻る</a>
            </Link>
          </div>
          <div className="postPage">
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              <p>{comments?.id}</p>
            </div>
            <div className="postData">
              <h1>{comments?.name}</h1>
              <p>{comments?.email}</p>
              <p>{comments?.body}</p>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>{posts.userId}</p>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default PostId;
