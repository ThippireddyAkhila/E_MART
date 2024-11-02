import {booksData} from '../data/books'
import Navbar from '../components/navbar'
const books=()=>{
    //const firstfive=mobileData.slice(0,5)
    return(
        <>
       <Navbar />
        <div className='pagesection'>
        {
            booksData.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className='pro_img' src={item.image}></img>
                        <div className='pagemod'>{item.title},{item.author}</div>
                    </div>
                
                )
            })
        }
        </div>
        </>
    )
}
export default books