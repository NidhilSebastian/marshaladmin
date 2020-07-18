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

  render() {
    return <BasicFields {...this.state}></BasicFields>;
  }
}

export default SchoolOnboarding;
