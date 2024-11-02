import {computerData} from '../data/computers'
const computers=()=>{
    const firstfive=computerData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>COMPUTERS</h2>
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
export default computers