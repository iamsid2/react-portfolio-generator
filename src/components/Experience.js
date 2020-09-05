import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

class Experience extends React.Component {
  render() {
    return (
      <Element name="experience" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Work Experience</span>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 "
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header text-dark">
                    <p style={{ color: "" }}>Oct 2019 – Nov 2019</p>
                    <div className="h5">Freelance Web Developer</div>
                  </div>
                </div>
                <div
                  className="col-md-9 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white">
                    <div className="h6 text-warning">
                      {"  "} <b>LFYD</b>
                    </div>
                    <ul>
                      <li>
                        Built the website of a start-up company LFYD(Lets Fund
                        Your Dreams)
                      </li>
                      <li>
                        Developed front end as well as backend of the website
                        along with team members
                      </li>
                      <li>
                        Technologies Used: Nodejs, Expressjs, JavaScript,
                        MongoDB, HTML, CSS, Bootstrap
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 "
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header text-dark">
                    <p style={{ color: "" }}>Jun 2019 – Jul 2019</p>
                    <div className="h5">Software Development Intern</div>
                  </div>
                </div>
                <div
                  className="col-md-9 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white">
                    <div className="h6 text-warning">
                      {"  "} <b>Orbonix Labs</b>
                    </div>
                    <ul>
                      <li>
                        Developed API of Springboard Retail in Nodejs for
                        extracting datas from Springboard account to database
                        for the company’s site Viewtique
                      </li>
                      <li>
                        Developed API to convert a video to HLS and Dash for
                        live video streaming
                      </li>
                      <li>
                        Technologies Used: Nodejs, Expressjs, JavaScript,
                        Firebase
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 "
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-experience-header text-dark">
                    <p style={{ color: "" }}>Jan 2019 – Feb 2019</p>
                    <div className="h5">Web Development Intern</div>
                  </div>
                </div>
                <div
                  className="col-md-9 bg-success"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body text-white">
                    <div className="h6 text-warning">
                      {"  "} <b>Blueseed Ventures</b>
                    </div>
                    <ul>
                      <li>
                        Worked on UI development, User Authentication, and
                        integrated payment gateway like paypal and stripe.
                      </li>
                      <li>
                        Technologies Used: Nodejs, Expressjs, JavaScript,
                        MongoDB, HTML, CSS, Bootstrap
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

export default Experience;
