import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

class Education extends React.Component {
  render() {
    return (
      <Element name="education" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Education</span>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-12 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white text-center">
                    <div className="h6 text-warning">
                      {"  "} <b>BTech, Computer Science & Engineering</b>
                    </div>
                    <p>
                      <i className="fa fa-university" aria-hidden="true"></i>{" "}
                      College of Engineering and Technology, Bhubaneswar
                    </p>
                    <p>
                      <i
                        className="fa fa-calendar-check-o"
                        aria-hidden="true"
                      ></i>{" "}
                      Aug 2016 - Aug 2020
                    </p>
                    8.67 CGPA in BPUT
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-12 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white text-center">
                    <div className="h6 text-warning">
                      {"  "} <b>Higher Secondary Education (12th), Science</b>
                    </div>
                    <p>
                      <i className="fa fa-university" aria-hidden="true"></i>{" "}
                      Kendriya Vidyalaya no.4, Bhubaneswar
                    </p>
                    <p>
                      <i
                        className="fa fa-calendar-check-o"
                        aria-hidden="true"
                      ></i>{" "}
                      April 2015 – May 2016
                    </p>
                    92.6 % in CBSE
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-12 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white text-center">
                    <div className="h6 text-warning">
                      {"  "} <b>Secondary Education (10th), Science</b>
                    </div>
                    <p>
                      <i className="fa fa-university" aria-hidden="true"></i>{" "}
                      Kendriya Vidyalaya, Bhawanipatna
                    </p>
                    <p>
                      <i
                        className="fa fa-calendar-check-o"
                        aria-hidden="true"
                      ></i>{" "}
                      Apr 2013 - May 2014
                    </p>
                    9.8 CGPA in CBSE
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

export default Education;
