import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Text from "../common/Textbox";
import * as SchoolModelHelper from "../../models/ui/schoolOnboarding";
import BasicFields from "./OnboardingBasicFields";
import { actionCreators as AddressInfoactionCreators } from "../../store/reducers/addressInfo";
import { actionCreators as SchoolonboardingactionCreators } from "../../store/reducers/SchoolOnboarding";

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

  saveOnBoarding = async () => {
    await this.props.saveSchoolOnboarding(schoolonboardingOb);
  };

  render() {
    //let images = this.props.imageList;
    return <BasicFields {...this.state} {...this.props}></BasicFields>;
  }
}

const schoolActionCreators = {
  ...AddressInfoactionCreators,
  ...SchoolonboardingactionCreators,
};

export default connect(
  (state) => ({ ...state.SchoolOnboarding, ...state.addressinfo }),
  (dispatch) => bindActionCreators(schoolActionCreators, dispatch)
)(SchoolOnboarding);
