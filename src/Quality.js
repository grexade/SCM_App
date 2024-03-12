import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Quality Assurance</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Item ID</th>
            <th>Quality Standard</th>
            <th>Quantity Status</th>
        </tr>
        <tr>
            <td>1233</td>
            <td>ISO 9001:2015</td>
            <td>Checked</td>
        </tr>
        <tr>
            <td>2766</td>
            <td>ASTM A36</td>
            <td>Verified</td>
        </tr>
        <tr>
            <td>7663</td>
            <td>CE Marking</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>9084</td>
            <td>IEEE 802.11</td>
            <td>Inspected</td>
        </tr>
    </table>
      <button >Activate Quality Inspection</button> 
        <button >Perform inspections</button>
        <button >Implememt Actions</button>
        <button >Record Outcomes</button>
        <button >Notify Stakeholders</button>
        <br /><div> 
        <Link to="/collab" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Collaboration & Infromation Sharing</Link>

          <Link to="/risk" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Risk Management</Link> </div>
        
    </div>
  );
}
 
export default Home;