import SearchBar from "./Searchbar/SearchBar"
import { Link } from "react-router-dom"

export default function NavBar({ onSearch }){

    return(
        <nav>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
                 <Link to='/'>Log Out</Link> 
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

