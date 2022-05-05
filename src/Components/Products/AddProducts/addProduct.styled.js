import styled from 'styled-components';
export const AddProduct = styled.div`  
    background: var(--white);
    height: 100vh + 50vh;
    margin: 32px 20px 26px 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.08);
    width: 80vw;
    .EditProducts{
        &Headers{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid var(--white-three);
            align-items: center;
            font-family: Montserrat;
            font-size: 12px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: var(--greyish);
            height: 64px;
            &_Products{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                width: 1316px;
                margin: 0;
                div:first-child{
                    margin-left: 48px;
                    margin-right: 281px;
                }
                div:nth-child(2){
                    margin-right: 165px;    
                }
                div:nth-child(3){
                    margin-right: 176px;
                    width: 84px;
                }
            }
        }
    }
`
export const Header = styled.div`
    height: 184px;
    width: 85vw;
    padding: 32px 20px 0 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .Header_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
        margin-right: 100px;
        h1{
            width: 400px;
            height: 36px;
            font-family: Montserrat;
            font-size: 28px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.29;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
        &_login{
            display: flex;
            align-items: center;
            justify-content: space-between;
            div{
                margin-left: 32px;
            }
            div:nth-child(3){
                margin: 0;
            }
            div:nth-child(5){
                margin-right: 35px;
            }
        }
        .img_profile{
            margin-right: 16px;
            overflow: hidden;
            width: 48px;
            height: 48px;
            background: var(--white-two);
            border-radius: 50%;
            display: inline-block;
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
                object-position: center right;
                transform: translateX(-5px);
            }
        }
        h4{
            width: 63px;
            height: 24px;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
`

export const orderForm = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

`
export const itemOrderForm = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
    h3{
        width: 54px;
        height: 14px;
        margin-right: 50px;
        margin-left: 70px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
        color: var(--dark-grey);
        transform: translateY(17px);
    }
    .uploadBox{
        position: relative;
        .custom-file-input {
            color: transparent;
        }
        .custom-file-input::-webkit-file-upload-button {
        visibility: hidden;
        }
        .custom-file-input::before {
        content: '';
        color: black;
        display: inline-block;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
        width: 180px;
        height: 270px; 
        position: absolute;
        z-index: 99;
        }
        .custom-file-input:hover::before {
        border-color: black;
        }
        .custom-file-input:active {
        outline: 0;
        }
        .custom-file-input:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
        }
    }

`

export const Input = styled.input`
    width: 958px;
    height: 48px;
    padding: 14px 543px 14px 16px;
    border-radius: 2px;
    border: solid 1px var(--white--two);
    background-color: var(--white);
    ::placeholder{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: var(--greyish);
    }
`