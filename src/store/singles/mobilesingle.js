import {mobileData} from '../data/mobiles'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartcontext';
import Navbar from '../components/navbar';
const Mobilesingle=()=>{
    const {id}=useParams();
    const product=mobileData.find((item)=>item.id===id)
    console.log(id)
    const {cartItems,addCart}=useCart();
    return(
        <>
        <Navbar />
        <div className='ind_section'>
            <div className='ind_img'>
                <img src={product.image}></img>
            </div>
           <div className='ind_details'>
           <div className='ind_modal space'>
                <h3>{product.model}</h3>
            </div>
            <div className='ind_price space' >
                <h2>{product.price}</h2>
            </div>
            <div className='ind_desc space'>
                <p>{product.description}</p>
            </div>
            <button className='space' onClick={()=>addCart(product)}>Add TO Cart</button>
           </div>
        </div>
        </>
    )
}
export default Mobilesingle