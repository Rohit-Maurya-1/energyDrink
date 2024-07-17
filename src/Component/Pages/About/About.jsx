import React from 'react'
import Layout from '../../../Layout/Layout'
import about from "../../../../src/images/themes/Groovy/assets/About/Hey.png"
import Style from "../About/About.module.css"
const About = () => {
  return (
    <Layout>
  	 <div className="about-us" style={{marginTop:"90px", color:"white"}}>
        <div className="container-fluid abt groovy-about">
            <div className="row" style={{ background:"#48B862"}}>
               <div className="col-md-6 hey " >
                <img src={about} width="75%" className="pt-3 img-fluid" alt=""/>
                <p className="we-hope">we hope this letter finds you well. We know you don’t like big paragraphs, but there’s something we know you adore. Give us a fair chance, okay?</p>
               </div>
               <div className="col-md-6">rohit</div>
            </div>
            <div className="row" style={{background:"#FFD62D"}}>
               <div className="col-md-6 hey " >
                <img src={about} width="75%" className="pt-3 img-fluid" alt=""/>
                <p className="we-hope">we hope this letter finds you well. We know you don’t like big paragraphs, but there’s something we know you adore. Give us a fair chance, okay?</p>
               </div>
               <div className="col-md-6">rohit</div>
            </div>
            <div className="row" style={{background:"#cf2e2e"}}>
               <div className="col-md-6 hey " >
                <img src={about} width="75%" className="pt-3 img-fluid" alt=""/>
                <p className="we-hope">we hope this letter finds you well. We know you don’t like big paragraphs, but there’s something we know you adore. Give us a fair chance, okay?</p>
               </div>
               <div className="col-md-6">rohit</div>
            </div>
        </div>

        </div>
    </Layout>
  )
}

export default About