import React from 'react';
import * as styled from './EditItem.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const axios = require('axios');
const EditItem = () => {
    axios.get('/')
    return ( 
        <styled.EditItem>
            <div>AB123</div>
            <div className='OrderDate'>Today, 8th Aug, 2018</div>
            <div className='Name'>Collete Stretch Linen(M)x1</div>
            <div className='Price'>$60.00</div>
            <div className='Status'>complete</div>
            <div className='Action'>
                <div>Action</div>
                <div style={{transform: 'translateY(5px)'}}>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </div>
            </div>
        </styled.EditItem>
     );
}
 
export default EditItem;