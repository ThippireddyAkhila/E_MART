import {acData} from '../data/ac'
import Navbar from '../components/navbar'
const ac=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            acData.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='pro_img' src={item.image}></img>
                        <div className='pagemod'>{item.model},{item.company}</div>
                    </div>
                
                )
            })
        }
        </div>
        </>
    )
}
export default ac