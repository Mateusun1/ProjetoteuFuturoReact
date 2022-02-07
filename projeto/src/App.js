import './App.css';
import Orçamento from './componentes/Orçamento/Orçamentos';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Membros from './componentes/Membros';
import Projetos from './componentes/Projetos';
import Footer from "./componentes/Footer"

function App() {
  return (
    <section>
      <Header/>
      <Orçamento/>
      <Membros/>
      <Projetos/>
      <Formulario/>
      <Footer/>
    </section>
  );
}

export default App;
