import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Sector = () => {
    return(
        <div >

            <Navbar />

            <div style={{backgroundColor: "#f2f2f2"}}>
            <br/><br/>

            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="five wide column">
                        <br/>
                        <h1 style={{color: "green"}}>Our Sectors</h1>
                        <p className="para1">Our smart parking solutions are designed for every stakeholder in the parking ecosystem.</p>
                        <div className="ui image">
                            <img src="p2.jpg" />
                        </div>
                    </div>

                    <div className="eleven wide column">
                        <div className="ui two column grid">
                            <div className="column">
                                <div className="ui segment">
                                    <h2 style={{color: "green"}}>For Operators</h2>
                                    <p className="para1">Digitize your parking operations with Get My Parking’s plug-and-play solutions. Improve revenue and customer satisfaction with new bundled offerings.</p>
                                    <button className="ui green button">KNOW MORE</button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment">
                                    <h2 style={{color: "green"}}>For Government</h2>
                                    <p className="para1">Digitize your parking operations with Get My Parking’s plug-and-play solutions. Improve revenue and customer satisfaction with new bundled offerings.</p>
                                    <button className="ui green button">KNOW MORE</button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment">
                                    <h2 style={{color: "green"}}>For Corporates</h2>
                                    <p className="para1">Digitize your parking operations with Get My Parking’s plug-and-play solutions. Improve revenue and customer satisfaction with new bundled offerings.</p>
                                    <button className="ui green button">KNOW MORE</button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui segment">
                                    <h2 style={{color: "green"}}>For Auto OEMs</h2>
                                    <p className="para1">Digitize your parking operations with Get My Parking’s plug-and-play solutions. Improve revenue and customer satisfaction with new bundled offerings.</p>
                                    <button className="ui green button">KNOW MORE</button>
                                </div>
                            </div>
                        </div>
                
                    </div>
               
                
                  
                </div>
            </div>
            
            <br/><br/><br/><br/>
            </div>
            <Footer />
        </div>
    );
}

export default Sector;