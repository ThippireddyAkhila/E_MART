import {menData} from '../data/men'
const men=()=>{
    const firstfive=menData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>MEN</h2>
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
export default men