import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sid from "../img/Sid.jpg";
import bg from "../img/pic1.jpg";
import { Element } from "react-scroll";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Element name="home" className="element">
        <div className="profile-page" id="home">
          <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
              <div
                className="page-header-image"
                data-parallax="true"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <div className="container">
                <div className="content-center">
                  <div className="cc-profile-image">
                    <a href="/#">
                      <img src={Sid} alt="Profile Pic" />
                    </a>
                  </div>
                  <div className="h2 title">Siddhant Mund</div>
                  <br />
                  <p className="category text-warning">
                    MERN Stack Web Developer and Tech Enthusiast
                  </p>
                  <a
                    className="btn btn-success smooth-scroll mr-2"
                    href="#contact"
                    data-aos="zoom-in"
                    data-aos-anchor="data-aos-anchor"
                  >
                    Contact Me
                  </a>
                  <a
                    className="btn btn-success"
                    href="https://drive.google.com/file/d/12OoauSZ004WYKTZPBVaqN24JBcg3wwy3/view?usp=sharing"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Landing;
