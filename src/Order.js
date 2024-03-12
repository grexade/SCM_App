import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Order Placement and Tracking</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Order ID</th>
            <th>Order Hash Address</th>
            <th>Quantity</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>1463</td>
            <td>0x123456789</td>
            <td>456700</td>
            <td>Processing</td>
        </tr>
        <tr>
            <td>2454</td>
            <td>0x987654321</td>
            <td>34500</td>
            <td>Shipped</td>
        </tr>
        <tr>
            <td>3343</td>
            <td>0xABCDEF123</td>
            <td>567800</td>
            <td>Delivered</td>
        </tr>
        <tr>
            <td>4353</td>
            <td>0x789012345</td>
            <td>7800</td>
            <td>At Linehaul</td>
        </tr>
        <tr>
            <td>5353</td>
            <td>0x389019855</td>
            <td>1800</td>
            <td>Cancelled</td>
        </tr>
    </table>
      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Validate Order</button>
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Record Order Placement</button>
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Stakeholders</button>
        <br /><div> 
        <Link to="/supply" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto SupplierID</Link>

          <Link to="/inventory" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Inventory Management</Link> </div>
    </div>
  );
}
 
export default Home;