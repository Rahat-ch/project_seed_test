import React, { Component } from "react";
import placeholder from "../assets/images/placeholder.png"


class Placeholder extends React.Component{
    render(){
        return(
            <img
            src={placeholder}
            style={{ height: 150, position: "relative", top: 30 }}
          />
    )
}
}

export default Placeholder;