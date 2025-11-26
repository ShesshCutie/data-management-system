import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Header Section */}
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center"></div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
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

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>

                <li className="dropdown">
                  <a href="#">
                    <span>Data Records</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                      <Link to="/beneficiaries">Beneficiaries</Link>
                  </ul>
                </li>
                {/* <li>
                  <a href="/technical-assistance">Technical Assistance</a>
                </li> */}

                {/* <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#monitoring">Monitoring</a>
                </li>

                <li className="dropdown">
                  <a href="#">
                    <span>Reports</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#monthly">Monthly Reports</a>
                    </li>
                    <li>
                      <a href="#quarterly">Quarterly Reports</a>
                    </li>
                    <li>
                      <a href="#annual">Annual Reports</a>
                    </li>
                    <li>
                      <a href="#custom">Custom Reports</a>
                    </li>
                  </ul>
                </li> */}

                <li className="dropdown">
                  <a href="#">
                    <span>Fisheries Data</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#fisherfolk">Fisherfolk Registry</a>
                    </li>
                    <li>
                      <a href="#production">Fish Production</a>
                    </li>
                    <li>
                      <a href="#aquaculture">Aquaculture Farms</a>
                    </li>
                    <li>
                      <a href="#permits">Permits & Licensing</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            {/* <Link to="/login" className="cta-btn d-none d-sm-block">
              Login
            </Link> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section id="hero" className="hero section light-background">
          <img src="/assets/img/bg4.jpg" alt="" data-aos="fade-in" />

          <div className="container position-relative">
            <div
              className="welcome position-relative"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <h2 style={{ color: "black" }}>WELCOME TO BFAR-PFO</h2>
              <h3 style={{ color: "black" }}>Data Management System</h3>
            </div>

            <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div
                  className="why-box"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                >
                  <p>
                    The BFAR-PFO Data Management System (DMS) provides an
                    integrated platform for managing fisheries data, projects, and
                    reports. It supports data-driven decision-making for
                    sustainable fisheries development and effective provincial
                    monitoring.
                  </p>
                  <p>Track. Manage. Sustain.</p>
                  <div className="text-center">
                    <a href="#about" className="more-btn">
                      <span>Learn More</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay="300"
                      >
                        <i className="bi bi-clipboard-data"></i>
                        <h4>Fisheries Data Management</h4>
                        <p>
                          Collect, organize, and analyze fisheries production,
                          licensing, and resource data to support informed planning
                          and reporting.
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay="400"
                      >
                        <i className="bi bi-gem"></i>
                        <h4>Resource Monitoring</h4>
                        <p>
                          Monitor marine resources, aquaculture operations, and
                          coastal management programs with real-time data updates
                          and analytics.
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay="500"
                      >
                        <i className="bi bi-inboxes"></i>
                        <h4>Provincial Support Services</h4>
                        <p>
                          Facilitate permit processing, fisherfolk registration,
                          project implementation, and technical assistance across
                          municipal fisheries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer light-background">
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">BFAR</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by{" "}
            <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by{" "}
            <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
