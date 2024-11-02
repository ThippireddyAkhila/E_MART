import {womanData} from '../data/woman'
const women=()=>{
    const firstfive=womanData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>WOMEN</h2>
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
export default women