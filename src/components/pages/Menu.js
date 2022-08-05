import React from "react";
import Burger1 from "../images/burger1.jpg";
import Burger2 from "../images/burger2.jpg";
import Burger3 from "../images/burger3.jpg";
import Burger4 from "../images/burger4.jpg";
import Burger5 from "../images/burger5.jpg";
import Burger6 from "../images/burger6.jpg";
import Burger7 from "../images/burger7.jpg";
import Burger8 from "../images/burger8.jpg";
import Burger9 from "../images/burger9.jpg";
import Burger10 from "../images/burger10.jpg";
import Burger11 from "../images/burger11.jpg";
import Burger12 from "../images/burger12.jpg";
import Footer from '../Footer';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <div>
      <h2 className="Menu-Heading">Our Menu</h2>
      <section id="Menu-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Top Picks</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Burgers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Chrunch</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Fries</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Appetize</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Momos</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Pizza</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger8} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Wrakes</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Sharpes</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger10} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Collers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger11} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Injectors</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card">
                <img src={Burger12} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>ITS-HOT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <Footer/>
        </div>
      </section>
    </div>
  );
}
