import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import './index.css';

const Profile = ({myData}) => {

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
                            <div className="location my-3">
                                <LocationOnIcon fontSize='large' sx={{color: "white"}}/>
                                <span className='geo-label'>{myData.location? (myData.location): (<p>Unavailable</p>)}</span>
                            </div>
                        </div>
                        <div>
                            <div className="links">
                                <a href={myData.html_url}>
                                    <IconButton>
                                        <GitHubIcon fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </a>
                                <a href={`https://${myData.blog}`} >
                                    <IconButton>
                                        <PublicIcon fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </a>
                                <a href={`https://twitter.com/${myData.twitter_username}`} >
                                    <IconButton>
                                        <TwitterIcon  fontSize='large' sx={{color: "white"}}/>
                                    </IconButton>
                                </a>
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