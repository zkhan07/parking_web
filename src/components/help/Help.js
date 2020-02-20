import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Help = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/>
            <div className="ui container">
                <div className="doubling stackable ui one column grid">

                    <div className="column center aligned">
                    <div className="ui items">
                    <div className="item">
                    <div class="content"> 
                    <a class="ui massive black tag label">HELP</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p>  <br/>
                    <p className="para1">The simplest way to convey your query with us is by filling the following form: Just fills your Name, contact number, Gmail id and the suggestion or query you have, click on the send message. As soon we receive your query, we will respond to you within 24 hours.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>

                    </div>
                </div>
            </div>


            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="ui segment">
                            <h2>HELPLINE NUMBER</h2>
                            <h4>Shreyoshi Neman</h4>
                            <a>+91 7972867538</a> <br/>
                            <a>shreyoshi@gmail.com</a>
                            <h4>Ashish Chintalathadem</h4>
                            <a>+91 9959850106</a> <br/>
                            <a>shreyoshi@gmail.com</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <h2>BUSINESS RELATED</h2>
                            <p>Dazzle_AS Lighting</p>
                            <h4>Comapny Number</h4>
                            <a>+91 7972867538</a>
                            <h4>Comapny email</h4>
                            <a>dazzleAS518@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>



        <br/>
    
        <Footer />
        </div>
    );
}

export default Help;