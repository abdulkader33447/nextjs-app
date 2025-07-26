import Link from "next/link";
import React from "react";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  //   console.log(data)
  return data;
};

export const metadata = {
  title: "all posts",
  description: "Loading JSON placeholder posts using server component",
};

const Posts = async () => {
  const post = await getPosts();
  return (
    <div className="p-5 grid sm:grid-cols-3 grid-cols-1 gap-5">
      {post.map((singlePost) => {
        return (
          <div className="border p-5 rounded-2xl" key={singlePost.id}>
            <h1 className={`text-2xl my-3 ${style["post-title"]}`}>
              {singlePost.title}
            </h1>
            <p className="testing-css">{singlePost.body}</p>
            <Link
              className="text-black text-xl bg-blue-500 p-2 rounded-lg"
              href={`/posts/${singlePost.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
