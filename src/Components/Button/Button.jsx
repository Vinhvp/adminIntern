import React from 'react';
import StyledComponents from 'styled-components';
import * as styled from './Button.styled';

const Button = (props) => {
    return ( 
        <>
            <styled.Button onClick={props.onClick} size={props.size} m={props.margin} bgcolor={props.bgcolor} color={props.color} w={props.w} h={props.h} p={props.p}>
                {props.name}
            </styled.Button>
        </>
     );
}
Button.defaultProps ={
    size: '17px'
}
export default Button;