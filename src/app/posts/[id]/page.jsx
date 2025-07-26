import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  //   console.log(data);
  return data;
};

export async function generateMetadata({ params }) {
  //read route params
  const id = (await params).id;

  //fetch data
  const singlePost = await getSinglePost(id)

  //optionally access and extend (rtather then replace) parant metadata
  // const previousImages = (await parent).opengraph?.tmage || [];

  return {
    title: singlePost.title,
    descrption:singlePost.body
  };
}

const SinglePost = async ({ params }) => {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div>
      <div className="border w-70 p-5 rounded-2xl">
        <h1 className="text-xl mb-5">{singlePost.title}</h1>
        <p>{singlePost.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
