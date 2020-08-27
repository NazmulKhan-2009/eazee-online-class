import React from 'react';
import './App.css';
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
  const courseInfo=CourseData
  // console.log(courseInfo);

  const addToCart=(course)=>{
      // console.log(course)
      setCart([...cart,course])

  }
  return (
    <div >
      <Header></Header>
      <div className="w-75 float-left p-5">
      {
         courseInfo.map(courses=><Course course={courses} key={courses.id} addToCart={addToCart}></Course>) 
      }
      
      
      </div>
      <div className="w-25 float-left bg-light">
      <Cart course={cart}></Cart>
        {/* {
          cart.map(course=><Cart course={course}></Cart>)
        } */}
      </div>
      {/* <button className="btn btn-primary"><FontAwesomeIcon icon={faCoffee} />Click</button> */}

    </div>
  );
}

export default App;
