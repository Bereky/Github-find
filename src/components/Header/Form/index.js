import { useContext, useState} from "react"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./index.css"
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";

const Search = ({myCallBack}) => {
    const [username, setUsername] = useState("");
    const navigate =  useNavigate()
    const searchQuery = useContext(SearchContext)

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        searchQuery.setQuery(username)
        navigate("/search")
    }


    return (
        <div className="d-flex justify-content-center align-items-center position-relative search-form m-auto">
            <form onSubmit={submitForm} className="d-flex w-100 h-100" >
                <input value={username} onChange={updateUsername} type="text" placeholder="Enter github username" className="search-input " required/>
                <IconButton className="position-absolute search-button" type="submit">
                    <SearchIcon fontSize="large"/>
                </IconButton>
            </form> 
        </div>
     );
}
 
export default Search;