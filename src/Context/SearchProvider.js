import { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchContextProvider = (props) => {

    const [ searchQuery, setSearchQuery ] = useState('')

    const setQueryHandler = (query) => {
        setSearchQuery(query)
    }    

    const searchCtx = {
        query: searchQuery,
        setQuery: setQueryHandler
    }

    return ( 
        <SearchContext.Provider value={searchCtx}>
            {props.children}
        </SearchContext.Provider>    
     );
}
 
export default SearchContextProvider;