import React from 'react';
import * as styled from './EditOrder.styled';
import EditItem from './EditItem/EditItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const EditOrder = () => {
    return ( <>
    
        <styled.EditOrder>
            <div className='EditOrderHeaders'>
                <div className='EditOrderHeaders_ID'>
                    <div>ORDER ID</div>
                    <div>ORDER DATE</div>
                    <div>DETAIL</div>
                </div>
                
                <div className="EditOrderHeaders_total">
                    <div>TOTAL</div>
                    <div>
                        <div>STATUS</div>
                        <div><ArrowDropDownIcon></ArrowDropDownIcon></div>
                    </div>
                </div>
            </div>
            <EditItem></EditItem>
        </styled.EditOrder>
    </> );
}
 
export default EditOrder;