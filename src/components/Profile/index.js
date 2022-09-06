import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

const Profile = ({myData}) => {

    const twitter = `https://twitter.com/${myData.twitter_username}`

    return ( 
        <div className="profile-container">
            <div className="profile">
                <div className='avatar'>
                    <img src={myData.avatar_url} className="avatar-img" alt="avatar" />
                </div>
            </div>
        
                <div className="profile-data">
                    <div className="main-data">
                        <div className="name">
                            <h1 className="name_main my-2">{myData.name}</h1>
                            <h2 className="username my-2"><code>@{myData.login}</code></h2>
                            {/* <div className="location my-3">
                                <LocationOnIcon fontSize='large' sx={{color: "white"}}/>
                                <span className='geo-label'>{myData.location? (myData.location): (<p>Unavailable</p>)}</span>
                            </div> */}
                        </div>
                        <div>
                            <div className="links">
                                <Link to={myData.html_url} >
                                    <IconButton className="link-icon">
                                        <GitHubIcon fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </Link>
                                <Link to={myData.blog} >
                                    <IconButton className="link-icon">
                                        <PublicIcon fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </Link>
                                <Link to={twitter} >
                                    <IconButton className="link-icon">
                                        <TwitterIcon  fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </Link>
                                {/* <a href={twitter} className="twitter"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png" className="link-img" alt="twitter_icon" /></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="misc-data">
                        <div className="misc-info followers">
                            <div className='info info-number'>{myData.followers}</div>
                            <div className='info info-head'>Followers</div>
                        </div>
                        <div className="misc-info following">
                            <div className='info info-number'>{myData.following}</div>
                            <div className='info info-head'>Following</div>
                        </div>
                        <div className="misc-info repositories">
                            <div className='info info-number'>{myData.public_repos}</div>
                            <div className='info info-head'>Repositories</div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Profile;