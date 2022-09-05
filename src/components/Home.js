import { useState, useEffect} from 'react';
import '../App.css';
import Nav from "./Nav"
import Profile from './Profile';
import Error from './Error';
import Landing from './Landing';


const App = () => {
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
        <Nav mydata={fetchUser}/>
        {!fetchStatus && <Landing />}
        {fetchStatus&& <Profile myData={profile}/>}
        {show === false && <Error />}
    </div>
  );
}

export default App;
