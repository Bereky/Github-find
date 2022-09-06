import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import Error from '../Error/index'
import ReactLoading from 'react-loading';
import Loading from '../Helper/Loading'
import Profile from '../Profile/index'
import './index.css'
import axios from 'axios';

const Search = () => {
    const searchQuery = useContext(SearchContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ profileInfo, setProfileInfo ] = useState()
    const [ loading, setLoading ] = useState()
    const [error, setError ] = useState()

    let search = {
        q: searchQuery.query
    }

    useEffect(() => {
        setSearchParams(search, {replace: true})
        setError(false)
        setLoading(true)
        axios.get(`https://api.github.com/users/${search.q}`)
            .then((res) => {
                setProfileInfo(res.data)
            })
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
        
            
    }, [searchQuery.query])

    return ( 
        <div className='d-flex justify-content-center flex-column align-items-center search'>
            {loading && <ReactLoading type='bars' color='#353536' height={300} width={100} className='h-100 m-auto'/>}
            {/* <Loading /> */}
            {profileInfo && <Profile myData={profileInfo}/>}
            {error && <Error query={search.q}/>} 
        </div>
     );
}
 
export default Search;