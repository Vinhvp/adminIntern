import styled from 'styled-components';
export const NavB = styled.div`
    height: 100%;
    width: 220px;
    box-shadow: 1px 0 0 0 var(--white-three);
    background-color: var(--white-two);
    text-align: left;
    .logo > img{
        margin: 32px 0 44px 44px;
        width: 132px;
        height: 27.5px;
    }
    .Navleft_menu{
        &_item{
            position: relative; 
            width: 220px;
            height: 48px;
            padding-left: 20px;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: var(--charcoal-grey);
            display: flex;
            align-items: center;
            div{
                margin-right: 20px;
            }
        }
        &_item:hover{
            background: var(--pale-orange);
            opacity: 0.5;
            cursor:pointer;
        }
    }
    .active{
        color: var(--pale-orange);
    }
    .active:hover{
        background: var(--white-two);
        opacity: 1;
        cursor:pointer;
    }
    .active::after{
        position: absolute;
        top: 10px;
        left: 0;
        border: 3px solid var(--pale-orange);
        height: 20px;
        content:"";
    }
`