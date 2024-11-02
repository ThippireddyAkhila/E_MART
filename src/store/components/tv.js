import {tvData} from '../data/tv'
const tv=()=>{
    const firstfive=tvData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>TELEVISIONS</h2>
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
export default tv