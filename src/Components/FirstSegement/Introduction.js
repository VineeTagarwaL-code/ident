import { useState, useEffect } from "react";
import './Introduction.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTooth } from '@fortawesome/free-solid-svg-icons'


import backgroundImage1 from '../Assests/sliders/1.jpg';
import backgroundImage2 from '../Assests/sliders/2.jpg';


export default function Introduction() {

    const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);
    const [IntroString, setIntroString] = useState("Best Care For Dental Health")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(backgroundImage === backgroundImage1 ? backgroundImage2 : backgroundImage1);
            if (IntroString === "Best Care For Dental Health") {
                setIntroString("Vibrant Smile For Healthy Lifestyle")
            } else {
                setIntroString("Best Care For Dental Health")
            }

        }, 8000);

        return () => clearInterval(intervalId);
    }, [backgroundImage]);

    return (
     <>
     <div className="Introduction" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '85vh', width: '100vw', transition: 'background-image 1s ease-in-out', }}>
            <div className='container  container-sm-auto  intro' >
                <div className="row  row1">
                    <div className="bodyCard" >
                        <div className="card-body1">
                            <h5 className="card-title1">The Best Medical and General Practise Care !</h5>
                            <h6 className="card-subtitle">{IntroString}</h6>
                            <p className="text">
                                The health and well-being of our patients and their health care team will 
                                always be our priority, so we follow the best practices for cleanliness.
                            </p>
                            <div className="d-flex flex-row gap-5 justify-content-start">
                                <button className="services buttonIntro">Our Services</button>


                                <button className="aboutBtn buttonIntro">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="row ">
                    <div className="col">
                        <div class="aboutlist d-flex flex-row gap-5 justify-content-evenly">
                            <div className="left align-self-baseline justify-content-center">
                            <FontAwesomeIcon icon={faTooth} size="xl" style={{color: "#00f0c0",}} />
                            </div>
                            <div className="right d-flex flex-column justify-content-between">
                                <div id="AboutTitle">
                                    Implant Dentristry
                                </div>
                                <div id="Aboutbody">
                                    Dental implants are surgical fixtures placed in the jawbone, which then fuse with
                                    jawbone over a few months to take care of small    </div>
                                <div className="readmore align-self-center">
                                    Readmore
                                </div>
                            </div>
                        </div>
                    </div>     
                              
                   
                </div> */}
                
            </div>

        </>

    );
}
