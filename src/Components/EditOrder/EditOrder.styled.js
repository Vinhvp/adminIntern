import styled from 'styled-components';
export const EditOrder = styled.div`
    
    background: var(--white);
    height: 100vh;
    margin: 32px 20px 26px 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.08);
    .EditOrder{
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
            &_ID,&_total{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
            }
            &_ID{
                margin: 23px 0 23px 48px;
                div:first-child{
                    margin-right: 60px;
                }
                div:nth-child(2){
                    margin-right: 109px;
                }
            }
            &_total{
                margin-right: 209px;
                div:first-child{
                    margin-left: 84px;
                }
                div:nth-child(2){
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                }
            }
        }
    }
`
