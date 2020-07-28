import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKs } from "../utils/navigationLinks";
import homeIcon from "../images/icons/home.png";
import contactIcon from "../images/icons/contact.png";
export class NavbarLeft extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    homeLinkClassName: "active",
    profileLinkClassName: "",
    LogOutLinkClassName: "",
    signUpClassName: "",
  };

  onLinkClick = async (linkName, e) => {
    switch (linkName) {
      case NAVIGATION_LINKs.HOME_LINK:
        this.setState({
          homeLinkClassName: "active",
          profileLinkClassName: "",
          LogOutLinkClassName: "",
          signUpClassName: "",
        });
        break;
      case NAVIGATION_LINKs.PROFILE_LINK:
        this.setState({
          homeLinkClassName: "",
          profileLinkClassName: "active",
          LogOutLinkClassName: "",
          signUpClassName: "",
        });
        break;
      case NAVIGATION_LINKs.SIGN_UP_LINK:
        this.setState({
          homeLinkClassName: "",
          profileLinkClassName: "",
          LogOutLinkClassName: "",
          signUpClassName: "active",
        });
        break;
      case NAVIGATION_LINKs.LOGOUT_LINK:
        await this.props.logoutUser();
        this.setState({
          homeLinkClassName: "",
          profileLinkClassName: "",
          signUpClassName: "",
          LogOutLinkClassName: "active",
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <ul className="msa-nav">
          <li
            className={this.state.homeLinkClassName}
            onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.HOME_LINK, e)}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={this.state.profileLinkClassName}
            onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.PROFILE_LINK, e)}
          >
            <Link to="/profile">My Profile</Link>
          </li>
          <li
            className={this.state.signUpClassName}
            onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.SIGN_UP_LINK, e)}
          >
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul className="msa-nav msa-nav-align-bottom">
          <li
            className={this.state.LogOutLinkClassName}
            onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.LOGOUT_LINK, e)}
          >
            <Link to="/">
              <i className="fa fa-lock"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarLeft;
