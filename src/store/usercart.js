import { useCart} from "./context/cartcontext";
import Navbar from "./components/navbar";
const UserCart=()=>{
    const{cartItems,addCart,removeCart}= useCart();
    return(
        <div>
            <Navbar/>
             {cartItems.map((item)=>{
            return(
                <div className="cart_section">
                    <div className="cart_img">
                        <img src={item.image}></img>
                        </div>
                    <div className="cart_details">
                        <h3>{item.product}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.model}</h3>
                    </div>
                    <button style={{marginLeft:'15px',fontWeight:'900',color:'azure',backgroundColor:'indianred',width:'150px',height:'30px',padding:'4px'}} onClick={()=>removeCart(item)}>Remove From Cart</button>
                    
                </div>

            )
             })}
        </div>
    )
}
export default UserCart