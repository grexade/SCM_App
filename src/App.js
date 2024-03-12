import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Supply from './Supply';
import Order from './Order';
import Inventory from './Inventory'
import Warehousing from './Warehousing'
import Tplog from './Tplog'
import Collab from './Collab'
import Quality from './Quality'
import Risk from './Risk'
import Conti from './Conti'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/supply">
              <Supply />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/ware">
              <Warehousing />
            </Route>
            <Route path="/tplog">
              <Tplog />
            </Route>
            <Route path="/collab">
              <Collab />
            </Route>
            <Route path="/quality">
              <Quality />
            </Route>
            <Route path="/risk">
              <Risk />
            </Route>
            <Route path="/conti">
              <Conti />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          
        </div>
        
      </div>
    </Router>
  );
}

export default App;