import React from 'react';
import * as styled from './NavB.styled';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
const NavB = (props) => {
   const clickHandle = (e)=>{
       const isActive = document.getElementsByClassName('name active')
       if(Boolean(isActive)){
           for(let i = 0 ; i<isActive.length; i++){
               isActive[i].classList.remove('active');
            }
        }
        e.target.className += ' active'
        props.setNavbar(e.target.id);
   }

    
    
    return ( 
        <>
            <styled.NavB>
                <a href="/admin/dashboard" className='logo'>
                    <img src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/005DB001-A624-4740-B56C-DACDF6B2FC63.svg" alt="" />
                </a>
                <ul className='Navleft_menu'>
                    <li  onClick={clickHandle} className='Navleft_menu_item' >
                        <div><StackedBarChartIcon></StackedBarChartIcon></div>
                        <div className='name' id='overview'> Overview </div>
                    </li>
                    <li  onClick={clickHandle} className='Navleft_menu_item'> {/* add active to click*/}
                        <div><ShoppingCartIcon></ShoppingCartIcon></div>
                        <div className='name' id="orders" >Orders </div>
                    </li>
                    <li  onClick={clickHandle} className='Navleft_menu_item' >
                        <div><InventoryIcon></InventoryIcon></div>
                        <div className='name' id="products">Products</div>
                    </li>
                    <li onClick={clickHandle} className='Navleft_menu_item' >
                        <div><PaidIcon></PaidIcon></div>
                        <div className='name' id="payments">Payments</div>
                    </li>
                    <li onClick={clickHandle} className='Navleft_menu_item'>
                        <div><LocalOfferIcon></LocalOfferIcon></div>
                        <div className='name' id="promotions">Promotions </div>
                    </li>
                    <li onClick={clickHandle} className='Navleft_menu_item' id="setting">
                        <div><SettingsIcon></SettingsIcon></div>
                        <div className='name' id="setting">Setting</div>
                    </li>
                </ul>
            </styled.NavB>
        </>
     );
}
 
export default NavB;