import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import FormularioMascotas from './Components/FormularioMascota';
import RellenaFormulario from './Components/RellenaFormulario';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<FormularioMascotas />} />
          <Route path="/Formulario" element={<RellenaFormulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
