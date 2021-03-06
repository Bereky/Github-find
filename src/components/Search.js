import { useState} from "react"
import "../App.css"

const Search = ({myCallBack}) => {
    const [username, setUsername] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const fetchUserData = async (e) => {
        const URL = `https://api.github.com/users/${username}`;
        e.preventDefault();

        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            myCallBack(res);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="section">
                <form onSubmit={fetchUserData} className="search-bar" >
                    <input value={username} onChange={updateUsername} type="text" placeholder="Enter github username" className="search-input" required/>
                    <span className="search-icon"><img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-search-thin.png" className="icon" /></span>
                </form> 
        </div>
     );
}
 
export default Search;