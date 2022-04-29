import styled from 'styled-components';
export const Header = styled.div`
    height: 184px;
    width: 85.6vw;
    padding: 32px 20px 0 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    .Header_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
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
        &_setting{
            display: flex;
            align-items: center;
            justify-content:space-between;
            flex-direction: row;
            h4{
                margin-right: 20px;
                width: 101px;
                height: 18px;
                font-family: Montserrat;
                font-size: 12px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                color: var(--greyish);
            }
            &Date{
                display: flex;
                align-items: center;
                justify-content:flex-start;
                flex-direction: row;
            }
            &Search{
                display: flex;
                align-items: center;
                justify-content:flex-start;
                flex-direction: row;
            }

        }
    }

`
export const SearchBox = styled.div`
    width: 280px;
    height: 48px;
    background: var(--white);
    border: solid 1px var(--white-four);
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Input = styled.input`
    font-size: 16px;
    border: none;
    width: 280px;
    outline: 0;
    height: 30px;
    border-radius: 17px;
    overflow:hidden;
    margin-left: 5px;
    padding-right: 5px;
    background: var(--white);
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