import React,{useState} from 'react';
import * as styled from './DashboardPage.styled';
import EditItem from '../../Components/EditOrder/EditItem/EditItem';
import Products from '../../Components/Products/products';
import NavB from '../../Components/NavigationBar/NavB';
import HeaderSetting from '../../Components/HeaderSetting/HeaderSetting';
import HeaderProduct from '../../Components/HeaderProducts/headerProducts';
import EditOrder from '../../Components/EditOrder/EditOrder';
import AddProduct from '../../Components/Products/AddProducts/addProduct';
const Dashboard = (props) => {
    const [navbar, setNavbar] = useState('');
    const [addProduct, setAddProduct] = useState(false);
    return ( 
        <>
            <styled.Dashboard >
                    <NavB setNavbar={setNavbar}></NavB>
                    <styled.Edit>
                    { addProduct ? null :(navbar=='products' ?  <HeaderProduct setAddProduct={setAddProduct}></HeaderProduct> : <HeaderSetting nameNarbar={navbar}></HeaderSetting>)}
                        {/* <EditOrder></EditOrder> */}
                        {
                            navbar=='orders' ?
                            (<EditOrder></EditOrder>) :
                            navbar=='products' ?
                            (addProduct ? <AddProduct></AddProduct> :<Products></Products>) :
                            navbar=='settings' ?
                            (<div className='edit'></div>) : 
                            (<div className='edit'></div>) 
                        }


                    </styled.Edit>
            </styled.Dashboard>
        </>
     );
}
 
export default Dashboard;