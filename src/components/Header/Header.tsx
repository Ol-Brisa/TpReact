import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigate = useNavigate();

    return(
        <>
        <Navbar expand="lg" bg="light" data-bs-theme="light" className="justify-content-center" >
        <Container>
          <Navbar.Brand onClick={ () => navigate('/')}>
            <Icon.Cassette
              color="royalwhite"
               size={40}
              className="bi bi-cassette"
            />
          </Navbar.Brand>
          <Nav  className="me-auto" activeKey="/home" variant="underline">
            <Nav.Link onClick={ () => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={ () => navigate('componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={ () => navigate('administracion')}>Administracion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    )
}
export default Header;