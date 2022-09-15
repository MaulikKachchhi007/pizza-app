import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
