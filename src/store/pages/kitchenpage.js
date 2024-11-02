import {kitchenData} from '../data/kitchen'
import Navbar from '../components/navbar'
const kitchen=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            kitchenData.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='pro_img' src={item.image}></img>
                        <div className='pagemod'>{item.model},{item.brand}</div>
                    </div>
                
                )
            })
        }
        </div>
        </>
    )
}
export default kitchen