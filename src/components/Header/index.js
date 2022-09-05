import Form from "./Form";
import Brand from "./Brand";
import Github from "./Github";
import "./index.css"

const Nav = () => {
    return ( 
        <nav className="nav">
            <Brand />
            <Form/>
            <Github />
        </nav>
     );
}
 
export default Nav;
