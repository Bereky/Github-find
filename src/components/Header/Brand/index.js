import { Link } from 'react-router-dom';
import './index.css'

const Brand = () => {
    return ( 
        <div className="d-flex justify-content-center align-items-center brand">
            <Link to='/' className="brand-name">GITHUB FIND</Link>
        </div>
     );
}
 
export default Brand;