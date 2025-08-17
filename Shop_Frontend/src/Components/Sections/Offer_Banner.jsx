import React, { useEffect, useState } from 'react'
import '../../style/Offers.scss'
import sofa_tea from '../../assets/images/sofa_chair.png'
import { useNavigate } from 'react-router-dom'

function Offer_Banner() {

  const navigate = useNavigate()

    const navigatePage = () =>{
        navigate('/shop')
    }

    const [currentData, setCurrentData] = useState(new Date());


    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentData(new Date());
        }, 1000)
        return () => clearInterval(intervel)
    }, [])
    

    return (
        <>
            <div className="container_fluid" id='offer_fluid'>
                <div className="container">
                    <div className="offcer_latter_container">
                        <div className="banner_content">
                            <div className="banner_titles">
                                <h2>Limited Of offers</h2>
                                <h3>Product's Quality's</h3>
                            </div>
                            <div className="offer_timers">
                                <div className="timer_now">
                                    <span>{currentData.getDate()}</span>
                                    <p>Day</p>
                                </div>
                                <div className="timer_now">
                                    <span>{currentData.getHours()}</span>
                                    <p>Hours</p>
                                </div>
                                <div className="timer_now">
                                    <span>{currentData.getMinutes()}</span>
                                    <p>Minutes</p>
                                </div>
                                <div className="timer_now">
                                    <span>{currentData.getSeconds()}</span>
                                    <p>Second</p>
                                </div>
                            </div>
                            <div className="Offer_btn">
                                <button onClick={navigatePage}>Shop Now</button>
                            </div>
                        </div>

                        <div className="offcer_img">
                            <img src={sofa_tea} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Offer_Banner
