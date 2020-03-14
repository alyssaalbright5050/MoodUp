import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { tracking } from "./tracking.js";
import "./style.css";



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div style={{ background: "White" }}className="container"> 
      <div style={{ height: "200vh", width: "200vh",
        margin: "10px 25px", color: "blue" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text black-text text-darken-1">
                Answer a Few Questions About How You Are Feeling Today: {" "}</p>
  {/* First Question             */}
  <div className="flow-text dark blue-text text-darken-1">
              <div style={{ height: "1vh" }} class="row">
                <div className="col s12 center-align">
                  <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>Rate Your Day Overall:</span>
                </div>
              </div>
              <div  id="OneSaddest" class="row">
                <div class="col s1"></div>
                <div class="col s2">
                  <img src={require("../images/saddest2.JPG")} alt="Saddest" style={{ width: "125", height: "125px", margin: "3px" }} />
                </div>
                <div id="OneSad" class="col s2">
                  <img src={require("../images/sad2.JPG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="A little Sad" />
                </div>
                <div id="OneNeutral" class="col s2">
                  <img src={require("../images/neutral2.JPG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="Neutral" />
                </div>
                <div id="OneHappy" class="col s2">
                  <img src={require("../images/happy2.JPG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="A bit Happy" />
                </div>
                <div id="OneHappiest" class="col s2">
                  <img src={require("../images/happiest2.JPG")} style={{ width: "125px", height: "125px", margin: "3px" }} alt="Happiest" />
                </div>
                <div class="col s1"> </div>
              </div>
              </div>
{/* Second Question */}
<div className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>Rate Your Happiness Level:</span>
                  </div>
                </div>
                <div id="TwoSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest2.JPG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="TwoSad" class="col s2">
                    <img src={require("../images/sad2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="TwoNeutral"class="col s2">
                    <img src={require("../images/neutral2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="TwoHappy" class="col s2">
                    <img src={require("../images/happy2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="TwoHappiest"class="col s2">
                    <img src={require("../images/happiest2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
                </div>
{/* Third Question */}

<div className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>Rate Your Stress Level:</span>
                  </div>
                </div>
                <div id="ThirdSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest2.JPG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="ThirdSad" class="col s2">
                    <img src={require("../images/sad2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="ThirdNeutral"class="col s2">
                    <img src={require("../images/neutral2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="ThirdHappy" class="col s2">
                    <img src={require("../images/happy2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="ThirdHappiest"class="col s2">
                    <img src={require("../images/happiest2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
                </div>

  {/* Fourth Question */}

  <div className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>Rate Your Energy Level:</span>
                  </div>
                </div>
                <div id="FourthSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest2.JPG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="FourthSad" class="col s2">
                    <img src={require("../images/sad2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="FourthNeutral"class="col s2">
                    <img src={require("../images/neutral2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="FourthHappy" class="col s2">
                    <img src={require("../images/happy2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="FourthHappiest"class="col s2">
                    <img src={require("../images/happiest2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
                </div>

 {/* Fifth Question */}

 <div className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>How Well Did You Sleep Last Night:</span>
                  </div>
                </div>
                <div id="FifthSaddest"class="row">
                  <div class="col s1"></div>
                  <div class="col s2">
                    <img src={require("../images/saddest2.JPG")} alt="Saddest" style={{width: "125", height: "125px", margin: "3px"}} /> 
                  </div>
                  <div id="FifthSad" class="col s2">
                    <img src={require("../images/sad2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A little Sad" />
                  </div>
                  <div id="FifthNeutral"class="col s2">
                    <img src={require("../images/neutral2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Neutral" />
                  </div>
                  <div id="FifthHappy" class="col s2">
                    <img src={require("../images/happy2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="A bit Happy" />
                  </div>
                  <div id="FifthHappiest"class="col s2">
                    <img src={require("../images/happiest2.JPG")} style={{width: "125px", height: "125px", margin: "3px"}} alt="Happiest" />
                  </div>
                  <div class="col s1"> </div>
                </div>
                </div>
  {/* Sixth Question            */}

  <div className="flow-text dark blue-text text-darken-1">
                <div style={{ height: "1vh" }}class="row">
                  <div className="col s12 center-align">
                    <span style={{ fontFamily: "Rum Raisin", fontSize: "30px",color: "blue" }}>Have You Worked Out in the last 24 Hours?</span>
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
                </div>
            </h4>
            
            <div style={{ height: "1vh" }}class="row">  
            
            <div class="col s2">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onJournalClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Journal
            </button>
            </div>
            <div class="col s6"></div>

            <div class="col s2"> 
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
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

//module.exports = Dashboard; 