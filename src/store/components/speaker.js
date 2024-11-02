import {speakerData} from '../data/speaker'
const speaker=()=>{
    const firstfive=speakerData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>SPEAKERS</h2>
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
export default speaker