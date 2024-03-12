import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SCM System</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Add</Link>
        <Link to="/" >Role</Link>
        <Link to="/" >Status</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Login/Signup</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;