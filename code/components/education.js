import React from "react";
import { getAll } from "../lib/api/education";

class Education extends React.Component {
  // default init
  static defaultProps = {
    education: null
  };
  //constructor
  constructor(props) {
    super(props);

    //state
    this.state = {
      education: []
    };
  }
  //componentDidMount
  async componentDidMount() {
    try {
      getAll()
        .then(education => {
          this.setState({ education });
        })
        .catch(err => {
          console.log({ message: err });
        });
    } catch (err) {
      console.log(err);
    }
  }
  //render
  render() {
    return (
      <div
        id="education"
        className="education-section bg-color section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="section-title">
                <h1>Education</h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="section-content">
                <div className="text-info">
                  <h4>Just My Educational Background</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="education-info">
                  <img
                    className="img-responsive"
                    src="images/education/1.png"
                    alt="Image"
                  />
                  <h3>Montana State University</h3>
                  <h5>Bachalor of Arts</h5>
                  <h6>1999 - 2003</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <hr />
                <div className="education-info">
                  <img
                    className="img-responsive"
                    src="images/education/2.png"
                    alt="Image"
                  />
                  <h3>Montana State University</h3>
                  <h5>University of Bristol</h5>
                  <h6>1999 - 2003</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <hr />
                <div className="education-info">
                  <img
                    className="img-responsive"
                    src="images/education/3.png"
                    alt="Image"
                  />
                  <h3>Cincinnati Christian University</h3>
                  <h5>Bachalor of Arts</h5>
                  <h6>1999 - 2003</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
