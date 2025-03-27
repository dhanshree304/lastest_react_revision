
import { Link } from "react-router-dom";
import "./App.css";

import AllRoutes from "./Components/AllRoutes";





function App() {
  
  return (
    <div className="App">
      <Link to="/product/add">
        <button>Add Product</button>
      </Link>
      <AllRoutes />
    </div>
  );
}

export default App;
