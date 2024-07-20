import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import bannerImage from "../../../../src/images/uploads/2021/09/bg.jpg";

import featuredImage from "../../../../src/images/uploads/2021/09/Featured-1.jpg";
import "./media.css"
const Media = () => {
  return (
     <Layout>
     <div class="banner">
    <img src={bannerImage} alt="Groovy Fruit Drink Banner"/>
    <div class="banner-text">
      <h2>Media</h2>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <li class="breadcrumb-item"><Link to="/"><span style={{color:"white",fontSize:"18px"}}>Home</span></Link></li>
          <li class="breadcrumb-item"><span style={{color:"white",fontSize:"20px"}}>+</span></li>
          <li class="breadcrumb-item active" aria-current="page"><span style={{color:"white",fontSize:"18px"}}>Media</span></li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="container mt-5">
    <div className='m-5' style={{fontSize:"30px",fontWeight:"bold"}}>Featured</div>
    <div className="row">
    <div className="col-md-6 d-flex justify-content-center">
      <img src={featuredImage} width="400" height="400" />
    </div>
    <div className="col-md-6 d-flex justify-content-center">
      <video width="400" height="400" controls>
        <source src="Featured-2.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  </div>
     </Layout>
  )
}

export default Media