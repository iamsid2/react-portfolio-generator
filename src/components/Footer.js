import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        &copy; {new Date().getFullYear()}
        <br />
        Designed & Developed by Siddhant Mund
      </footer>
    );
  }
}

export default Footer;
