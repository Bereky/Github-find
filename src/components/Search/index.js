import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import Error from '../Error/index'
import './index.css'



const Search = () => {
    const searchQuery = useContext(SearchContext)

    const [ searchParams, setSearchParams ] = useSearchParams()

    let search = {
        q: searchQuery.query
    }

    useEffect(() => {
        setSearchParams(search, {replace: true})
    }, [searchQuery.query])

    return ( 
        <>
            <Error query={search.q}/> 
        </>
     );
}
 
export default Search;