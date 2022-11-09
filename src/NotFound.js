import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>wrong page</p>
            <Link to='/'>Back to main page</Link>
        </div>
     );
}
 
export default NotFound;