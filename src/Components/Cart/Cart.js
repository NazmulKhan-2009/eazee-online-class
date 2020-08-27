import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
  
  const course=props.course
  console.log(course);

  const totalCost=course.reduce((tc,cost)=>tc+cost.price,0)
  


  return (
    <div className="">
      <div className='col-12  mx-auto my-cart'>
        <h5>Order Summery : {course.length}</h5>
       { course.map(info=>
          <p>{info.course} <br></br><span>Fees $ {info.price}</span> </p> 

          )}
      <h4>Total Cost : $ {totalCost}</h4> 
        
     </div>
    </div>
  );
};

export default Cart;

