import '../App.css';

const Profile = ({myData}) => {

    const twitter = `https://twitter.com/${myData.twitter_username}`

    return ( 
        <div className="profile-container">
            <div className="profile">
                <div className='avatar'>
                    <img src={myData.avatar_url} className="avatar-img" alt="avatar" />
                </div>
                <div className="profile-data">
                    <div className="main-data">
                        <div className="name">
                            <h1>{myData.name}</h1>
                            <h2><code>@{myData.login}</code></h2>
                            <div className="location">
                                <img src='https://icon-library.com/images/geolocation-icon-png/geolocation-icon-png-29.jpg' className='geo-icon' alt="geo_icon"/>
                                <span className='geo-label'>{myData.location? (myData.location): (<p>Unavailable</p>)}</span>

                            </div>
                        </div>
                        <div className="links">
                            <a href={myData.html_url} className="gitub"><img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" className="link-img" alt="github_icon" /></a>
                            <a href={myData.blog} className="blog"><img src="https://icon-library.com/images/icon-web-site/icon-web-site-20.jpg" className="link-img" alt="website_icon" /></a>
                            <a href={twitter} className="twitter"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png" className="link-img" alt="twitter_icon" /></a>
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
        </div>
     );
}
 
export default Profile;