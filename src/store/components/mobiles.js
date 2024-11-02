import {mobileData} from '../data/mobiles'
const mobiles=()=>{
    const firstfive=mobileData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>MOBILES</h2>
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
export default mobiles