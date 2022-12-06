import React from 'react'
import Container from 'react-bootstrap/Container'
import {Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavbarComponent({user}) {
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand >All-movie-reviews</Navbar.Brand>
        </Link>
        {user ? 
        (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <Link to="/login">Mark Otto</Link>
            </Navbar.Text>
              <Link to="/login">
                <Button variant="dark">
                  Logout
                </Button>
              </Link>
          </Navbar.Collapse>
        )
        : (<Link to="/login"><Button>Login</Button></Link>)
      }
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;