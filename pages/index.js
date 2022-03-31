import React from "react" 
import {  useEffect,useState } from 'react'; 
import Wrapper from '../components/wrapper'  
import Loop from '../components/post-loop'  
import Footer from '../components/footer' 
import Header from '../components/header' 
import Categories from '../components/categories' 
import wp from '../lib/wp'
import Head from 'next/head'; 
export default function Home(props) {

    return (
        <Wrapper> 
            <Head>
                <title>Wordpress Api</title>
            </Head>

            <Header />

            <div className="p-4 border-b">
                <Categories />
            </div>

            <div className="overflow-x-auto min-h-full">
                <Loop posts={props.posts} />
            </div> 
            <Footer />
        </Wrapper>

)}


export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const posts =  await wp.posts().get(function( err, data ) {
        if ( err ) {
           return false;
        }
        return  data; // do something with the returned posts
        
    });

    return {
        props: {
            posts
        }
    }
}
