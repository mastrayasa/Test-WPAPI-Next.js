import React from "react"; 
import PostCard from "./post-card"; 
export default function Loop(props) { 
  return (
    <>
    {props.posts.map((post, index) => { 
            return <PostCard post={post} key={index} />
        })}
    </>
  );
}