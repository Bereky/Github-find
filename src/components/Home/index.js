import { useState, useEffect, Fragment} from 'react';
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
    <Fragment>
        <Header mydata={fetchUser}/>
        <Landing />
        {fetchStatus&& <Profile myData={profile}/>}
        {show === false && <Error />}
    </Fragment>
  );
}

export default Home;
