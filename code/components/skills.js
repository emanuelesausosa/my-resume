import React from "react";
import PropTypes from "prop-types";
import { getAll } from "../lib/api/skills";

class Skills extends React.Component {
  // intit props
  static defaultProps = {
    skills: null
  };

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  //component did mount
  async componentDidMount() {
    try {
      getAll()
        .then(skills => {
          this.setState({ skills });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  // render
  render() {
    let prgSkills = this.state.skills.filter(t => t.type === "PRG");
    var prgSkillsLeftSide = [];
    var prgSkillsRigthSide = [];

    for (let i = 0; i < prgSkills.length; i++) {
      if (i % 2 !== 0) {
        prgSkillsLeftSide.push(
          <div>
            <label>{prgSkills[i].title}</label>
            <span className="rating-count pull-right">
              {prgSkills[i].percentage}%
            </span>
            <div className="skill-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={prgSkills[i].percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        );
      } else {
        prgSkillsRigthSide.push(
          <div>
            <label>{prgSkills[i].title}</label>
            <span className="rating-count pull-right">
              {prgSkills[i].percentage}%
            </span>
            <div className="skill-progress">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={prgSkills[i].percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        );
      }
    }
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
                    {prgSkillsLeftSide.map((r, index) => (
                      <div key={index}>{r}</div>
                    ))}
                  </div>

                  <div className="skill rating-bar bar-right">
                    {prgSkillsRigthSide.map((r, index) => (
                      <div key={index}>{r}</div>
                    ))}
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
