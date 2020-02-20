import React from "react";

const Footer = () => {
    return(
        <div>
               
      
            <div className="ui fluid container center aligned footer1"><br/><br/>
            <div class="doubling stackable ui form center aligned">
            <div class="three fields center aligned">
                <div class="field">
                <h4> Get news and insights from the Dazzle<sup>AS</sup> <br/>
                 world with our newsletters </h4>
                </div>
                <div class="field">
                <input type="text" placeholder="yourname@email.com"/>
                </div>
                <div class="field">
                <button className="ui basic green button"> Submit </button>
                </div>
            </div>
            </div><br/>
            </div> 

            <br/><br/>


           
            <div className="ui container">
            <div className="doubling stackable ui equal width Column grid">
             
                <div className="column">
                    <h3>COMPANY</h3>
                    <div class="ui link list">
                    <a class="item">About Us</a>
                    <a class="item">The team</a>
                    <a class="item">Career</a>
                    <a class="item">Contact Us</a>
                    </div>
                </div>

                <div className="column">
                    <h3>PRODUCTS</h3>
                    <div class="ui link list">
                    <a class="item">Consumer Module</a>
                    <a class="item">Operator Module</a>
                    <a class="item">Enable Module</a>
                    <a class="item">Fleet Parking</a>
                    <a class="item">Report & Admin</a>
                    </div>
                </div>

                <div className="column">
                    <h3>SOLUTIONS</h3>
                    <div class="ui link list">
                    <a class="item">For Operators</a>
                    <a class="item">For Governments</a>
                    <a class="item">For Corporates</a>
                    <a class="item">For Auto OEMs</a>
                    </div>
                </div>

                <div className="column">
                    <h3>RESOURCES</h3>
                    <div class="ui link list">
                    <a class="item">Case Studies</a>
                    <a class="item">Terms & Conditions</a>
                    <a class="item">Privacy Policy</a>
                    <a class="item">Our Blog</a>
                    <a class="item">FAQs</a>
                    </div>
                </div>

                <div className="column">
                    <div class="ui link list">
                        <h5>For sales queries </h5>
                        <a class="item">sales@getmyparking.com</a>
                        <h5>For general queries </h5>
                        <a class="item">care@getmyparking.com</a>
                        <h5>For career</h5>
                        <a class="item">talent@getmyparking.com</a>
                    </div>
                </div>

                <div className="column">
                <h3>HELPLINE </h3>
                011-408-45100
                <div class="ui link list">
                    <a ><i className="large black facebook icon"></i></a>
                    <a ><i className="large black whatsapp icon"></i></a>
                    <a ><i className="large black mail icon"></i></a>
                    <a ><i className="large black twitter icon"></i></a>
                </div>
                </div>

                <div className="column">
                <h3>OFFICES</h3>
                <div class="ui link list">
                    <a class="item">Delhi</a>
                    <a class="item">Virar</a>
                </div>
                </div>

                <a href="#"><i className="big arrow alternate circle up outline icon icon1"></i></a>

            </div>

        </div>


        <br/><br/>
       
    
        <div className="doubling stackable ui fluid container footer1"> <br/>
           <div className="ui grid center aligned">
                <h5> @2020ParkingApp.CopyrightbyZaidKhan </h5>
           </div><br/>
        </div>

        </div>
    );
}

export default Footer;