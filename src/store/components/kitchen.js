import {kitchenData} from '../data/kitchen'
const kitchen=()=>{
    const firstfive=kitchenData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>KITCHEN</h2>
        <div className='prosection'>
        {
            firstfive.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='pro_img' src={item.image}></img>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default kitchen