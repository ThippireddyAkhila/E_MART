import {acData} from '../data/ac'
const ac=()=>{
    const firstfive=acData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>AIR-CONDITIONERS</h2>
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
export default ac