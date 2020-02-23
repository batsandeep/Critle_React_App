import React from "react";
import WelcomePage from "./WelcomePage";
import UserHomePage from "./userHomePage";
import Artists from "./artists";


var isUserLoggedIn = true;

function App() {

  return <div>
  <UserHomePage />
  {/* <Artists /> */}
    {/* {isUserLoggedIn ? <UserHomePage /> : <WelcomePage />} */}
      
  </div>
}

export default App;