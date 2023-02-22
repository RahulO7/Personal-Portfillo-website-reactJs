import React  from "react";
import styled from "styled-components";
import pimg from "../Assests/pimg.jpg"


function About() {
  
  

  return (
    <AWrapper>
       <div className="title">
          <h3>About Me </h3>
        </div>
        <div className="profilep">
          <img src={pimg} alt="" />
        </div>
        <div className="maincont">
         
          <div className="aboutme">
            <h4 style={{fontSize:"20px"}}>Personal Details</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <li><b>Name:-</b>Rahul Sharma</li>
            <li><b>Adress:-</b>Bad ke balaji</li>
            <li><b>Phone:-</b><a href="tel:+91-9358393743" rel="noreferrer" target={"_blank"}>9358393743</a></li>
            <li><b>Email:-</b><a href="https://mail.google.com/mail/u/0/?fs=1&to=rahulpancholi3937@gmail.com&tf=cm" rel="noreferrer" target={"_blank"}>rahulpancholi3937 @gmail.com</a></li>
            </ul>
          </div>
          
          <div className="aboutme">
            <h4 style={{fontSize:"20px"}}>Self Introduction</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente quasi aliquam, magnam vitae doloremque itaque saepe, maiores ut adipisci sint delectus. Dignissimos officia quod alias impedit fugiat temporibus saepe?</p>
            
            </ul>
          </div>
          <div className="aboutme">
            <h4 style={{fontSize:"20px"}}>Qualifitions</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <li><b>Highest:-</b>Rahul Sharma</li>
            <li><b>Adress:-</b>Bad ke balaji</li>
            
            </ul>
          </div>
          <div className="aboutme"  >
            <h4 style={{fontSize:"20px"}}>Languages</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <li><b>Highest:-</b>Rahul Sharma</li>
            <li><b>Adress:-</b>Bad ke balaji</li>
            
            </ul>
          </div>


        </div>

    
    </AWrapper>
  );
}

const AWrapper = styled.section`
min-height: 70vh;
width: 100vw;
padding: 2%;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
/* justify-content: ; */
background-color: ${({theme}) => theme.color.bg2};

.profilep{
  width: 90%;
  max-width: 300px;
  
  height: 300px;
 border-radius: 100%;
  overflow: hidden;
  img{
    width: 100%;
  height: 100%;
  }

}

.maincont{
  width: 90%;
  /* max-width: 900px; */
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-around;
 
  


  .aboutme{
    width: 100%;
    max-width: 400px;
    border-left: 3px solid #2854b0;
    overflow-x: hidden;
    
    
    /* background-color: #252625; */
    background-color:${({theme}) => theme.color.bg3};
    border-radius: 10px;
  
    padding: 5px;
   

  
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
  
    
  }
  ul li{
   
    width: fit-content;
    height: fit-content;
  }
  ul li a{
    text-decoration: underline;

    

   
  }
}


}


`
  

export default About;
