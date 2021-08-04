import react, { Children } from 'react';
import { Navbar, Container} from 'react-bootstrap';

const Header = ({children}) => (
   

        <div className='checkout-header'>
            <Navbar bg="dark" expand='sm' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">{children}</Navbar.Brand>
                </Container>
            </Navbar>
        </div>


)

export default Header;
