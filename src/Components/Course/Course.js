import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;
// font-family: 'Noto Sans', sans-serif;
const Course = (props) => {
  // console.log( props.course)
  const {course,hour,instructor,image,price,starting}=props.course
  return (
    // <div className='container-fluid nav_bg'>
    //   <div className='row'>
        // <div className="w-50">
        <div className='col-md-4 col-10 float-left'>
            
          {/* Bootstrap start*/}
          <div className="p-2">
          <div className="card">
            <img src={image} className="card-img-top" style={{width:"100%",height:"30vh"}} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Course : {course} <span style={{color: 'red'}}>{hour}</span> </h5>
              <h5>Fee : $ {price}</h5>
              <h6>Instructor : {instructor}</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>Start on : {starting}</p>
              <button className="btn btn-primary" onClick={()=>props.addToCart(props.course)}>Enrollment Now  <FontAwesomeIcon icon={faShoppingCart }/></button>

            </div>
          </div>
          {/* Bootstrap End*/}
          {/* fas fa-cart-arrow-down */}
          </div>


        </div>
    // </div>
    
    // </div> 
  );
};

export default Course;

