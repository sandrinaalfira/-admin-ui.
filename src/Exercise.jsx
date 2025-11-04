// Exercise.jsx

import React from "react";
import PostCard from "./PostCard"; 
import { posts } from "./PostData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>
      
     <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
        {posts.map(post => (
          <PostCard 
            key={post.id}
            title={post.title} 
            body={post.body}  
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
  

