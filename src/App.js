//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/fonts/fonts.css';
import './assets/css/menumaker.css';
import Header from "./components/Header/header";
import Layout from "./pages/Layout";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
     <Router>
      <Header />
      <Layout />
       <Footer />
    </Router>
    </>
  );
}
export default App;
