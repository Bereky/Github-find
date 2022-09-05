import Search from "./Search";
import "./index.css"
import Brand from "./Brand";
import Github from "./Github";

const Nav = ({mydata}) => {
    const  fetchData = (data) => {
        mydata(data);
        console.log(data)
    }

    return ( 
        <nav className="nav">
            <Brand />
            <Search myCallBack={fetchData}/>
            <Github />
        </nav>
     );
}
 
export default Nav;
