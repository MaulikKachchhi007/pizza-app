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
import Index from './screens/Admin/Index';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/orders" element={<OrderScreen />} />
        <Route exact path="/Admin" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
