import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Inventory Management</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
        </tr>
        <tr>
            <td>1454</td>
            <td>Steel Beams</td>
            <td>100</td>
        </tr>
        <tr>
            <td>2677</td>
            <td>Concrete Blocks</td>
            <td>500</td>
        </tr>
        <tr>
            <td>3878</td>
            <td>Electrical Cables</td>
            <td>300</td>
        </tr>
        <tr>
            <td>4987</td>
            <td>Computers</td>
            <td>50</td>
        </tr>
        <tr>
            <td>5987</td>
            <td>Safety Helmets</td>
            <td>200</td>
        </tr>
        <tr>
            <td>6654</td>
            <td>Welding Machines</td>
            <td>10</td>
        </tr>
        <tr>
            <td>7655</td>
            <td>Architectural Drawings</td>
            <td>25</td>
        </tr>
        <tr>
            <td>8765</td>
            <td>Surveying Instruments</td>
            <td>15</td>
        </tr>
        <tr>
            <td>9655</td>
            <td>Excavators</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1053</td>
            <td>Crane Systems</td>
            <td>8</td>
        </tr>
    </table>
      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Validate Inventory</button>
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Record Inventory Management</button>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Stakeholders</button>
        <br /><div> 
        <Link to="/order" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Order Placement & Tracking</Link>

          <Link to="/ware" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Warehousing</Link> </div>
        
    </div>
  );
}
 
export default Home;