import React from 'react';
import './Footer.css';

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <p className="text-center">&copy; {year} by Nazmul Hossain Khan, - All Rights Reserved</p>
        </div>
      </div>
  </div>
  );
};

export default Footer;

{/* <div className='container-fluid nav_bg'>
 <div className='row'>
  <div className='col-10 mx-auto'>
     
  </div>
 </div>
</div> */}