import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import Error from '../Error/index'
import ReactLoading from 'react-loading';
import Loading from '../Helper/Loading'
import './index.css'

const Search = () => {
    const searchQuery = useContext(SearchContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ loading, setLoading ] = useState()

    let search = {
        q: searchQuery.query
    }

    useEffect(() => {
        setSearchParams(search, {replace: true})

    }, [searchQuery.query])

    return ( 
        <div className='d-flex justify-content-center flex-column align-items-center search'>
            {/* <ReactLoading type='bars' color='#353536' height={300} width={100} className='h-100 m-auto'/> */}
            {/* <Loading /> */}
            <Error query={search.q}/> 
        </div>
     );
}
 
export default Search;