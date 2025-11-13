import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Header */}
      <header id="header" className="header sticky-top">
        <div className="branding d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <a
              href="/"
              className="logo d-flex align-items-center me-auto text-decoration-none"
            >
              <img
                src="/assets/img/logo.jpg"
                alt="BFAR logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
              <h1 className="sitename">DMS-PFO</h1>
            </a>

            <button
              className="btn btn-primary px-4 py-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section id="hero" className="hero section light-background">
          <img src="/assets/img/bg4.jpg" alt="Background" data-aos="fade-in" />

          <div className="container position-relative text-center">
            <div data-aos="fade-down" data-aos-delay="100">
              <h2 style={{ color: "black" }}>WELCOME TO BFAR-PFO</h2>
              <h3 style={{ color: "black" }}>Data Management System</h3>
              <p className="mt-3" style={{ color: "black" }}>
                Track. Manage. Sustain.
              </p>
              <button
                className="btn btn-dark mt-3 px-5 py-2"
                onClick={() => navigate("/login")}
              >
                Proceed to Login
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer light-background">
        <div className="container text-center mt-4">
          <p>
            © <strong>BFAR</strong> Provincial Fisheries Office – All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
