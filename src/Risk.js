import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Risk Management</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Risk ID</th>
            <th>Risk Description</th>
            <th>Risk Status</th>
        </tr>
        <tr>
            <td>1045</td>
            <td>Budget Overrun</td>
            <td>High</td>
        </tr>
        <tr>
            <td>2343</td>
            <td>Supply Chain Disruption</td>
            <td>Moderate</td>
        </tr>
        <tr>
            <td>3543</td>
            <td>Technical Challenges</td>
            <td>Low</td>
        </tr>
        <tr>
            <td>4344</td>
            <td>Regulatory Changes</td>
            <td>High</td>
        </tr>
    </table>
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
        <Link to="/quality" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Quality Assurance</Link>

          <Link to="/conti" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Continous Improvement</Link> </div>
        
    </div>
  );
}
 
export default Home;