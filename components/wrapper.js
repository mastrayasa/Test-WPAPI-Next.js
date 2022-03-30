
export default function Wrapper(props) {
      
    return (
        <div  className="container-sm max-w-lg mx-auto bg-white relative">
            {props.children}   
        </div>
    )
}
