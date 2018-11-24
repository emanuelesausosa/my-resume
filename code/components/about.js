import React from "react";
import PropTypes from "prop-types";

import { getFirst } from "../lib/api/about";

class About extends React.Component {
  // defaultProps
  static defaultProps = {
    about: null
  };

  //constructor
  constructor(props) {
    super(props);

    this.state = {
      about: {}
    };
  }
  // componentDidMount

  async componentDidMount() {
    try {
      getFirst()
        .then(about => {
          this.setState({ about });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  }
  //render
  render() {
    return (
      <div id="about" className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="section-title">
                <h1>{this.state.about.nick_name}</h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="about-info">
                <p>{this.state.about.brief_description}</p>
                <div className="signature">
                  <h1>Emanuel Sosa</h1>
                </div>
              </div>
              <address>
                <p>
                  <span>Nick Name:</span> {this.state.about.nick_name}
                </p>
                <p>
                  <span>Email:</span> {this.state.about.email}
                </p>
                <p>
                  <span>Phone:</span> {this.state.about.phone_number}
                </p>
                <p>
                  <span>Date of Birth:</span> Dec 14, 1988
                </p>
                <p>
                  <span>Address:</span> {this.state.about.address}
                </p>
              </address>
              <ul className="achievement">
                <li className="achievement-info">
                  <span className="counter">35</span>
                  <h4>Projects completed</h4>
                </li>
                <li className="achievement-info">
                  <span className="counter counter1">19</span>
                  <h4>Winning Awards</h4>
                </li>
                <li className="achievement-info">
                  <span className="counter counter2">230</span>
                  <h4>Happy Clients</h4>
                </li>
                <li className="achievement-info">
                  <span className="counter counter3">19</span>
                  <h4>Running Projects</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
