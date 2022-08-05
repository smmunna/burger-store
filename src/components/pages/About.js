import React from "react";
import Footer from "../Footer";
import Munna from "../images/munna.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
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
                <span className="AboutUnderPicCommnents">
                  Minhazul Abedin Munna
                </span>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="Abouttext1">
                <h5 className="AbouttextFont btn btn-primary">About us</h5>
                <h2 className="AbouttextFont">Best Burger in your City</h2>
                <p className="AbouttextFont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  aut eligendi dolores enim quod sit at, dolorum, perferendis
                  similique ex labore ea optio delectus quas fuga aliquid nulla?
                  Ad corrupti repellendus consectetur in officiis laboriosam.
                  Deleniti totam quas soluta fuga quia in delectus eligendi quo!
                  Debitis minus iure voluptatum accusamus assumenda atque
                  dolorem placeat fugit sequi aspernatur quos quisquam facere
                  eius soluta sint porro dolore repudiandae, aliquid dicta
                  delectus iusto autem eum aperiam! Doloribus, praesentium
                  eveniet vitae sed expedita, excepturi facere repellendus
                  ratione accusantium ipsa alias voluptatem, architecto saepe
                  quidem earum assumenda voluptatum aliquid. Enim corporis ipsa
                  repellendus veritatis ab debitis laborum assumenda dolores
                  quasi. Neque, unde repellendus consequatur eius vel officiis
                  fuga totam vitae doloribus ex. Aut eum inventore debitis vel
                  sunt, dignissimos nulla velit beatae odio. Enim ea magnam
                  sint, pariatur reprehenderit nostrum odio soluta in recusandae
                  impedit, non quia cupiditate ab repellendus minima totam
                  atque, inventore harum?
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
