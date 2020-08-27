import React from 'react';
import "./Header.css"
// font-family: "'MuseoModerno', cursive";
const Header = () => {
  return (
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-12'>
          
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <span style={{color:"red",fontSize:"40px",fontFamily:"'MuseoModerno', cursive"}}>E</span>AZEE <span style={{color:"red",fontSize:"40px",fontFamily:"'MuseoModerno', cursive"}}> O</span>NLINE</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Course Offered</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" aria-disabled="true">Link</a>
                </li>
                <li className="nav-item dropdown"></li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
        </div>
      </div>
    </nav>


    </div>
  </div>
  </div>
  );
};

export default Header;

{/* <div className='container-fluid nav_bg'>
 <div className='row'>
  <div className='col-10 mx-auto'>
     
  </div>
 </div>
</div> */}