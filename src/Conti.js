import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
        <h1>Continous Improvement</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Evaluate Risk</button>
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Risk</button>
        <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Deploy Mitigation</button>
        <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Update Dashboard</button>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Stakeholders</button>
        <br /><div> 
        <Link to="/risk" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Risk Management</Link>

          </div>
        
    </div>
  );
}
 
export default Home;