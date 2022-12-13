/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
const TanPost = ({ setPostId }) => {
  const queryClient = useQueryClient();
  async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
  const { status, data, error, isFetching } = useQuery("posts", fetchPosts);
  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <><div>
          {data.map((post) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <p key={post.id}>
              <a
                onClick={() => setPostId(post.id)}
                href="#"
                style={
                  queryClient.getQueryData(["post", post.id])
                    ? {
                        fontWeight: "bold",
                        color: "green",
                        textDecoration:'none',
                      }
                    : {
                        color:'black',
                        textDecoration:'none',
                    }
                }
              >
                {post.title}
              </a>
            </p>
          ))}
        </div>
        <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};

export default TanPost;
