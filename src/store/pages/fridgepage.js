import {fridgeData} from '../data/fridge'
import Navbar from '../components/navbar'
const fridges=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            fridgeData.map((item)=>{
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
export default fridges