import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
  // console.log(props.course);
  const course=props.course
  console.log(course);

  const totalCost=course.reduce((tc,cost)=>tc+cost.price,0)
  // let totalCost=0
  // for(let i=0;i<course.length;i++){
  //     totalCost=course[i].price+totalCost
  // }
  // course.map(info=>{return info.course})
  // let {course,hour,instructor,price,starting}=props.course


  return (
    <div className="">
      <div className='col-12  mx-auto my-cart'>
        <h5>Order Summery : {course.length}</h5>
       { course.map(info=>
          <p>{info.course} <br></br><span>Fees $ {info.price}</span> </p> 

          )}
      <h4>Total Cost : $ {totalCost}</h4> 
        {/* PAID BY MASTER/VISA CARD */}
     </div>
    </div>
  );
};

export default Cart;

{/* <div className='container-fluid nav_bg'>
 <div className='row'>
  <div className='col-10 mx-auto'>
     
  </div>
 </div>
</div> */}