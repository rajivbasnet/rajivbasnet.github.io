import React, { Component } from "react";
import { Row} from "react-bootstrap";
import { getProjects } from "../details/projects";

class ExtraProjectDetails extends Component {
    state = {
        projects: getProjects(),
      };

    render() {
      const ep = this.state.projects[this.state.projects.length-1]  
      return (
        <React.Fragment>
          <div style={{ backgroundColor: "#ffffff" }}>
                {ep.projects.map((p) => 
                 <Row>
                    <div className="flex text-secondary ml-3" >
                        <a href = {p.website || p.github} target = "blank" className="text-secondary"><b>{p.title} </b></a> 
                        <br></br>
                        {p.tools.split(",").join(" | ")}
                        <br></br>
                        <br></br>
                    </div>  
                </Row>
                )}
          </div>
        </React.Fragment>
       
      );
    }
  }
  
  export default ExtraProjectDetails;