import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="supply">
        <h1>Suplier Identification</h1>
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <table>
        <tr>
            <th>Supplier ID</th>
            <th>Supplier Hash Address</th>
            <th>Supplier Qualification</th>
        </tr>
        <tr>
            <td>a123</td>
            <td>0x5aAeb6053F3E94C9b9A09f33669435E7Ef1beAed</td>
            <td>true</td>
        </tr>
        <tr>
            <td>j456</td>
            <td>0x742d35Cc6634C0532925a3b844Bc454e4438f44e</td>
            <td>false</td>
        </tr>
        <tr>
            <td>v789</td>
            <td>0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d</td>
            <td>true</td>
        </tr>
    </table>
      <br />
      <button >Validate Supplier</button>
          
          <button >Record Supllier Identification</button>
          <button >Notify Stakeholders</button>
        <br /><div> 
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Demand</Link>

          <Link to="/order" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>Goto Order Placement & Tracking</Link> </div>
        
    </div>
  );
}
 
export default Home;