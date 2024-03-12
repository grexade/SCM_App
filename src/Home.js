import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
        <h1>Demand Planning</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      <button>Validate Forecast</button>
      <button>Record Demand Forecast</button>
      <button>Notify Stakeholders</button>
        <br />
        <Link to="/supply" style={{ 
          color: 'white', 
          backgroundColor: '#008080',
          borderRadius: '8px' 
        }}>   Goto SupplierID</Link>
    </div>
  );
}
 
export default Home;