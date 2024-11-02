import logo from './logo.svg';
import './App.css';
import Landing from './store/pages/landingpage'
import {Routes,Route} from 'react-router-dom'
import Mobilepage from './store/pages/mobilepage'
import Watchespage from './store/pages/watchespage'
import Computerspage from './store/pages/computerspage'
import Televisionspage from './store/pages/tvpage'
import Airconditionerspage from './store/pages/acpage'
import Menswearpage from './store/pages/menpage'
import Womenswearpage from './store/pages/womenpage'
import Kitchenspage from './store/pages/kitchenpage'
import Furniturespage from './store/pages/furniturepage'
import Fridgepage from './store/pages/fridgepage'
import Bookspage from './store/pages/bookspage'
import Mobilesingle from './store/singles/mobilesingle'
import UserCart from './store/usercart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route> 
        <Route path='/mobiles' element={<Mobilepage/>}></Route>
        <Route path='/computers' element={<Computerspage/>}></Route> 
        <Route path='/watches' element={<Watchespage/>}></Route> 
        <Route path='/televisions' element={<Televisionspage/>}></Route> 
        <Route path='/airconditioners' element={<Airconditionerspage/>}></Route> 
        <Route path='/menswear' element={<Menswearpage/>}></Route> 
        <Route path='/womenswear' element={<Womenswearpage/>}></Route> 
        <Route path='/kitchen' element={<Kitchenspage/>}></Route> 
        <Route path='/furniture' element={<Furniturespage/>}></Route> 
        <Route path='/fridges' element={<Fridgepage/>}></Route>
        <Route path='/books' element={<Bookspage />}></Route>
        <Route path='/mobiles/:id' element={<Mobilesingle />}></Route>
        <Route path='/cart' element={<UserCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
