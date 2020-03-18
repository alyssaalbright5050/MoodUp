import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import "./style.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "scoreObject": {
        "questionOne": null,
        "questionTwo": null,
        "questionThree": null,
        "questionFour": null,
        "questionFive": null, 
        "questionSix": null
      }
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  captureScore = e => {
    const score = e.target.getAttribute("data-score")
    const id = e.target.getAttribute("data-id")
    let scoreObjectCopy = JSON.parse(JSON.stringify(this.state.scoreObject));

    scoreObjectCopy[id] = score
    console.log(scoreObjectCopy);
    this.setState({"scoreObject": scoreObjectCopy})
  }
   computeScore = scoreObject => {
    var scoreObjectCopy = Object.keys(scoreObject).map(function(key) {
      return [Number(key), scoreObject[key]];
    });

    for (var i = 0, sum = 0; i < scoreObjectCopy.length; sum += scoreObjectCopy[i++]);
    console.log(sum);
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ background: "White" }} className="center-align container">
        <div
          style={{
            height: "155vh",
            width: "135vh",
            margin: "5px",
            color: "blue"
          }}
          className="center-align container valign-wrapper"
        >
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text black-text text-darken-1">
                  Answer a Few Questions About How You Are Feeling Today:{" "}
                </p>
                {/* First Question             */}
                <div className="flow-text dark blue-text text-darken-1" id="questionOne">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        Rate Your Day Overall:
                      </span>
                    </div>
                  </div>
                  <div id="OneSaddest" class="row">
                    <div class="col s1"></div>
                    <div class="col s2">
                      <img
                        src={require("../images/saddest2.JPG")}
                        data-score="0"
                        data-id="questionOne"
                        onClick={this.captureScore}
                        alt="Saddest"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div id="OneSad" class="col s2">
                      <img
                        src={require("../images/sad2.JPG")}
                        data-score="3"
                        onClick={this.captureScore}
                        data-id="questionOne"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A little Sad"
                      />
                    </div>
                    <div id="OneNeutral" class="col s2">
                      <img
                        src={require("../images/neutral2.JPG")}
                        data-score="5"
                        onClick={this.captureScore}
                        data-id="questionOne"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Neutral"
                      />
                    </div>
                    <div id="OneHappy" class="col s2">
                      <img
                        src={require("../images/happy2.JPG")}
                        data-score="7"
                        onClick={this.captureScore}
                        data-id="questionOne"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A bit Happy"
                      />
                    </div>
                    <div id="OneHappiest" class="col s2">
                      <img
                        src={require("../images/happiest2.JPG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionOne"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Happiest"
                      />
                    </div>
                    <div className="col s1"> </div>
                  </div>
                </div>
                {/* Second Question */}
                <div className="flow-text dark blue-text text-darken-1" id="questionTwo">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        Rate Your Happiness Level:
                      </span>
                    </div>
                  </div>
                  <div id="TwoSaddest" class="row">
                    <div class="col s1"></div>
                    <div class="col s2">
                      <img
                        src={require("../images/saddest2.JPG")}
                        data-score="0"
                        onClick={this.captureScore}
                        data-id="questionTwo"
                        alt="Saddest"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div id="TwoSad" class="col s2">
                      <img
                        src={require("../images/sad2.JPG")}
                        data-score="3"
                        onClick={this.captureScore}
                        data-id="questionTwo"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A little Sad"
                      />
                    </div>
                    <div id="TwoNeutral" class="col s2">
                      <img
                        src={require("../images/neutral2.JPG")}
                        data-score="5"
                        onClick={this.captureScore}
                        data-id="questionTwo"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Neutral"
                      />
                    </div>
                    <div id="TwoHappy" class="col s2">
                      <img
                        src={require("../images/happy2.JPG")}
                        data-score="7"
                        onClick={this.captureScore}
                        data-id="questionTwo"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A bit Happy"
                      />
                    </div>
                    <div id="TwoHappiest" class="col s2">
                      <img
                        src={require("../images/happiest2.JPG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionTwo"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Happiest"
                      />
                    </div>
                    <div className="col s1"> </div>
                  </div>
                </div>
                {/* Third Question */}
                <div className="flow-text dark blue-text text-darken-1" id="questionThree">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        Rate Your Stress Level:
                      </span>
                    </div>
                  </div>
                  <div id="ThirdSaddest" class="row">
                    <div class="col s1"></div>
                    <div class="col s2">
                      <img
                        src={require("../images/saddest2.JPG")}
                        data-score="0"
                        onClick={this.captureScore}
                        data-id="questionThree"
                        alt="Saddest"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div id="ThirdSad" class="col s2">
                      <img
                        src={require("../images/sad2.JPG")}
                        data-score="3"
                        onClick={this.captureScore}
                        data-id="questionThree"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A little Sad"
                      />
                    </div>
                    <div id="ThirdNeutral" class="col s2">
                      <img
                        src={require("../images/neutral2.JPG")}
                        data-score="5"
                        onClick={this.captureScore}
                        data-id="questionThree"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Neutral"
                      />
                    </div>
                    <div id="ThirdHappy" class="col s2">
                      <img
                        src={require("../images/happy2.JPG")}
                        data-score="7"
                        onClick={this.captureScore}
                        data-id="questionThree"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A bit Happy"
                      />
                    </div>
                    <div id="ThirdHappiest" class="col s2">
                      <img
                        src={require("../images/happiest2.JPG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionThree"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Happiest"
                      />
                    </div>
                    <div className="col s1"> </div>
                  </div>
                </div>
                {/* Fourth Question */}
                <div className="flow-text dark blue-text text-darken-1" id="questionFour">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        Rate Your Energy Level:
                      </span>
                    </div>
                  </div>
                  <div id="FourthSaddest" class="row">
                    <div class="col s1"></div>
                    <div class="col s2">
                      <img
                        src={require("../images/saddest2.JPG")}
                        data-score="0"
                        onClick={this.captureScore}
                        data-id="questionFour"
                        alt="Saddest"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div id="FourthSad" class="col s2">
                      <img
                        src={require("../images/sad2.JPG")}
                        data-score="3"
                        onClick={this.captureScore}
                        data-id="questionFour"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A little Sad"
                      />
                    </div>
                    <div id="FourthNeutral" class="col s2">
                      <img
                        src={require("../images/neutral2.JPG")}
                        data-score="5"
                        onClick={this.captureScore}
                        data-id="questionFour"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Neutral"
                      />
                    </div>
                    <div id="FourthHappy" class="col s2">
                      <img
                        src={require("../images/happy2.JPG")}
                        data-score="7"
                        onClick={this.captureScore}
                        data-id="questionFour"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A bit Happy"
                      />
                    </div>
                    <div id="FourthHappiest" class="col s2">
                      <img
                        src={require("../images/happiest2.JPG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionFour"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Happiest"
                      />
                    </div>
                    <div className="col s1"> </div>
                  </div>
                </div>
                {/* Fifth Question */}
                <div className="flow-text dark blue-text text-darken-1" id="questionFive">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        How Well Did You Sleep Last Night:
                      </span>
                    </div>
                  </div>
                  <div id="FifthSaddest" class="row">
                    <div class="col s1"></div>
                    <div class="col s2">
                      <img
                        src={require("../images/saddest2.JPG")}
                        data-score="0"
                        onClick={this.captureScore}
                        data-id="questionFive"
                        alt="Saddest"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div id="FifthSad" class="col s2">
                      <img
                        src={require("../images/sad2.JPG")}
                        data-score="3"
                        onClick={this.captureScore}
                        data-id="questionFive"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A little Sad"
                      />
                    </div>
                    <div id="FifthNeutral" class="col s2">
                      <img
                        src={require("../images/neutral2.JPG")}
                        data-score="5"
                        onClick={this.captureScore}
                        data-id="questionFive"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Neutral"
                      />
                    </div>
                    <div id="FifthHappy" class="col s2">
                      <img
                        src={require("../images/happy2.JPG")}
                        data-score="7"
                        onClick={this.captureScore}
                        data-id="questionFive"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="A bit Happy"
                      />
                    </div>
                    <div id="FifthHappiest" class="col s2">
                      <img
                        src={require("../images/happiest2.JPG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionFive"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="Happiest"
                      />
                    </div>
                    <div className="col s1"> </div>
                  </div>
                </div>
                {/* Sixth Question            */}
                <div className="flow-text dark blue-text text-darken-1" id="questionSix">
                  <div style={{ height: "1vh" }} className="row">
                    <div className="col s12 center-align">
                      <span
                        style={{
                          fontFamily: "Rum Raisin",
                          fontSize: "30px",
                          color: "blue"
                        }}
                      >
                        Have You Worked Out in the last 24 Hours?
                      </span>
                    </div>
                  </div>
                  <div id="SixthYes" className="row">
                    <div className="col s3"></div>

                    <div className="col s2">
                      <img
                        src={require("../images/thumbsup.JPEG")}
                        data-score="10"
                        onClick={this.captureScore}
                        data-id="questionSix"
                        alt="Yes"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                      />
                    </div>
                    <div
                      id="FifthSad"
                      onClick={this.captureScore}
                      data-id="questionSix"
                      className="col s1"
                    ></div>

                    <div id="FifthNeutral" class="col s2">
                      <img
                        src={require("../images/thumbsdown.JPEG")}
                        data-score="0"
                        onClick={this.captureScore}
                        data-id="questionSix"
                        style={{ width: "75", height: "75px", margin: "3px" }}
                        alt="NO"
                      />
                    </div>

                    <div className="col s3"> </div>
                  </div>
                </div>
              </h4>

              <div style={{ height: "1vh" }} className="row">
                <div className="col s2">
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    onClick={this.computeScore}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Submit
                  </button>
                </div>
                <div className="col s6"></div>

                <div className="col s2">
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
