import React from "react";

import { getAll } from "../lib/api/experience";

class Experience extends React.Component {
  // default props
  static defaultProps = {
    experiences: null
  };

  // constructor
  constructor(props) {
    super(props);

    this.state = {
      experiences: []
    };
  }

  // componentDidMount
  async componentDidMount() {
    try {
      getAll()
        .then(experiences => {
          this.setState({ experiences });
          console.log(this.state);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // render
  render() {
    return (
      <div id="exprience" className="exprience-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="section-title">
                <h1>My Exprience</h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="text-info">
                <h4>15 Years Exprience</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              {this.state.experiences.map(r => (
                <div className="exprience" key={r.id}>
                  <div className="exprience-image">
                    <img
                      className="img-responsive"
                      src={this.state.experiences.companyLogo}
                      alt="Image"
                    />
                  </div>
                  <div className="exprience-info">
                    <h3>{r.title}</h3>
                    <h5>
                      {r.startDate} - {r.endDate}
                    </h5>
                    <p>{r.briefDescription}</p>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
