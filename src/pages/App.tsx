import Personagem from './Personagem/Lista';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './global.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Personagem />
      <Footer />
    </div>
  );
}

export default App;

