import React from 'react'
import heroimage from './heroimage.png'
import curvedline from './Vector 514.png'
import './Hero3.css'
import Heroimage3 from './Heroimage3.png'

export default function Hero3() {
  return (
    <div className='outerhero3'>

            <div className="innerhero3">



                <div className="left3">
                    <div className="con13">
                        <p className='Greentitle3'> Your Personal <span className='yellowword'>Coach</span> is just a click away</p>
                        <img src={curvedline} className="curvedline3" alt="..." />
                    </div>

                    <div className="con23">
                        <h2 className='Blacktitle3'>Connect Live With Your Coach</h2>
                        <p>Have a comprehensive experience</p>
                        <button type="button" class="btn btn-dark " style={{padding:'12px',borderRadius:'21px'}}>Subscribe now</button>
                    </div>
                </div>
                <div className="right3">


                    <img src={Heroimage3} className="heroimagee3" alt="..." />

                </div>


            </div>

        </div>
  )
}
