import {  useEffect,useState } from 'react'; 
import wp from '../lib/wp'
import Link from 'next/link'
import Loading from '../components/loading'
export default function Categories(){

    const [cate, setCate] = useState([]);

    const loadCats = async () => {
        wp.categories().get(function( err, data ) {
            if ( err ) {
                
            }
            setCate(data); // do something with the returned posts
            
            
        })
        
    }
    
    useEffect(() => {  
        loadCats();
    },[]);

    useEffect(() => {  
        console.log(cate)
    },[cate]);

    if(cate.length == 0)
        return <Loading />

    return(
        <>
            <ul className="flex flex-row flex-wrap justify-center space-x-2">
                {cate.map((val, index) => {
                    return (<li key={index} >
                        <Link  href={`category/` + val.slug}>
                            <a>{val.name}</a>
                        </Link>
                    </li>);
                })}
            </ul>
        </>
    )
}