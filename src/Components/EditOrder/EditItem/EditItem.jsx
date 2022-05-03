import React,{useEffect,useState} from 'react';
import * as styled from './EditItem.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const axios = require('axios');
const EditItem = () => {
    const [orders,setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [length, setLength] = useState(1);
    const leftArrow = ()=>{
        if(page>1){
            setPage(page-1);    
        }
    }
    const rightArrow = ()=>{
        if(page < Math.floor(length/10)+1){
            setPage(page+1);
        }
    }
    useEffect(()=>{
        axios.get('http://localhost:7000/admin/updateOrders/get',{params: {pages: page}})
        .then((res)=>{
            setOrders(res.data.orderList);
            setLength(res.data.length);
        })
        },[page])
    return ( 
        <styled.EditItem>
          {orders.length > 0 && ( orders.map((e,i)=>{
              const total = e.quantity * e.price;
              const length = e['_id'].length;
              const orderId = e['_id'].slice(length-5,length);
              if(i%2!=0){
                return(
                    <styled.orderItem style={{background: 'var(--white-two)'}}>
                        <div style={{width:"50px"}}>{orderId}</div>
                        <div className='OrderDate'>{e['date']}</div>
                        <div className='Name'>{e['title']}({e['size']})x{e['quantity']}</div>
                        <div className='Price'>${total}</div>
                        <div className='Status'>complete</div>
                        <div className='Action'>
                            <div>Action</div>
                            <div style={{transform: 'translateY(5px)'}}>
                                <ArrowDropDownIcon></ArrowDropDownIcon>
                            </div>
                        </div>
                    </styled.orderItem>
                   )
              }
              else{
                return(
                    <styled.orderItem>
                        <div style={{width:"50px"}}>{orderId}</div>
                        <div className='OrderDate'>{e['date']}</div>
                        <div className='Name'>{e['title']}({e['size']})x{e['quantity']}</div>
                        <div className='Price'>${total}</div>
                        <div className='Status'>complete</div>
                        <div className='Action'>
                            <div>Action</div>
                            <div style={{transform: 'translateY(5px)'}}>
                                <ArrowDropDownIcon></ArrowDropDownIcon>
                            </div>
                        </div>
                    </styled.orderItem>
                   )
              }
          
       }))}
        <div className='pagination'>Show 1 to 10 of {length} entries</div>
            <div className='pagination_bread'>
                <ArrowLeftIcon  onClick={leftArrow} style={{cursor:'pointer'}}></ArrowLeftIcon>
                <div>{page}/{Math.floor(length/10)+1}</div>
                <ArrowRightIcon onClick={rightArrow} className='rightIcon' style={{cursor:'pointer'}}></ArrowRightIcon>
            </div>
        </styled.EditItem>
     );
}
 
export default EditItem;