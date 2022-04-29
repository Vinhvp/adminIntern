import React, { useEffect, useState } from 'react';
import * as styled from './addProduct.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import UploadBox from '../../UploadBox/upLoadBox';
import Tag from '../../TagSelect/Tag';
import TagSingle from '../../TagSelect/TagSingle';
import Button from '../../Button/Button';
import CircleIcon from '@mui/icons-material/Circle';
const axios = require('axios');
const color = ['#ff5f6d','var(--light-gold-40)','var(--cornflower-40)','var(--pale-orange-40)'];
const circle = () => (color.map((e)=>(<CircleIcon style={{width:'30px',height: '30px', marginRight:'10px', color: e }}/>)))

const AddProduct = () => {
    const [imgLink, setImgLink] = useState([null,null,null,null]);
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [inputValue, setInputValue] = useState({
        name: '',
        categories :'',
        brand: '',
        price: '',
        quantity: ''
    })


    
    const handleComplete = () =>{
        const product = {
            img: imgLink[0],
            title: inputValue.name,
            price: inputValue.price,
            category: category 
        }
        axios.post('http://localhost:7000/admin/updateProduct',{
            products: product
        })
        .then((res)=>{
            if(res.data.status){
                alert('Your product is completely!!');
                window.location.replace('/admin/dashboard');
            }
        })
        
    }
   
    const img = imgLink.map((e,i)=>{
        return (
            <UploadBox img={e} setImg={(obj)=>{setImgLink(prev => {
                const clone = [...prev];
                clone[i] = obj;
                return clone;
            })}}></UploadBox>
        )
    })
    const handleChange = (e) =>{
        setInputValue(prev=> ({...prev,[e.target.name]: e.target.value}));
    }

    return ( <>
    
        <styled.EditProducts>
            <styled.Header>
                <div className='Header_info'>
                    <h1>ADD PRODUCTS</h1>
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
            </styled.Header>
            <styled.orderForm>
                <styled.itemOrderForm>
                        <h3 style={{marginTop: '135px'}}>PHOTOS</h3>
                        {img}
                    
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>NAME</h3>
                        <styled.Input onChange={handleChange} type='text' name='name' placeholder='enter name product..'></styled.Input>
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>CATEGORIES</h3>
                        <TagSingle setCategory={setCategory} sizes={['men','ladies','girls','boys']}></TagSingle>
                       
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>BRAND</h3>
                        <styled.Input onChange={handleChange} type='text' name='brand' placeholder='Zara Model' disabled></styled.Input>
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>PRICE($)</h3>
                        <styled.Input onChange={handleChange} type='text' name='price' placeholder='enter name price..'></styled.Input>
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}> 
                        <h3>SIZE</h3>
                        <Tag setSize={setSize} sizes={['S','M','L']}></Tag>
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>COLORS</h3>
                        <div>
                        {circle()}
                        </div>
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>QUANTITY</h3>
                        <styled.Input onChange={handleChange} type='text' name='quantity' placeholder='enter name quantity..'></styled.Input>
                        
                </styled.itemOrderForm>
                <styled.itemOrderForm style={{height: '50px'}}>
                        <h3>DESCRIPTION</h3>
                        <styled.Input onChange={handleChange} type='text' name='description' placeholder='Model wearing, full colors' disabled></styled.Input>
                        
                </styled.itemOrderForm>
                <div style={{display: 'flex', position: 'absolute', right:'320px', bottom:'-250px'}}>
                    <Button name='Cancel' w='180px' h='48px' color='var(--pale-orange)' p='12px 55px 12px 54px'></Button>
                    <Button onClick={handleComplete} name='Complete' w='180px' h='48px' bgcolor='var(--pale-orange)' color='var(--white-two)' p='12px 55px 12px 54px'></Button>
                </div>
            </styled.orderForm>
        </styled.EditProducts>
    </> );
}
 
export default AddProduct;