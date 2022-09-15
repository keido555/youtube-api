import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());
  const { data: comments, error: commentsError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );
  const { data: posts, error: postsError } = useSWR(
    comments?.postId
      ? `https://jsonplaceholder.typicode.com/posts/${comments.postId}`
      : null,
    fetcher
  );

  return { comments, posts, error: commentsError || postsError };
};
