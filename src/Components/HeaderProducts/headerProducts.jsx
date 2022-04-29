import React,{useState} from 'react';
import * as styled from './headerProduct.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MaterialUIPickers from '../Date/Date';
import Button from '../Button/Button';
import SearchIcon from '@mui/icons-material/Search';

const HeaderProduct = (props) => {
    const [add,setAdd] =  useState(false)
    const onAddProduct = ()=>{
        props.setAddProduct(true);
        setAdd(true);
    }
    return ( 
        <>
            <styled.Header>
                <div className='Header_info'>
                    <h1>{add ? 'ADD PRODUCTS' : 'PRODUCTS'}</h1>
                    <div className='Header_info_login'>
                        <div className='img_profile'>
                            <img src="https://www.pngall.com/wp-content/uploads/4/Mark-Zuckerberg-PNG-HD-Quality.png" alt="" />
                        </div>
                        <h4>Mark Zu </h4>
                        <div><ArrowDropDownIcon></ArrowDropDownIcon></div>
                        <div><Badge badgeContent={99} color="error"><LocalPostOfficeIcon></LocalPostOfficeIcon></Badge></div>
                        <div><Badge badgeContent={277} color="error"><NotificationsIcon></NotificationsIcon></Badge></div>
                    </div>
                </div>
                <div className='Header_info_setting'>
                    <div className='Header_info_settingDate'>
                        <div><MaterialUIPickers></MaterialUIPickers></div>
                        <div><Button size='14px;' color='var(--charcoal-grey)' margin='0 8px 0 8px' bgcolor='var(--white)' name='TODAY' w='80px' h='48px'></Button></div>
                        <div><Button size='14px;' color='var(--charcoal-grey)' bgcolor='var(--white)' name='YESTERDAY'  w='110px' h='48px'></Button></div>
                    </div>
                    <div className="Header_info_settingSearch">
                        <div>
                            <styled.SearchBox>
                                <SearchIcon style={{margin: '10px'}}/>
                                <styled.Input placeholder='Search Products' className=''/>
                            </styled.SearchBox>
                        </div>
                        <div>
                            <Button onClick={onAddProduct} margin='0 0 0 20px' name={`Add Product`} color='var(--white-two)' w='112px' h='48px' bgcolor='var(--pale-orange)' size='14px'></Button>
                        </div>
                        <div>
                            <Button margin='0 0 0 20px' name={`Export`} color='var(--pale-orange)' w='112px' h='48px' bgcolor='var(--white)' size='14px'></Button>
                        </div>
                    </div>

                </div>
            </styled.Header>
        </>
     );
}
 
export default HeaderProduct;