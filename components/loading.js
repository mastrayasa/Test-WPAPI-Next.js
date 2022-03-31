import {MdDataUsage} from 'react-icons/md'
export default function Loading(props){

    const size = props.size ? props.size : 'text-xl'

    return (<span className="">
        <MdDataUsage className={`animate-spin inline ${size} -mt-1 mr-1`} />
        <span className="">
            {props.text ? props.text : 'Loading...'}
        </span>
    </span>)
}