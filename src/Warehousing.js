import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Warehousing</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}

      <table id="stockTable">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>Product A</td>
                        <td>100</td>
                        <td>In Stock</td>
                    </tr>
                    <tr>
                        <td>Product B</td>
                        <td>50</td>
                        <td>Almost Out of Stock</td>
                    </tr>
                    <tr>
                        <td>Product C</td>
                        <td>0</td>
                        <td>Out of Stock</td>
                    </tr>
                    
                </tbody>
            </table>

      <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Verify Shipment</button>
          
          
          <button style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          
        }}>Notify Stakeholders</button>
        <br /><div> 
        <Link to="/inventory" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Inventory Management</Link>

          <Link to="/tplog" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Transportation & Logistics</Link> </div>
        
    </div>
  );
}
 
export default Home;