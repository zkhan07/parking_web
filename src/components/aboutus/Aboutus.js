import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Aboutus = () => {
    return(
        <div className="cont">
            <Navbar />

        
            <br/><br/><br/><br/>

            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="item">
                            <div className="content">
                                <h4>--We are an</h4>
                            </div>
                            <h1>AWARD-WINNING</h1>
                            <p>provider of Interoperable Smart Parking Platform connects all parking and mobility stakeholders on a common platform who were until now operating in silos. We are a team of doers with a clear mission to digitize parking industry globally.</p> <br/>
                          
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src="p3.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/>

            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="ten wide column">
                        <div className="ui image">
                            <img src="p2.jpg" />
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="item">
                            <h2>Get My Parking was founded in 2015 by Chirag Jain and Rasik Pansare.</h2>
                            <p>Our vision is to make every parking transaction a sub-conscious experience. With a strong foundation of the team, technology, and partnerships, we are creating a future-proof parking platform to connect the parking industry internally as well as with urban mobility players.</p> <br/>
                        </div>
                    </div>
                </div>
            </div>



            <br/><br/>
    
            <Footer />
        </div>
    );
}

export default Aboutus;