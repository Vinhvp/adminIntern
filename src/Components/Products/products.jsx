import React from 'react';
import * as styled from './products.styled';
import EditProducts from './EditProducts/editproducts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Products = () => {
    return ( <>
    
        <styled.EditProducts>
            <div className='EditProductsHeaders'>
                <div className='EditProductsHeaders_Products'>
                    <div>PRODUCTS</div>
                    <div>SOLD</div>
                    <div>DATE ADDED</div>
                    <div>PROFIT($)</div>
                </div>
            </div>
            <EditProducts></EditProducts>
        </styled.EditProducts>
    </> );
}
 
export default Products;