import React from 'react';
import ReactDOM from 'react-dom';
import * as NavBar from "./navBar";
import * as Yumbotron from "./jumbo"

import "bootstrap/dist/css/bootstrap.min.css";

function App(){

    return(
        <>    
            <NavBar.Bar/>
            <div> 
            <Yumbotron.Yumbo/>
            </div>

        </>
        )
}

ReactDOM.render(<App/>, document.getElementById("root"));