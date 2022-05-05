import styled from 'styled-components';
export const EditProducts = styled.div`  
    background: var(--white);
    height: 109vh;
    margin: 32px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.08);
    width: 85.3vw;
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