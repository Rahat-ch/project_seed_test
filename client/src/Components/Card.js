import React, { Component } from "react";
import Placeholder from "./Placeholder"

class Cards extends React.Component{
    render(){
        return(
        <div>
            <div className="ui card">
            <div className="image">
              <div><Placeholder /></div>
            </div>
            <div className="content">
              <a className="header">Awesome Project</a>
              <div className="meta">
                <span className="date"></span>
              </div>
              <div className="description">
                Short description about the awesome project here.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="github icon"></i>
              </a>
            </div>
          </div>
          </div>       
    )
}
}

export default Cards