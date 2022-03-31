import {  useEffect,useState } from 'react'; 
import wp from '../lib/wp'
import Link from 'next/link'
import Loading from '../components/loading'
import Loop from '../components/post-loop'
export default function PostList(props){

    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        wp.posts().get(function( err, data ) {
            if ( err ) {
                
            }
            setPosts(data); // do something with the returned posts
            
            
        })
        
    }
    
    useEffect(() => {  
        loadPosts();
    },[]);

    useEffect(() => {  
        console.log(posts)
    },[posts]);

    if(posts.length == 0)
        return <Loading />

    return(
        <>
            <Loop posts={posts} />
        </>
    )
}