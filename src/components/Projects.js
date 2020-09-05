import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends React.Component {
  render() {
    return (
      <Element name="projects" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Projects</span>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-success"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header">
                    <p style={{ color: "" }}>Jun 2020 - Jul 2020</p>
                    <div className="h5">MERN-CodeMasters</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h6">
                      <i className="fa fa-github"></i>
                      <a
                        href="https://github.com/iamsid2/MERN-CodeMasters"
                        className="text-success"
                      >
                        {"  "} MERN-CodeMasters
                      </a>
                    </div>
                    <i className="fa fa-link" aria-hidden="true"></i>
                    <a
                      href="http://mern-codemasters.herokuapp.com"
                      className="text-success"
                    >
                      {" "}
                      http://mern-codemasters.herokuapp.com
                    </a>
                    <ul>
                      <li>
                        Small social network app built in Reactjs (Redux)
                        JavaScript, Expressjs, Bootstrap and MongoDB as database
                      </li>
                      <li>
                        Basically It is build for developers of our college
                        where one can make a profile and we can track the record
                        of the members which project or work they are doing at
                        present.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-success"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header">
                    <p>Sep 2018 - Oct 2018</p>
                    <div className="h5">ASAP</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h6">
                      <i className="fa fa-github"></i>
                      <a
                        href="https://github.com/iamsid2/ASAP"
                        className="text-success"
                      >
                        {"  "} ASAP
                      </a>
                    </div>

                    <ul>
                      <li>
                        Built a web-app for proper control of Public Health Care
                        System
                      </li>
                      <li>
                        An easy ambulance booking service with medicine
                        inventory and details of available doctors along with
                        feedback system
                      </li>
                      <li>
                        Technologies Used: Nodejs, Expressjs, JavaScript,
                        MongoDB, Html, CSS, Bootstrap
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-success"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header">
                    <p>Feb 2019 - Mar 2019</p>
                    <div className="h5">WorkExo</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h6">
                      <i className="fa fa-github"></i>
                      <a
                        href="https://github.com/iamsid2/WorkExo"
                        className="text-success"
                      >
                        {"  "} WorkExo
                      </a>
                    </div>

                    <ul>
                      <li>
                        Optimised Allocation Algorithm - developed to appoint
                        workers for specific task in time-efficient manner.
                      </li>
                      <li>
                        Predictive Analysis - Workers’ efficiency analysis
                        depending upon department, involvement, hourly rate and
                        standard hours.
                      </li>
                      <li>
                        Technologies Used: HTML5, CSS3, Bootstrap3, JQuery,
                        Flask, Python Chart.Js
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Projects;
