import "./index.css"

const Nav = ({mydata}) => {
    const  fetchData = (data) => {
        mydata(data);
        console.log(data)
    }
    return ( 
        <div className="nav">
            <div className="brand">
                <a href="/"  className="brand-name"><code >GITHUB FIND</code></a>
            </div>
            {/* <Search myCallBack={fetchData}/> */}
            <div className="list source">
                <a href="https://www.github.com/bereky" target="_blank"><img className="link-img" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="git_icon" rel="noreferrer"/></a>
            </div>
        </div>
     );
}
 
export default Nav;
