import {booksData} from '../data/books'
const books=()=>{
    const firstfive=booksData.slice(0,5)
    return(
        <>
        <h2 className='protitle'>BOOKS</h2>
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
export default books