import './App.css';
import { Outlet } from "react-router-dom"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import store from './components/stores/store';

function App() {
  return (
    <div>
    <Provider store={store}>
      <Navbar />
        <Outlet />
      <Footer />
    </Provider>
    </div>
  );
}

export default App;
