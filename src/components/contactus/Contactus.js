import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Contactus = () => {
    return(
        <div style={{backgroundColor: "#f2f2f2"}}>
            <Navbar />

            <br/><br/>
        
            <div className="ui container">
                <div className="doubling stackable ui two column grid">

                    <div className="column">
                        <h2>Start a conversation</h2>
                        <br/>
                        <p>For sales queries</p>
                        <a>sales@getmyparking.com</a>
                        <br/><br/>
                        <p>For sales queries</p>
                        <a>sales@getmyparking.com</a>
                        <br/><br/>
                        <p>For sales queries</p>
                        <a>sales@getmyparking.com</a>
                    </div>

                    <div className="column">
                        <h2>Do you have a question?</h2>
                        <p>Fill out our contact form and we will contact you as soon as possible.</p>
                        <form class="ui form">
                            <div class="two fields">
                                    <div class="field">
                                    <label>First name</label>
                                    <input type="text" placeholder="First Name" />
                                    </div>
                                    <div class="field">
                                    <label>Middle name</label>
                                    <input type="text" placeholder="Middle Name" />
                                    </div>
                                </div>
                            <div class="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name" />
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name" />
                            </div>
                            <div class="field">
                                <label>Question</label>
                                <textarea></textarea>
                            </div>
                        
                            <button class="ui green button" type="submit">Submit</button>
                        </form>
                    </div>

                </div>
            </div>   

            <br/><br/>
            <div className="ui container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.272521505711!2d72.79802851468722!3d19.44381368687795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abd4ef5be8ef%3A0xc0197fcdc3c88c20!2sMayfair+Virar+Gardens!5e0!3m2!1sen!2sbh!4v1478336462616" width="100%" height="380" frameborder="0"  allowfullscreen></iframe>
            </div>







               
        <br/><br/>
    
        <Footer />
        </div>
    );
}

export default Contactus;