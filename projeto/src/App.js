import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Membros from './componentes/Membros';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer';

function App() {
  return (
    <section>
      <Header/>
      <Membros/>
      <Projetos/>
      <Formulario/>
      <Footer/>
    </section>
  );
}

export default App;
