import React from 'react';
import './App.css';
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import CourseData from './CourseData/CourseData';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Course from './Components/Course/Course';
import { useState } from 'react';


function App() {
  const [cart, setCart]= useState([])
  // console.log( cart)
  const [info,setInfo] =useState('col-md-12 col-sm-10 col-10 mx-auto')
  const [cartview, setCartView]=useState({display: 'none'})

  


  const courseInfo=CourseData
  // console.log(courseInfo);

  const addToCart=(course)=>{
      // console.log(course)
      setCart([...cart,course]);
      setInfo('col-md-10 col-sm-10 col-10 mx-auto');
      setCartView({display: 'block'})
      
      
  }
  return (
    <div >
        <Header></Header>
        <div className='container-fluid nav_bg mt-5 '>
          <div className='row'>
            <div className={info}>
            
              {
                courseInfo.map(courses=><Course course={courses} key={courses.id} addToCart={addToCart}></Course>) 
              }
            </div>
            <div className='col-md-2 col-10 mx-auto' style={cartview}>
              <div>
                <Cart course={cart}></Cart>
              </div>
            </div>
          </div>
      </div>

      <div>
      <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
