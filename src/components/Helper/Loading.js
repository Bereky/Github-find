import '../App.css'

const Loading = () => {
    return ( 
        <div className="load" id="load">
            <div className="loading">
                <div className="spin"></div>
                <p className="loading-text">Loading</p>
            </div>
        </div>
     );
}
 
export default Loading;