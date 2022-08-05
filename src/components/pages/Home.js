import React from "react";
import "../../App.css";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Burger1 from "../images/burger1.jpg";
import Burger2 from "../images/burger2.jpg";
import Burger3 from "../images/burger3.jpg";
import Burger4 from "../images/burger4.jpg";
import Burger5 from "../images/burger5.jpg";
import Burger6 from "../images/burger6.jpg";
export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Burger1}
              className="d-block w-100  carosoul-image"
              height="400"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Burger with Cheese</h5>
              <p>Some representative placeholder content for this burger.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Burger2} class="d-block w-100 carosoul-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Burger with Cheese and Vegetables on Red Surface</h5>
              <p>The veg patty mixture is stuffed with grated cheese.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Burger3} class="d-block w-100 carosoul-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ham and Bacon Burger</h5>
              <p>Form ground chuck into ¼ pound patties.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Section 2 for Best ever Burgers */}
      <section id="Homesec2">
        <div className="container">
          <h5 className="Homeheading1">Burger Items Available</h5>
          <h1 className="Homeheading2">Best Ever Burger</h1>
          <div className="row">
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger1}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Beefy Burger</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$5</p>
              </div>
            </div>
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger2}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Burger Boys</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$8</p>
              </div>
            </div>
          </div>
          {/* Row2 */}
          <div className="row">
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger3}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Burger Bizz</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$12</p>
              </div>
            </div>
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger4}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Crackles Burger</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$15</p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger5}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Bull Burger</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$18</p>
              </div>
            </div>
            <div className="col-lg-6 Homesec2-row">
              <img
                src={Burger6}
                alt=""
                srcset=""
                className="img-fluid Home-Burger"
              />
              <div>
                <h4 className="burger-name">Rocket Burger</h4>
                <p className="burger-subdetails">
                  Great way to make your business appear trust and relevant
                </p>
                <p className="burger-price">$22</p>
              </div>
            </div>

            <div className="Homebtn">
              <button className="wholeButton">
                <a href="#" className="moreItem">
                  More Item
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Start of Section 3 */}
      <section id="Homesec3">
        <div className="container middlesec">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="myimage">
                <div>
                  <h3 className="dollar">$20</h3>
                  <h1 className="middlesec-title">The Burger President</h1>
                  <p className="title-describe">
                    Great way to make your business trust and relevant
                  </p>
                  <button className="middlesec-order">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="myimage1">
                <div>
                  <h3 className="dollar">$20</h3>
                  <h1 className="middlesec-title1">The Burger President</h1>
                  <p className="title-describe1">
                    Great way to make your business trust and relevant
                  </p>
                  <button className="middlesec-order">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 will Start From Here */}
      <section id="Homesec4">
        
          <About />

      </section>
    </div>
  );
}
