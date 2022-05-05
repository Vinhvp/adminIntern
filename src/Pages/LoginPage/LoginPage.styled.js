import styled from 'styled-components';
export const LoginPage = styled.div`
    background-image: url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .logo{
        position: absolute;
        top: 32px;
        left: 44px;
        z-index: 91;
    }
    .hero-overlay{
        position: absolute;
        z-index:90;
        inset: 0;
        background-color: rgba(0,0,0,0.3);
    }
`
export const Login = styled.div`
    z-index: 92;
    width: 380px;
    height: 424px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 32px 33px;
    opacity: 0.8;
    border-radius: 2px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.08);
    background-color: rgba(61, 61, 63, 0.8);
    text-align: center;
    p{
        text-align: left;
        margin-bottom: 8px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey); 
    }
    form{
        input{
            margin-bottom: 20px;
            
        }
    }
    input{
        padding: 0 8px;
        width: 316px;
        height: 48px;
        border: none;
        background-color: var(--white-two);
        text-align: left;
        margin: 0 32px 0 0px;
    }
    h1{
        text-align: center;
        width: 92px;
        height: 36px;
        margin: 0px 0px 20px 110px;
        font-family: Montserrat;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color: var(--pale-orange);
    }
    a{
        text-align: center;
        cursor: pointer;
    }
    a:hover{
        color: var(--pale-orange); 
    }
    .forgotPass{
        width: 105px;
        height: 15px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--white);
    }
`

