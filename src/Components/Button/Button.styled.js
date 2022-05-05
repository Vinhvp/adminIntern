import styled from 'styled-components';

export const Button = styled.button`
    margin: ${props => props.m};
    width: ${props => props.w};
    height: ${props => props.h};
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.12);
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: bold;
    font-family: Montserrat;
    cursor: pointer;
    border: none;
    &:hover{
        opacity: 0.7;
    }

`