export default function Loading(props){

    const size = props.size ? props.size : 'text-xl'

    return (<span className="">
         
        <span className="">
            {props.text ? props.text : 'Loading...'}
        </span>
    </span>)
}