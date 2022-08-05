import React from "react";
import Footer from "../Footer";
import Munna from "../images/munna.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="App">
      <section id="AboutSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="AboutImage1">
                <img
                  src={Munna}
                  className="img-fluid"
                  alt="Sm Munna"
                  srcset=""
                />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="Abouttext1">
                <h5 className="AbouttextFont">About us</h5>
                <h2 className="AbouttextFont">Best Burger in your City   <span class="badge bg-danger">False Info</span></h2>
                <p className="AbouttextFont1">
                In {year}, Our Founder – Minhazul Abedin Munna, during an international trip visited a Burger restaurant which had multiple burger options & bold flavours like PB&J, classic cheese burger which were native to the country. That’s when the idea clicked – why can’t Bangladesh has its own burger chain which sells varieties of burgers with unique and varied flavours that every Bangladeshi can relate to. That’s when The Burger Company was born!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
