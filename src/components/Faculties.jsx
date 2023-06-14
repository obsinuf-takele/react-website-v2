import React from "react";
import "./Faculties.css";

function Faculties() {
  return (
    <section className="course" id="Faculties">
      <h1>FACULTIES</h1>
      {/* <p className="sub-header">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p> */}
      <div className="all-row">
        <div>
          <div className="course-col">
            <h3>Techno & Engineering</h3>
            <div className="row">
              <div>
                <h4>UP</h4>
                <ul>
                  <p>Civil Engineering</p>
                  <p>Survey Engineering</p>
                  <p>Computer Science</p>
                  <p>Mechanical</p>
                </ul>
              </div>

              <div>
                <h4>GP</h4>
                <ul>
                  <p></p>
                  <p>Coming Soon..</p>
                  <p></p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="course-col">
            <h3>Business & Social Science</h3>
            <div className="row">
              <div>
                <h4>UP</h4>
                <ul>
                  <p>Accounting and Finance</p>
                  <p>Business Management</p>
                  <p>Economics</p>
                  <p>Marketing Management</p>
                  <p>HR management and Leadership</p>
                </ul>
              </div>

              <div>
                <h4>GP</h4>
                <ul>
                  <p>Accounting and Finance</p>
                  <p>Business Management</p>
                  <p>Project management</p>
                  <p>Marketing Management</p>
                  <p>HR management and Leadership</p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="course-col">
            <h3>Health Sciences</h3>
            <div className="row">
              <div>
                <h4>UP</h4>
                <ul>
                  <p>Medical Laborarory</p>
                  <p>Nursing</p>
                  <p>Pharmacy</p>
                  <p>Public Health</p>
                </ul>
              </div>

              <div>
                <h4>GP</h4>
                <ul>
                  <p></p>
                  <p>Public Health(MPH)</p>
                  <p></p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculties;
