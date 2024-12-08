import React from 'react'
import LoginPage from '../components/Login'
import SignupPage from '../components/Signup'
import { useParams } from 'react-router-dom'

function Login() {
    
    const { userType } = useParams();

  return (
    <div>

        { 
            userType === "existing" ? <LoginPage /> : null
        }

        { 
            userType === "new" ? <SignupPage /> : null
        }
        
    </div>
  )
}

export default Login