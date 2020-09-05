import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../img/pic3.jpg";

class Contact extends React.Component {
  render() {
    return (
      <Element name="contact" className="element">
        <div className="section" id="contact">
          <div
            className="cc-contact-information"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="container">
              <div className="cc-contact">
                <div className="row">
                  <div className="col-md-9">
                    <div className="card mb-0" data-aos="zoom-in">
                      <div className="h4 text-center title">Contact Me</div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body">
                            <form
                              action="mailto:shaktimund97@gmail.com"
                              method="GET"
                            >
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="input-group">
                                    <span className="input-group-addon">
                                      <i className="fa fa-user-circle"></i>
                                    </span>
                                    <input
                                      className="form-control"
                                      name="subject"
                                      type="text"
                                      placeholder="Subject"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="form-group">
                                    <textarea
                                      className="form-control"
                                      name="body"
                                      placeholder="Your Message"
                                      required
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="submit"
                                className="btn btn-success"
                                value="Send"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="mb-0">
                              <strong>Address </strong>
                            </p>
                            <p className="pb-2">
                              Lane no. 1, Tarini Mandir Road, Bhawanipatna,
                              Odisha
                            </p>
                            <p className="mb-0">
                              <strong>Phone</strong>
                            </p>
                            <p className="pb-2">+91-7008847673</p>
                            <p className="mb-0">
                              <strong>Email</strong>
                            </p>
                            <p>siddhantmund02@gmail.com</p>
                          </div>
                        </div>
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

export default Contact;
