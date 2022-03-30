import React  from "react";  
import Link from 'next/link'
export default function PostCard(props) {

     
  return (<div className="m-4 px-4 py-2 shadow-sm rounded-bl rounded-tl rounded-tr-3xl">
  <div className="leading-none">
      <p className="mb-1 font-bold">
      
        <Link href={`/view/` + props.post.slug}>
          <a>{props.post.title.rendered}</a>
        </Link>
       
          
      </p>
      <p className="my-1 italic text-xs text-gray-500">{props.post.date}</p>
  </div>
  <div className="text-gray-700 text-sm italic leading-1" dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }} /> 
  
</div>);
}