import {fridgeData} from '../data/fridge'
const fridges=()=>{
    const firstfive=fridgeData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>REFRIGERATORS</h2>
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
export default fridges