import React from "react" 
import Wrapper from '../../components/wrapper'    
import Header from '../../components/header' 
import Footer from '../../components/footer'  
import PostList from '../../components/post-list'  

import wp from '../../lib/wp'
import Head from 'next/head'; 
import Error from 'next/error'
export default function Slug(props) {

    if(props.category.length == 0){
       return <Error statusCode="404" />
    }
    
    const category = props.category[0];

    return (
        <Wrapper> 
            <Head>
                <title>{category.name}</title>
            </Head>
            <Header />
            <div className="overflow-x-auto min-h-full p-4 border-b">
                 <h1 className="page-title">{category.name}</h1> 
                 <div className="text-gray-700 text-sm italic leading-1" dangerouslySetInnerHTML={{ __html: category.description }} /> 
            </div> 

            <div className="overflow-x-auto min-h-full">
                 <PostList category={category.slug} /> 
            </div> 
            <Footer />
        </Wrapper>

)}


export const getServerSideProps = async ({ query: { slug = "" } }) => {
    const category =  await wp.categories().param("slug",slug).embed();

    return {
        props: {
            category
        }
    }
}
