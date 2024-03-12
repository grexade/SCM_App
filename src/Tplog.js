import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
        <h1>Transportation & Logistics</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Order ID</th>
            <th>Order Hash Address</th>
            <th>Quantity</th>
            <th>Arrived for Pickup</th>
        </tr>
        <tr>
            <td>1</td>
            <td>0x123456789</td>
            <td>456700</td>
            <td>Enroute to warehouse</td>
        </tr>
        <tr>
            <td>2</td>
            <td>0x987654321</td>
            <td>34500</td>
            <td>Delivered to Site</td>
        </tr>
        <tr>
            <td>3</td>
            <td>0xABCDEF123</td>
            <td>567800</td>
            <td>At Warehouse</td>
        </tr>
    </table>
      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Prepare Shipment</button>
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Generate Document</button>
        <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Optimize Route</button>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Stakeholders</button>
        <br /><div> 
        <Link to="/ware" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Warehousing</Link>

          <Link to="/collab" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Collaboration & Information Sharing</Link> </div>
        
    </div>
  );
}
 
export default Home;