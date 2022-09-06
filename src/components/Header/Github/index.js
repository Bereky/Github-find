import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css'

const Github = () => {
    return ( 
        <div className="github-icon h-100 m-auto">
            <Link to="https://www.github.com/bereky" >
                <IconButton className="git-icon">
                    <GitHubIcon fontSize='large' sx={{color: "white"}}/>
                </IconButton>
            </Link>
        </div>
     );
}
 
export default Github;