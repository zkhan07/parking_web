import React from "react";
import LottieClass from './Lottie';
import P5 from "../images/p5.json";
import P6 from "../images/p6.json";
import P7 from "../images/p7.json";

const Page3 = () => {
    return(
        <div style={{backgroundColor: "#f2f2f2"}}>

       
            <br/><br/><br/><br/>

            <div className="ui container center aligned">
                <h1>Our Platform</h1>
                <br/>
                <div className="doubling stackable ui three column grid">
                    <div className="column">
                        <p>Connects Any</p>
                        <h1 style={{color: "green"}}>Parking Gate</h1>
                        <LottieClass width="350px" height="300px" animationData={P5} />
                    </div>

                    <div className="column">
                        {/* <br/><br/><br/><br/>
                        <LottieClass width="350px" height="300px" animationData={P7} />
                        <br/><br/><br/><br/> */}
                    </div>

                    <div className="column">
                        <p>Connects Any</p>
                        <h1 style={{color: "green"}}>Parking Charge</h1>
                        <LottieClass width="350px" height="300px" animationData={P6} />
                    </div>
                  
                  
                </div>
            </div>

            <br/><br/><br/><br/>
       

        </div>
    );
}

export default Page3;