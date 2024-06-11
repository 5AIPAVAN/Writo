import React from 'react'
import heroimage from './heroimage.png'
import curvedline from './Vector 514.png'
import './Hero2.css'

export default function Hero2() {
    return (
        <div className='outerhero'>

            <div className="innerhero">



                <div className="left">
                    <div className="con1">
                        <p className='Greentitle'> Where Curiosity Meets Clarity</p>
                        <img src={curvedline} className="curvedline" alt="..." />
                    </div>

                    <div className="con2">
                        <h2 className='Blacktitle'>Get Your doubts Solved</h2>
                        <p>Taught by experts from IIT's & NIT's</p>
                        <button type="button" class="btn btn-dark demobutton">Start Demo Today</button>
                    </div>
                </div>
                <div className="right">


                    <img src={heroimage} className="heroimagee" alt="..." />

                </div>


            </div>

        </div>
    )
}
