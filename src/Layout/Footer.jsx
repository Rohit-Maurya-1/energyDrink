import React from 'react';
import Style from "../Layout/Style.module.css"

const Footer = () => {
  return (
    // <div className='container-flude'>
      <nav className={`navbar ${Style.footerbackground}`}>
        <div className="container mt-5">
          <div className=" row " style={{width:"100%",height:"100px", fontSize:"18px", fontWeight:"bold" }}>
            <div className='col-6 d-flex align-items-center justify-content-center'><a>©2021 Groovy</a></div>
            <div className='col-6 d-flex align-items-center justify-content-center'>
            Made with ❤ <a>by Social Brandits</a></div>

          </div>
          
       
        </div>
      </nav>
    // </div>
  );
}

export default Footer;
