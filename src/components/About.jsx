import React from "react";
import "./About.css";

function About() {
  return (
    <section className="card">
      <div className="cards__wrapper">
        <div className="cards__items__img ">
          <img src="./images/img-1.jpg" />
        </div>
        <div className="cards__items">
          <div id="About-us"></div>
          <p>
            <h1> ABOUT US</h1>
            <h2>Historical Background of Rift Valley university</h2>
            When the first eager students set foot on the campus in Adama in
            October 2000, they beheld a very different setting from the spacious
            and forested compound with one modern building, and a number of
            blocks that house administrative offices, laboratories, libraries
            and quite a number of classrooms students see today. Ato Dinku
            Deyasa, a renowned investor and owner of NAFYAD PLC and Ato Reta
            Bekele, former President of Adama and Jima High Courts envisaged the
            necessity of founding a private higher education institution mainly
            aimed at curbing the country’s dearth of qualified human resources.
            Needs analysis was conducted to identify the fields of study most
            desired by the community in and around Adama and Asella towns. On
            the basis of the findings, the founders made all the necessary
            preparations that would enable them to begin academic programs at a
            diploma level in five fields of study – namely, Accounting, Computer
            Science, Law, Marketing Management, and Secretarial Science and
            Office Management.
            <a
              href="https://riftvalleyuniversity.org/history/"
              target="_blank"
              class="btn btn-dark border">
              Read More
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
