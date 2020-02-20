import React from "react";

const Card = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui fluid container center aligned">
              
               
                <img src="p5.jpg" className="cardimg" />
                <a><button className="ui basic big green button">View All Deals</button></a>
                <br/><br/>
            


                {/* slide part */}
                <h1 className="cardh1">We Integrate</h1>
                <h1 className="cardp1">Parking and Mobility</h1>
            </div>

        </div>
    );
}

export default Card;