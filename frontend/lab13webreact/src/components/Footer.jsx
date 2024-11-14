import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid my-5">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#343a40" }} // Cambié a un color oscuro
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} // Cambié a un color blanco semitransparente
        >
          © {new Date().getFullYear()} 
          <a className="text-light" href="#">
            Productos
          </a>
        </div>
      </footer>
    </div>
  );
};