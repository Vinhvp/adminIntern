import React, { useEffect, useState } from 'react';
import * as styled from './editproducts.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const axios = require('axios');
const EditProducts = () => {
    const [products, setProducts] = useState({
        length: 0,
        product: []
    });
    const leftArrow = ()=>{
        if(page>1){
            setPage(page-1);    
        }
    }
    const rightArrow = ()=>{
        if(page < Math.floor(products.length/7)+1){
            setPage(page+1);
        }
    }
    const [page, setPage] = useState(1);
    useEffect(()=>{
        axios.get('http://localhost:7000/admin/products',{params: {pages: page}})    
        .then((res)=>{
            setProducts(prev => {
                return {
                    ...prev,
                    product: res.data.products
                }
            });
            setProducts(prev => {
                return {
                    ...prev,
                    length: res.data.length
                }
            });
        })
    },[page]) 
    const product = products.product.map((e)=>{
        return (
            <div className='Edit'>
                <div className='Product_info'>
                <img src={e.img} alt="" />
                <div className='Product_info_title'>
                <h3>{e.title}</h3>
                <p>{e.category}</p>
                </div>
                </div>
                <div className='Product_sold'>4/100</div>
                <div className='Product_date'>Today, 4th May, 2022</div>
                <div className='Product_profit'>{e.price}.00</div>
                <div className='Product_action'>Action</div>
            </div>
        )
    })  
    return ( 
        <styled.EditProducts>
            {product}
           
            <div className='pagination'>Show 1 to 7 of {products.length} entries</div>
            <div className='pagination_bread'>
                <ArrowLeftIcon onClick={leftArrow} style={{cursor:'pointer'}}></ArrowLeftIcon>
                <div>{page}/{Math.floor(products.length/7)+1}</div>
                <ArrowRightIcon onClick={rightArrow} className='rightIcon' style={{cursor:'pointer'}}></ArrowRightIcon>

            </div>
        </styled.EditProducts>
     );
}
 
export default EditProducts;