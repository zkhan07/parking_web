import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>

        <div class="doubling stackable ui menu">
          
              <div class="item" >
                <Link to="/" >Home</Link>
              </div>

              <div class="item">
                <Link to="/products">Products </Link>
              </div>

              <div class="item">
                <Link to="/sector" >Sectors </Link>
              </div>
              <div class="item">
                <Link to="/aboutus" >About Us </Link>
              </div>
              <div class="item">
                <Link to="/contactus" >Contact Us </Link>
              </div>

              <div class="item">
                <i className="search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
    
              <div class="item">
                <Link to="/#"><i className="mail big icon"></i></Link>
                <Link to="/#"><i className="facebook big icon"></i></Link>
                <Link to="/#"><i className="twitter big icon"></i></Link>
                <Link to="/#"><i className="linkedin big icon"></i></Link>
                <Link to="/#"><i className="instagram big icon"></i></Link>
              </div>
         
          
          </div>
  










    </nav>
  );
};

export default sideDrawer;
