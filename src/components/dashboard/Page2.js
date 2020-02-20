import React from "react";
import LottieClass from './Lottie';
import P1 from "../images/p1.json";

const Page2 = () => {
    return(
        <div>


     
            <br/><br/><br/><br/>


            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="content">
                            <h4> INTEROPERABLE ECOSYSTEM</h4>
                        </div>
                        <h1>Our Platform Makes Any Equipment Interoperable.</h1>
                        <p className="para1">Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer. In today’s new-age mobility, you need an ecosystem of integrated hardware and software components regardless of which version or vendor they all come from. Our GMP Platform delivers you that coherent interoperable ecosystem.</p> <br/>
                        <a href="#"><button className="ui green button">KNOW MORE</button></a> 
                    </div>
                    <div className="column">
                        <LottieClass width="350px" height="300px" animationData={P1} />
                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>
    


        </div>
    );
}

export default Page2;