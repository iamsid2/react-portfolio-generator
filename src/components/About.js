import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

class About extends React.Component {
  render() {
    return (
      <Element name="about" className="element">
        <div className="section" id="about">
          <div className="container">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">About</span>
            </div>
            <div className="card" data-aos="fade-up" data-aos-offset="10">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">About</div>
                    <p>
                      Hello! I'm Siddhant -- A MERN stack web developer and
                      Machine Learning enthusiast .{" "}
                    </p>
                    <p>
                      I have experience in web developemtent and Freelancing.
                      Strong engineering professional with a Bachelor's degree
                      focused in Computer Science & Engineering from College of
                      Engineering and Technology, Bhubaneswar.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 bg-success text-white">
                  <div className="card-body">
                    {/* <div className="h4 mt-0 title">About Me</div> */}
                    <div className="row mt-3">
                      <div className="col-sm-4">
                        <strong className="text-uppercase">Email:</strong>
                      </div>
                      <div className="col-sm-8">siddhantmund02@gmail.com</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4">
                        <strong className="text-uppercase">Mobile:</strong>
                      </div>
                      <div className="col-sm-8">+91-7008847673</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4">
                        <strong className="text-uppercase">Address:</strong>
                      </div>
                      <div className="col-sm-8">
                        Lane no. 1, Tarini Mandir Road, Bhawanipatna, Odisha
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4">
                        <strong className="text-uppercase">Language:</strong>
                      </div>
                      <div className="col-sm-8">English, Hindi, Odia</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4">
                        <strong className="text-uppercase">Hobbies:</strong>
                      </div>
                      <div className="col-sm-8">
                        Playing Cricket & Playing Guitar
                      </div>
                    </div>
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

export default About;
