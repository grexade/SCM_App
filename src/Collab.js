import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
        <h1>Collaboration & Information Sharing</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Establish Channels</button>
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Exchange Information</button>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Apply Access Control</button>
        <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Record Communication</button>
        <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Configure Notification</button>
        <br /><div> 
        <Link to="/tplog" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Transportation & Logistics</Link>

          <Link to="/quality" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Quality Assurance</Link> </div>
        
    </div>
  );
}
 
export default Home;