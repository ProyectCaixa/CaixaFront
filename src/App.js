
import './App.css';
import Header from './Header/Header';
import Home from './Home/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Informacion from './Home/informacion';
import Info_Cuenta from './Home/Info_Cuent';
import Info_Perfil from './Home/perfil/perfil';
import Tareas_Pendientes from './Home/perfil/tareas_Pendientes';
import Diseño_Cal from './Home/perfil/citas';
function App() {
  return (
    <div className="App" >


<BrowserRouter>

      <Header />
      <Routes>
      <Route exact path="/" element={< Informacion/>} />
      <Route exact path='/cuenta_bancarias' element={<Info_Cuenta/> }/>
      <Route exact path='/gestor' />
      <Route exact path='/gestor/tareas_pendientes' element={<Tareas_Pendientes/>}/>
      <Route exact path='/gestor/perfil' element={<Info_Perfil/>}/>
      <Route exact path='/gestor/citas' element={<Diseño_Cal/>}/>
      
      
      


      </Routes>



</BrowserRouter>


     
    </div>
  );
}

export default App;
