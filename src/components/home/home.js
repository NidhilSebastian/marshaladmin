import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/reducers/home";
import SchoolOnboarding from "../schoolOnboarding/schoolOnboarding";

export class Home extends Component {
  async componentDidMount() {
    await this.props.getImages();
  }

  render() {
    let images = this.props.imageList;
    return <SchoolOnboarding></SchoolOnboarding>;
  }
}

export default connect(
  (state) => ({ ...state.home }),
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Home);
