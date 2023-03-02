import React from 'react'
import styled from 'styled-components'
import Wh from '../Assests/whatsappsmall.svg'
import Fb from '../Assests/Facebook.svg'
import Tw from '../Assests/Twitter.svg'
import Gt from '../Assests/Github.svg'
import In from '../Assests/Insta.svg'

export default function Footer() {
  return (
    <Footr className='dfc jsb ac'>
      <div className="social dfc ac">
      <p style={{padding:"5px"}}>Follow Me</p>
      <div className='df jac'>

        <div className="icons" onClick={()=>{window.open("https://api.whatsapp.com/send?phone=919358393743","_blank")}}>
            <img src={Wh} alt="" />
        </div>
        <div className="icons">
            <img src={Gt} alt="" />
        </div>
        <div className="icons">
            <img src={In} alt="" />
        </div>
        <div className="icons">
            <img src={Fb} alt="" />
        </div>
        <div className="icons">
            <img src={Tw} alt="" />
        </div>
        </div>
      </div>
      <div className="copyrights">
        <p>Degine By RAHUL SHARMA Coprights@2023</p>
      </div>

      
    </Footr>
  )
}

const Footr =styled.div`
width: 100vw;


/* padding: 35px 0 0 0; */
background-color: ${({theme}) => theme.color.bg2};
/* display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center; */
text-align: center;

.social{
    width: 100%;
    padding: 15px 0 35px  0;
    /* display: flex;
    align-items: center;
    justify-content: center; */

    .icons{
        opacity: 50%;
        cursor: pointer;

        &:hover{
            opacity: 100%;
        }
    }
}
.copyrights{
    padding: 5px;
    width: 100%;
    
    
}
`
