import React, { useState } from 'react';
import * as styled from './LoginPage.styled';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
const axios = require('axios');
const Login = () => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    });
    const forgotHandle = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:7000/admin/forgotPassword')
        .then((res)=>{
            console.log(res);   
        })
    }
    const handleChange = (e)=>{
        const valued = e.target.value;
        setValue(prev => {
            return {...prev,
            [e.target.name]: valued}
        })
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(value.email, value.password);
        axios.post('http://localhost:7000/admin/login',{
            email: value.email,
            password: value.password
        })
        .then((res)=>{
            console.log(res);
            if(res.data.status == 'good'){
                alert('Login successfull !!');
                localStorage.setItem('token',res.data.token);
                window.location.replace('/admin/dashboard');
            }
            else{
                alert('Login failed !!');
                window.location.replace('/');
            }
        })
    }
    return ( 
    <styled.LoginPage>
        <div className='hero-overlay'></div>
        <a href="#" className='logo'>
            <img src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/E9B4FBC7-DE0F-4A26-B025-4BD1602CCCD6.svg" alt="" />
        </a>
        <styled.Login>
            <h1>Log In</h1>
            <form method='post'>
                <p>EMAIL</p>
                <input onChange={handleChange} name='email' label='EMAIL' type='email' placeholder='aware@sample.com'/>
                <p>PASSWORD</p>
                <input onChange={handleChange} name='password' style={{marginBottom: '40px'}}label='PASSWORD' type='password' placeholder='Enter your password..'/>
                <Button onClick={handleLogin} margin='0 0 32px 0' color='var(--white-two)' name='Log in' bgcolor='var(--pale-orange)' w='316px' h='48px'></Button>
            </form>
            <a onClick={forgotHandle} className='forgotPass'>Forgot password</a>
        </styled.Login>

        
    </styled.LoginPage>
    );
}

export default Login;