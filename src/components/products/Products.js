import React from "react";
import Navbar from "../navbar/Navbar";

import Consumer from "./Consumer";
import Operator from "./Operator";
import Reporting from "./Reporting";
import Admin from "./Admin";
import Enable from "./Enable";
import Fleet from "./Fleet";
import Party from "./Party";

import Footer from "../dashboard/Footer";

const Products = () => {
    return(
        <div >

            <Navbar />

            <div style={{backgroundColor: "#f2f2f2"}}>
            <br/><br/><br/><br/>

            <div className="ui container center aligned">
                <h1>Platform as a Service</h1>
                <p>A scalable loT platform to upgrade and future-proof your offerings</p>
                <div className="doubling stackable ui three column grid">
                    <div className="column">
                        <div className="ui segment">
                        <i className="fa fa-desktop fa-3x"></i><h3 style={{color: "green"}}>Pay as you go model</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="fa fa-fingerprint fa-3x"></i><h3 style={{color: "green"}}>White-label Solution</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="fa fa-cogs fa-3x"></i><h3 style={{color: "green"}}>Speedy Customisations</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="fa fa-door-closed fa-3x"></i><h3 style={{color: "green"}}>Open additional revenue channels</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="fa fa-lightbulb fa-3x"></i><h3 style={{color: "green"}}>Plug-N-Play ready to deploy a platform</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <i className="fa fa-cubes fa-3x"></i><h3 style={{color: "green"}}>Retrofits with the existing system</h3>
                        </div>
                    </div>
                
                </div>
            </div>


            <br/><br/><br/><br/>
            
            <div className="ui container center aligned" >
                <h2>GMP Platform</h2>
                <p>Control and Integrate all your car parks, equipment, and transactions across all consumer touchpoints</p>
            </div>

            <br/><br/><br/><br/>

            <div className="ui container center aligned">
                <h2>Consumer Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Consumer />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>Operator Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Operator />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>Reporting Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Reporting />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>Admin Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Admin />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>Enable Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Enable />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>Fleet Parking Module</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Fleet />
                <br/><br/><br/><br/>
            </div>

            <div className="ui container center aligned">
                <h2>3rd Party Itegrations</h2>
                <p>Create your own consumer app or integrate with <br/> other existing apps. Offer the following features <br/> to your mobile consumers on iOS / Android / Web</p>
                <Party />
                <br/><br/><br/><br/>
            </div>
            
       
           
            
            <br/><br/><br/><br/>
            </div>
            <Footer />
        </div>
    );
}

export default Products;