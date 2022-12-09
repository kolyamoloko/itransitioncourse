import React from 'react';
import Button from 'react-bootstrap/Button';
import {Nav} from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';


function Login() {

  const github = () =>{
    window.open("https://backend-production-3201.up.railway.app/auth/github",
    )
  }
  
  const google = () =>{
    window.open("https://backend-production-3201.up.railway.app/auth/github",
    )
  }

  return (
    <Nav className="flex-column">
        <Button variant="light" onClick={google}> 
        Sign in with Google <FcGoogle/>
        </Button>
        <Button variant="light" onClick={github}> 
            Sign in with Github <AiFillGithub/>
        </Button>
    </Nav>
  )
}

export default Login