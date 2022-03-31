import React from "react" 
import Wrapper from '../../components/wrapper'    
import Footer from '../../components/footer'  
import Header from '../../components/header'  
import wp from '../../lib/wp'
import Head from 'next/head'; 
import Error from 'next/error'
export default function Slug(props) {

    console.log(props.post)
    
    if(props.post.length == 0){
        return <Error statusCode="404" />
    }
    
    const post = props.post[0];

    return (
        <Wrapper> 
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <Header />
            <div className="overflow-x-auto min-h-full p-4">
                 <h1 className="post-title">{post.title.rendered}</h1>
                 
                 <div className="text-gray-700 text-sm italic leading-1" dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
            </div> 
            <Footer />
        </Wrapper>

)}


export const getServerSideProps = async ({ query: { slug = "" } }) => {
    const post =  await wp.posts().param("slug",slug).embed();

    return {
        props: {
            post
        }
    }
}
