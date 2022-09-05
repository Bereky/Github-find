import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/index'
import Search from "../Search/index";
import Home from "../Home";
import SearchContextProvider from "../../Context/SearchProvider";

const App = () => {
    return (
        <SearchContextProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/search" element={<Search />}/>
                </Routes>
            </Router>
        </SearchContextProvider>
    );
}
 
export default App;