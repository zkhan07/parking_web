import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
          <div className="ui mini image">
            <img src="plogo.jpg" height="150" width="200" />
          </div>
            CrazzyParking
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
          
              <div class="item" >
                <Link to="/" >Home</Link>
              </div>

              <div class="item">
                <Link to="/products">Products </Link>
              </div>

              <div class="item">
                <Link to="/sector">Sectors </Link>
              </div>

              <div class="item">
                <Link to="/aboutus">About Us </Link>
              </div>
              <div class="item">
                <Link to="/contactus">Contact Us </Link>
              </div>
             
        
              <div class="right item">
                <i className="grey search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
        
        </div>
      </div>


        </div>
    </nav>
  </header>
);

export default toolbar;
