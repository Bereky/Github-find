import "./index.css";

const Error = (props) => {
    return ( 
        <div className="error d-flex justify-content align-items-center">
            <h3>No results found for "{props.query}"</h3>    
        </div>
     );
}
 
export default Error;