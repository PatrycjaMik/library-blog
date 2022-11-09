import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pati's blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}>About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;