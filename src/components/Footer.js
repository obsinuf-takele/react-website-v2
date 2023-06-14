import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">For More Information</p>
      </section> */}
      {/* <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="social-media-wrap">
          <div class="footer-logo"></div>
           <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}

      <section class="social-media">
        <div class="social-media-wrap">
          {/* <div class="footer-logo"></div> */}
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a href="tel:+251111263867">Call Us: +251111263867</a>
            <a href="mailto:gulelec@riftvalleyuniversity.org">
              Email: gulelec@riftvalleyuniversity.org{" "}
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
          </div>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/Rift-Valley-University-Gullale-Campus-101021331884901/photos/?ref=page_internal"
              target="_blank"
              aria-label="Facebook">
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/riftvalleyuniversity/"
              target="_blank"
              aria-label="Instagram">
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/universityrv"
              target="_blank"
              aria-label="Twitter">
              <i class="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com/riftvalleyuniversity"
              target="_blank"
              aria-label="Youtube">
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
