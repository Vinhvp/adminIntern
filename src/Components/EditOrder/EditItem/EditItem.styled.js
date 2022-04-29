import styled from 'styled-components';
export const EditItem = styled.div`
    display: flex;
    flex-direction: row;
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
    margin: 0 0 0 47px;
    width: 1230px;
    padding: 12px 0 0;
    background: var(--white);
    .Action{
        display: flex;
        align-items: center;
    }
    .OrderDate{
        margin-left: 80px;
    }
    .Name{
        margin-left: 48px;
    }
    .Price{
        margin-left: 325px;
    }
    .Status{
        margin-left: 77px;
        margin-right: 112px;
        
    }
`