import React, { Component } from "react";
import Text from "../common/Textbox";
import * as SchoolModelHelper from "../../models/ui/schoolOnboarding";
import BasicFields from "./OnboardingBasicFields";

export class SchoolOnboarding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...SchoolModelHelper.defaultProperties,
    };
  }

  async componentDidMount() {
    await this.props.getCountres();
    await this.props.getStates();
    await this.props.getCites();
  }

  render() {
    //let images = this.props.imageList;
    return <BasicFields {...this.state} {...this.props}></BasicFields>;
  }
}

export default connect(
  (state) => ({ ...state.SchoolOnboarding }),
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(SchoolOnboarding);
