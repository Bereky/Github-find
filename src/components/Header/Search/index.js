import { useState} from "react"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./index.css"

const Search = ({myCallBack}) => {
    const [username, setUsername] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const fetchUserData = async (e) => {
        const URL = `https://api.github.com/users/${username}`;
        e.preventDefault();

        /* fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            myCallBack(res);
            console.log(res)
        })
        .catch(err => console.log(err)) */

        console.log("search")
    }

    return (
        <div className="d-flex justify-content-center align-items-center position-relative search-form m-auto">
            <form onSubmit={fetchUserData} className="d-flex w-100 h-100" >
                <input value={username} onChange={updateUsername} type="text" placeholder="Enter github username" className="search-input " required/>
                <IconButton className="position-absolute search-button" type="submit">
                    <SearchIcon />
                </IconButton>
            </form> 
        </div>
     );
}
 
export default Search;