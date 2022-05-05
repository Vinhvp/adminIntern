import styled from 'styled-components';
export const EditItem = styled.div`
    height: 80vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin: 0 0 0 18px;
    width: 95%;
    padding: 12px 0 0;
    background: var(--white);
    .pagination{
        position: absolute;
        left: 30px;
        bottom: 20px;
        width: 181px;
        height: 20px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: var(--charcoal-grey);
    }
    .pagination_bread{
        padding-right: 3px;
        width: 111px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: var(--charcoal-grey);
        bottom: 20px;
        right: 30px;
    }
`
export const orderItem = styled.div`
    display: flex;
    text-align:left;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: Montserrat;
    font-size: 14px;
    margin-bottom: 1px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    padding: 12px;
    color: var(--charcoal-grey);
    width: 100%;
    margin-left: 47px;
    .Action{
        display: flex;
        align-items: center;
    }
    .OrderDate{
        width: 184px;
        margin-left: 58px;
        padding-left: 18px;
    }
    .Name{
        width: 300px;
        padding-left: 18px;
    }
    .Price{
        width: 37px;
        margin-left:184px;
    }
    .Status{
        margin-left: 77px;
        margin-right: 112px;
        border-radius: 12px;
        background-color: var(--pea-green);
        text-align: center;
        color: var(--white);
        width: 70px;
        height: 20px;
    }
`