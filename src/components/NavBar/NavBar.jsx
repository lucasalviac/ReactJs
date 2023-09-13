import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({ children }) {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAABubm7JycnAwMC0tLT8/Pzc3NzExMT39/dVVVWenp5JSUnR0dGsrKx+fn7r6+vx8fE5OTkODg4mJiYtLS2GhoZ0dHTk5OSNjY0/Pz9eXl4eHh5OTk5oaGgYGBiWlpZwwknHAAAC5ElEQVRoge3baXOrIBQGYFxxA1xi4hbj//+VtVmmTaryYiBz5w7na5En4BEXTgn5aBQsSE+lk0UfE2MacZFVziPMy2HO/NQtDz/mNc4GybhhQdt3B2cxTIhh0TAu+q5aJk3AYZxH0ympt0TdcEGD9pQBoj648NJjf8HJ9+GY+t8X5b7YRzZe0CbDTnIXXFCPi3OtPLH74TCnUTpmeyd2L1yIbGUdMAsXnWYVhVP9Lga7FrawhS1sYQtb+L+CH+81H4RLNw1YSD4IH3qRRs2js4/A3Sg4y+OnzszCh/PY+vSFNApX5dlNPZqHq51phy91IrhHlwZpDL6Mk89yqCtdcHdKffkgdcJV33KmJr4JV9lpChQH+S58FlOUx+v5agz23iQtbGELW9jCFrawhS1sYQtb+N+G4yYKXsI8HAZiY1/QGMwknxEMwTTZZg3BYStjzcCNdLhmYIpUYxiAKbaPrx0uwJoF7TC6ub70m6nnP0WU4DC8uf5yHOUbGQnABeo+wQXfnicABi7gP3Ccyi4DORxvVlItw0yeFXI4kPbxB+ZAWzms8EX9foRA2krhWKEi53bECWorhXPcvcFHrK0UZoowmhJS2FODG7QiTDcMp6LOqb7MqyTcWArjXTkZmtEQnOMLlyAh/iulcIg889yCk0gjrHCPoCrVaXK4Qbs6EDLqhAk615wQ6JEQhsETN8SE4IkIPfpgQ54HTOStlGDoLCffLTWPGLmxD9d6AYVaT4rAwK39NgB84XLArWlZjxE8NfdI0H3U7WWE3VvhC/sRdAnx1zvpfqYNrs/GTvE18rVbbfqrEbpmZrg7B+v/9jAcm99NCrA83FeC53N4fLpghjN/TU5syJ2iO0dIg2Nf1nXdjVPULPwd+u8GhTMMB5LYkwF3M/3v4Rpx5U/WoyFXNmZhzN3+RsQNuvOb3toLVGIin5+CLq1zpeq6sSua6eU7r6vn2zhkB+1YV041JIKzd+uJtuILL6IuDn41ljgAAAAASUVORK5CYII=" alt="Icono de la página" width={50} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Sección 1</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Categoría 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Categoría 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Categoría 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contacto
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <CartWidget>
                {children}                
            </CartWidget>
                        
        </Navbar>
    );
}

export default NavBar;