import React from "react";
import LottieClass from './Lottie';
import P8 from "../images/p8.json";

const Page5 = () => {
    return(
        <div style={{backgroundColor: "#f2f2f2"}}>


   
            <br/><br/><br/><br/>

            <div className="ui container center aligned">
                
                    <h2>Trusted by</h2>
                    <h1>World’s Leading Parking Operators</h1> 
              
                <br/><br/>
                <div className="doubling stackable ui two column grid">
                    <div className="column center aligned">
                        <LottieClass width="350px" height="300px" animationData={P8} />
                    </div>
                    <div className="column">
                        <div className="content">
                            <h4>INTEGRATE AND UPGRADE</h4>
                        </div>
                        <h1>Smart Parking in India</h1>
                        <p className="para1">If you have an existing equipment or software solution but want to upgrade to newer business models, then you can choose the specific modules from our platform that will integrate and upgrade the old into new.</p> <br/>
                        <a href="#"><button className="ui green button">KNOW MORE</button></a> 
                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>
    


        </div>
    );
}

export default Page5;