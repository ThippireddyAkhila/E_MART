import {computerData} from '../data/computers'
import Navbar from '../components/navbar'
const computers=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            computerData.map((item)=>{
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
export default computers