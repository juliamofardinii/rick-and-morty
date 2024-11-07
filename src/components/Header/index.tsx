import { Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'; // Importar o componente Image do react-bootstrap
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div style={{ paddingBottom: '20px' }}> {/* Padding abaixo do header */}
      <Navbar style={{ backgroundColor: '#00C4D8' }} expand="lg" className="d-flex justify-content-between px-4">
        {/* Logo no lado esquerdo */}
        <Navbar.Brand>
          <Image src={logo} alt="Logo" height="40" className="mr-2" /> {/* Tamanho do logo ajustável */}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;


