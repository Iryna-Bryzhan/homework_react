import React from "react";
import Checkbox from "../checkbox/checkbox";

import dashboard from "../../img/dashboard.png"
import revenue from "../../img//revenue.png"
import notifications from "../../img/notifications.png"
import analytics from "../../img/analytics.png"
import inventory from "../../img/inventory.png"
import logout from "../../img/logout.png"
import lightmode from "../../img/lightmode.png"

import "./navigation.css"

function Navigation(){
    return( 
        <div className="navigation">
            <div className="menu-top">
                 <a className="menu-item" href="#1">
                    <div className="menu-item-img">
                        <img src={dashboard} alt="Dashboard" />
                    </div>
            <       div className="menu-item-text">Dashboard</div>
                </a>
                <a className="menu-item" href="#2">
                    <div className="menu-item-img">
                    <img src={revenue} alt="Revenue" />
                    </div>
                    <div className="menu-item-text">Revenue</div>
                </a>
                <a className="menu-item" href="#2">
                    <div className="menu-item-img">
                    <img src={notifications} alt="Notifications" />
                    </div>
                    <div className="menu-item-text">Notifications</div>
                </a>
                <a className="menu-item" href="#2">
                    <div className="menu-item-img">
                    <img src={analytics} alt="Analytics" />
                    </div>
                    <div className="menu-item-text">Analytics</div>
                </a>
                <a className="menu-item" href="#2">
                    <div className="menu-item-img">
                    <img src={inventory} alt="Inventory" />
                    </div>
                    <div className="menu-item-text">Inventory</div>
                </a>

            </div>
            <div className="menu-footer">
                <a className="menu-item" href="#2">
                    <div className="menu-item-img">
                    <img src={logout} alt="Logout" />
                    </div>
                    <div className="menu-item-text">Logout</div>
                </a>
                <div className="menu-item">
                    <div className="menu-item-img">
                    <img className="tema" src={lightmode} alt="Light mode" />
                    </div>
                    <div className="menu-item-text ">Light mode</div>
                    <Checkbox></Checkbox>
                </div>
            </div>
        </div>
    )
}





export default Navigation