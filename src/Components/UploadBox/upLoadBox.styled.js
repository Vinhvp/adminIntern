import styled from 'styled-components';
export const uploadBox = styled.div`

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
    .upload{
        position: absolute;
        left: 50px;
        top: 110px;
        width: 100px;
        height: 22px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.83;
        letter-spacing: normal;
        color: var(--greyish);
    }

    img{
        position: absolute;
        width: 180px;
        height: 270px;
        object-fit: cover;
        left: 10px;
        top: 5px;
    }
`