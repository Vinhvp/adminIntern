import styled from 'styled-components';
export const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start
    height: 100vh;
    width: 100%;
    background: var(--white-two);
`
export const Edit = styled.div`
    background: var(--white-two);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 115vh;
    width: 100vw;
    .edit{
        width: 83vw;
        height: 130vh;
        margin: 32px 20px 26px 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.08);
        background-image: url("https://style.pk/wp-content/uploads/2015/07/Fashion-Model.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.5;
    }
`