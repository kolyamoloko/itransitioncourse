import React from 'react';
import Button from 'react-bootstrap/Button';
import {Nav} from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';


function Login() {
  return (
    <Nav className="flex-column">
        <Button variant="light"> 
        Sign in with Google <FcGoogle/>
        </Button>
        <Button variant="light"> 
            Sign in with Github <AiFillGithub/>
        </Button>
    </Nav>
  )
}

export default Login