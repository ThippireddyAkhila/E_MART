import { Link } from "react-router-dom"
import { useCart } from "../context/cartcontext"
const Navbar=()=>{
    const {cartItems}= useCart();
    return(
        <>
            <div className='navsection'>
                <div className='title'>E_MART</div>
                <div className="search">
                    <input type="text" placeholder="Search..."></input>
                </div>
                <div className='user'>
                    <div className='user_details'>SignIn/SignOut</div>
                 <Link to='/cart'><div className='cart'>cart<span></span>{cartItems.length}</div></Link>   
                </div>
            </div>
            <div className='submenu'>
                    <ul>
                        
                       <Link to='/mobiles'><li>Mobiles </li></Link> 
                        <Link to='/watches'><li> Watches</li></Link>
                        <Link to='/airconditioners'> <li>Air Conditioners </li></Link>
                        <Link to='/fridges'><li>Refrigerators </li></Link>
                        <Link to='/kitchen'><li>Kitchen </li></Link>
                        <Link to='/televisions'><li>Televisions </li></Link>
                       <Link to='/menswear'><li> Mens wear</li></Link> 
                        <Link to='/womenswear'><li> Women Wear</li></Link>
                       <Link to='/computers'><li>Computers </li></Link> 
                       <Link to='/furniture'><li> Furniture</li></Link> 
                      <Link to='/books'>  <li> Books</li></Link>
                    </ul>
                </div>
        </>
    )
}
export default Navbar