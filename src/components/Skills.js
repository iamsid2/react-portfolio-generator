import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";

class Skills extends React.Component {
  render() {
    return (
      <Element name="skills" className="element">
        <div className="section" id="about">
          <div className="container">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Skills</span>
            </div>
            <div
              className="card text-white bg-success"
              data-aos="fade-up"
              data-aos-offset="10"
            >
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">Web Development</div>
                    <button type="button" className="btn btn-warning">
                      Reactjs <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Nodejs <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Expressjs{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      JavaScript{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      HTML <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      CSS <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Bootstrap{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <br />
                    <br />
                    <div className="h4 mt-0 title">Programming Languages</div>
                    <button type="button" className="btn btn-warning">
                      Python <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      C++ <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Java <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      C{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">Database</div>
                    <button type="button" className="btn btn-warning">
                      MySQL{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      MongoDB <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <br />
                    <br />
                    <div className="h4 mt-0 title">Others</div>
                    <button type="button" className="btn btn-warning">
                      Git{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Linux{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                    <button type="button" className="btn btn-warning">
                      Data Structure{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
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

export default Skills;
