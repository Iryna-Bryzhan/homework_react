import React from "react";
import avatar from "../../img/avatar.png"

import "./profile.css"

function Profile(){
   return(
     <div className="profile">
        <div className="photo">
            <img src={avatar} alt="avatar" />
        </div>
        <div className="profile-info">
            <div className="profile-info-name">AnimatedFred</div>
            <div className="profile-info-email">animated@demo.com</div>
        </div>
    </div>
   )
  
}
export default Profile