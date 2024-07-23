
import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center text-xl">No Post Found</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">{post.title}</p>
            <p className="text-gray-600">
              By <span className="font-semibold">{post.author}</span> on <span className="font-semibold">{post.category}</span>
            </p>
            <p className="text-gray-600">Posted on {post.date}</p>
            <p className="mt-4">{post.content}</p>
            <div className="mt-4">
              {post.tags.map((tag, index) => {
                return <span key={index} className="text-blue-500 mr-2">{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
