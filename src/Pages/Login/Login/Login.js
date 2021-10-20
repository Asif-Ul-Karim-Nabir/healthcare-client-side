import React from 'react';
import { Button, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {singInUsingGoogle,error,isLogin,handleNameChange,handleEmailChange,handlePasswordChange,toggleLogin,handleRegistration}= useAuth();
    return (
        <div className="login-container">
            <Row xs={1} md={2} className="g-4 w-75 mx-auto">
                <div className="login-details">
                    <h2>Healthy Hospital</h2>
                    <p>You have to create an account to see our details.<br/>So feel free register or login our website to great service.</p>
                </div>
                <div className="login-feild">
                    <form onSubmit={handleRegistration}>
                            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                            {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                            </div>}
                            <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn btn-primary">
                            {isLogin ? 'Login' : 'Register'}
                            </button> <br /> <br />
                            <Button onClick={singInUsingGoogle} variant="primary">Sign In Google</Button>
                    </form>                  
                </div>
            </Row>
        </div>
    );
};

export default Login;