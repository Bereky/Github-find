import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css'

const Github = () => {
    return ( 
        <div className="github-icon h-100 m-auto">
            <a href="https://www.github.com/bereky">
                <IconButton className="git-icon">
                    <GitHubIcon fontSize='large' sx={{color: "white"}}/>
                </IconButton>
            </a>
        </div>
     );
}
 
export default Github;