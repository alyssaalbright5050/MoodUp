import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { tracking } from "./tracking.js";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div style={{ background: "White" }}className="container"> 
      <div style={{ height: "200vh", color: "blue" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text black-text text-darken-1">
                Answer a Few Questions About How You Are Feeling Today: {" "}</p>
  {/* First Question             */}
            <p className="flow-text dark blue-text text-darken-1">
              <div style={{ height: "1vh" }} class="row">
                <div className="col s12 center-align">
                  <span style={{ fontFamily: "monospace" }}>Rate Your Day Overall:</span>
                </div>
              </div>
              <div id="OneSaddest" class="row">
                <div class="col s1"></div>
                <div class="col s2">
                  <img src={require("../images/saddest.JPEG")} alt="Saddest" style={{ width: "125", height: "125px", margin: "3px" }} />
                </div>
                <div style={{
                  width: "120px", height: "120px", borderStyle: "solid", borderWidth: "3px", borderColor: "blue", 
                  webkitBoxShadow: "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)"
                }} id="OneSad" class="col s2">
                  <img src={require("../images/slightlysad.JPEG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="A little Sad" />
                </div>
                <div id="OneNeutral" class="col s2">
                  <img src={require("../images/neutralface.JPEG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="Neutral" />
                </div>
                <div id="OneHappy" class="col s2">
                  <img src={require("../images/slightlyhappy.JPEG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="A bit Happy" />
                </div>
                <div id="OneHappiest" class="col s2">
                  <img src={require("../images/happiest.JPEG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="Happiest" />
                </div>
                <div class="col s1"> </div>
              </div>
            </p>
{/* Second Question */}
              <p className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "monospace" }}>Rate Your Happiness Level:</span>
                  </div>
                </div>
                <div id="TwoSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest.JPEG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="TwoSad" class="col s2">
                    <img src={require("../images/slightlysad.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="TwoNeutral"class="col s2">
                    <img src={require("../images/neutralface.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="TwoHappy" class="col s2">
                    <img src={require("../images/slightlyhappy.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="TwoHappiest"class="col s2">
                    <img src={require("../images/happiest.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
              </p>
{/* Third Question */}

<p className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "monospace" }}>Rate Your Stress Level:</span>
                  </div>
                </div>
                <div id="ThirdSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest.JPEG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="ThirdSad" class="col s2">
                    <img src={require("../images/slightlysad.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="ThirdNeutral"class="col s2">
                    <img src={require("../images/neutralface.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="ThirdHappy" class="col s2">
                    <img src={require("../images/slightlyhappy.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="ThirdHappiest"class="col s2">
                    <img src={require("../images/happiest.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
              </p>

  {/* Fourth Question */}

<p className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "monospace" }}>Rate Your Energy Level:</span>
                  </div>
                </div>
                <div id="FourthSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest.JPEG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="FourthSad" class="col s2">
                    <img src={require("../images/slightlysad.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="FourthNeutral"class="col s2">
                    <img src={require("../images/neutralface.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="FourthHappy" class="col s2">
                    <img src={require("../images/slightlyhappy.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="FourthHappiest"class="col s2">
                    <img src={require("../images/happiest.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
              </p>

 {/* Fifth Question */}

<p className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "monospace" }}>How Well Did You Sleep Last Night:</span>
                  </div>
                </div>
                <div id="FifthSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest.JPEG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="FifthSad" class="col s2">
                    <img src={require("../images/slightlysad.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="FifthNeutral"class="col s2">
                    <img src={require("../images/neutralface.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="FifthHappy" class="col s2">
                    <img src={require("../images/slightlyhappy.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="FifthHappiest"class="col s2">
                    <img src={require("../images/happiest.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
              </p>
  {/* Sixth Question            */}

  <p className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "monospace" }}>Have You Worked Out in the last 24 Hours?</span>
                  </div>
                </div>
                <div id="SixthYes"class="row">
                  <div class="col s3"></div>

                  <div class="col s2">
                    <img src={require("../images/thumbsup.JPEG")} alt="Yes" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="FifthSad" class="col s1"></div>

                  <div id="FifthNeutral"class="col s2">
                    <img src={require("../images/thumbsdown.JPEG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="NO" />
                  </div>
                  
                  <div class="col s3"> </div>
                </div>
              </p>
            </h4>
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
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

module.exports = Dashboard; 