import { Link } from 'react-router-dom';

const Nav1 = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/BlogForm">About</Link>
          </li>
       </ul>
 </nav>
 );
};

export default Nav1