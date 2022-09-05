import { useState, useEffect} from 'react';
import Header from "../Header/index"
import Profile from '../Profile/index';
import Error from '../Error/index';
import Landing from './Landing/index';


const Home = () => {
  const [profile, setProfile] = useState();
  const [fetchStatus, setFetchStatus] = useState(false)
  const [show, setShow] = useState(null);
  

  const fetchUser = (data) => {
    setProfile(data);
    if(data.message !== "Not Found" && data.name !== null){
        setFetchStatus(true);
        setShow(true)

    }else {
      setFetchStatus(false);
      setShow(false);
    }
  }

  useEffect(() => {}, [fetchStatus]);
  useEffect(() => {}, [show]);
  return (
    <div className="home">
        <Header mydata={fetchUser}/>
        {!fetchStatus && <Landing />}
        {fetchStatus&& <Profile myData={profile}/>}
        {show === false && <Error />}
    </div>
  );
}

export default Home;
