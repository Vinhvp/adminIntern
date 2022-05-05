import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const axios = require('axios');
export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const completeHandle = () =>{
    axios.post('http://localhost:7000/admin/updateStatusOrders',{
      data: 'complete',
      id: props.data._id,
      id_sp: props.data.id,
      quantity: props.data.quantity
    })
    .then((res)=>{
      if(res.data.status==202){
        alert('complete order!')
        window.location.reload();
      }
    })
   
  }
  const cancelHandle = () =>{
    axios.post('http://localhost:7000/admin/updateStatusOrders',{
      data: 'cancel',
      id: props.data._id
    }).then((res)=>{
      if(res.data.status!=200){
        alert('cancel order!')
        window.location.reload();
      }
    })
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            marginBottom: '1px',
            fontWeight: '500',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight:' 1.43',
            letterSpacing: 'normal',
            color: 'var(--charcoal-grey)',
            width: '100%',
            textTransform: 'capitalize'
        }}
      >
        Action <ArrowDropDownIcon></ArrowDropDownIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='actionHandle' onClick={completeHandle}><CircleIcon  style={{marginRight: '20px', color:"var(--pea-green)", cursor:'pointer'}} ></CircleIcon>Mark as Completed</MenuItem>
        <MenuItem  className='actionHandle' onClick={cancelHandle}><CircleIcon style={{marginRight: '20px', color:"#f05d62", cursor:'pointer'}}></CircleIcon>Mark as Canceled</MenuItem>
      </Menu>
    </div>
  );
}
