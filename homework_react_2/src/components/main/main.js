import React from "react";
import Profile from "../profile/profile";
import Navigation from "../navigation/navigation";
import Search from "../search/search";
import Arrow from "../arrow/arrow";

import "./main.css"


function Main(){
    return(
    <div className="navBar">
    <Arrow></Arrow>
      <Profile> </Profile>
      <Search></Search>
      <Navigation></Navigation>
      </div>
    )
}

export default Main