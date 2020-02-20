import React from "react";
import LottieClass from './Lottie';
import P4 from "../images/p4.json";


const Page4 = () => {
    return(
        <div>


   
            <br/><br/><br/><br/>


            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="content">
                            <h4>INTEGRATE AND UPGRADE</h4>
                        </div>
                        <h1>Already have old parking equipment or software solution?</h1>
                        <p className="para1">If you have an existing equipment or software solution but want to upgrade to newer business models, then you can choose the specific modules from our platform that will integrate and upgrade the old into new.</p> <br/>
                        <a href="#"><button className="ui green button">KNOW MORE</button></a> 
                    </div>
                    <div className="column center aligned">
                        <LottieClass width="350px" height="300px" animationData={P4} />
                    </div>
                   
                </div>
            </div>

            <br/><br/><br/><br/>
 


        </div>
    );
}

export default Page4;