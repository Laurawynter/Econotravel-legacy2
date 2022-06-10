import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';
import FormularioReserva from './components/FormularioReserva';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
      
        <Router />
        <FormularioReserva/>
        <Footer />
  
         </div>
    </BrowserRouter>
   );
}
export default App;