import {mobileData} from '../data/mobiles'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const Mobiles=()=>{
    //const firstfive=mobileData.slice(0,5)
    const [selectedProducts,setselectedProducts]=useState([]);
    const companyHandler=(mango)=>{
    if(selectedProducts.includes(mango)){
        setselectedProducts(selectedProducts.filter(item=>item!==mango))
    }
    else{
        setselectedProducts([...selectedProducts,mango])
    }
    }
    const filteredproducts=selectedProducts.length===0?
    mobileData:mobileData.filter((orange)=>selectedProducts.includes(orange.company))
    return(
        <>
       <Navbar />
       <div className='fullpage'>
       <div className='pro_selected'>
        {
            mobileData.map((phone)=>{
                return(
                    <div className='pro_input'>
                    <label >
                        <input type='checkbox' checked={selectedProducts.includes(phone.company)}
                        onChange={()=>companyHandler(phone.company)}></input>
                        {phone.company}<br></br>
                    </label>
                    </div>
                )
            })
        }
       </div>
        <div className='pagesection'>
        {
            filteredproducts.map((item)=>{
                return(
                    <div className='imgbox'>
                        <Link to={`/mobiles/${item.id}`}><img className='pro_img' src={item.image}></img></Link>
                        <div className='pagemod'>{item.model},{item.company}</div>
                    </div>
                
                )
            })
        }
        </div>
       </div>
        </>
    )
}
export default Mobiles