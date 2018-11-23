import React from "react";
import PropTypes from "prop-types";

class Skills extends React.Component {
  // intit props
  static defaultProps = {
    skills: null
  };

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      skills: {}
    };
  }

  // render
  render() {
    return (
      <div id="skill" className="skill-section bg-color section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="section-title">
                <h1>My Skills</h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="section-content">
                <div className="text-info">
                  <h4>Experience Skill</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="progress-content">
                  <div className="rating-bar bar-left">
                    <label>Photoshop</label>
                    <span className="rating-count pull-right">90%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <label>PHP</label>
                    <span className="rating-count pull-right">40%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bar1"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <label>Html 5 & CSS 3</label>
                    <span className="rating-count pull-right">70%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bar2"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="skill rating-bar bar-right">
                    <label>Illustrator</label>
                    <span className="rating-count pull-right">80%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bar3"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <label>Joomla</label>
                    <span className="rating-count pull-right">50%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bar4"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <label>Wordpress</label>
                    <span className="rating-count pull-right">90%</span>
                    <div className="skill-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bar5"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="language-skill">
                  <div className="text-info">
                    <h4>Language skill</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                  <ul>
                    <li className="chart" data-percent="100">
                      <span className="percent" />
                      <h5>German</h5>
                    </li>
                    <li className="chart" data-percent="90">
                      <span className="percent percent1" />
                      <h5>Spanish</h5>
                    </li>
                    <li className="chart" data-percent="100">
                      <span className="percent percent2" />
                      <h5>English</h5>
                    </li>
                    <li className="chart" data-percent="30">
                      <span className="percent percent3" />
                      <h5>Latin</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
