import {watchData} from '../data/watch'
import Navbar from '../components/navbar'
const watches=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            watchData.map((item)=>{
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
export default watches