import React, { Component } from "react";
import Text from "../common/Textbox";
import DropDown from "../common/DropDown";
import Header from "../common/Header";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Switch from "react-switch";

export class OnboardingBasicFields extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <>
      <Header headerContent="School Onboarding Form"/>
        <div className="raw pb-4 pt-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="schoolName"
              name="schoolName"
              value={this.props.schoolName || ""}
              placeholder="School Name"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="address"
              name="address"
              value={this.props.address || ""}
              placeholder="Address/Location"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>        
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="landMark"
              name="landMark"
              value={this.props.landMark || ""}
              placeholder="Landmark"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
          <DropDown
              name="country"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select country--"
          />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
          <DropDown
              name="state"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select state--"
          />
          </div>
          <div className="col-md-6 text-left disInline">
          <DropDown
              name="city"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select city--"
          />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="zipcode"
              name="zipcode"
              value={this.props.zipcode || ""}
              placeholder="ZipCode"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">          
            <PhoneInput
              country={'in'}
              id="primaryphoneno"
              name="primaryphoneno"
              value={this.props.primaryphoneno || ""}
              containerClass="react-tel-input-01"
             //onChange={phone => this.setState({ phone })}
            />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
          <PhoneInput
              country={'in'}
              id="secondryphoneno"
              name="secondryphoneno"
              value={this.props.primaryphoneno || ""}
              containerClass="react-tel-input-01"
             //onChange={phone => this.setState({ phone })}
            />
          </div>
          <div className="col-md-6 text-left disInline">
          <PhoneInput
              country={'in'}
              id="otherphoneno"
              name="otherphoneno"
              value={this.props.primaryphoneno || ""}
              containerClass="react-tel-input-01"
             //onChange={phone => this.setState({ phone })}
            />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="fax"
              name="fax"
              value={this.props.fax || ""}
              placeholder="Fax"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="emailid"
              name="emailid"
              value={this.props.emailid || ""}
              placeholder="Email Id"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="board"
              name="board"
              value={this.props.board || ""}
              placeholder="Recognition By/Board"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="affiliationno"
              name="affiliationno"
              value={this.props.affiliationno || ""}
              placeholder="Affiliation Number"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="affiliationperiod"
              name="affiliationperiod"
              value={this.props.affiliationperiod || ""}
              placeholder="Affiliation Period"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
          <DropDown
              name="foundedin"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select founded year--"
          />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="inaugurationdate"
              name="inaugurationdate"
              value={this.props.inaugurationdate || ""}
              placeholder="Inauguration Date"
              type="date"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="principalqualification"
              name="principalqualification"
              value={this.props.principalqualification || ""}
              placeholder="Principal Qualification"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="principalworkexp"
              name="principalworkexp"
              value={this.props.principalworkexp || ""}
              placeholder="Principal Work Experience"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="societytrustname"
              name="societytrustname"
              value={this.props.societytrustname || ""}
              placeholder="Society/Trust Name"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="edusystem"
              name="edusystem"
              value={this.props.edusystem || ""}
              placeholder="Educational System"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="learningmedium"
              name="learningmedium"
              value={this.props.learningmedium || ""}
              placeholder="Learning Medium"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="classrooms"
              name="classrooms"
              value={this.props.classrooms || ""}
              placeholder="Number of Classrooms"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="labs"
              name="labs"
              value={this.props.labs || ""}
              placeholder="Number of Labs"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-3 text-left disInline">
            <label className="disInline">Library Available</label>
          </div>
          <div className="col-md-3 text-left disInline rbdSwitch">
          <label>
            <Switch offColor='#FF0000' onChange={this.handleChange} checked={this.state.checked} />
          </label>
          </div>
          <div className="col-md-3 text-left disInline">
          
          </div>       
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="schoolarea"
              name="schoolarea"
              value={this.props.schoolarea || ""}
              placeholder="School Area Size"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="playarea"
              name="playarea"
              value={this.props.playarea || ""}
              placeholder="Play Area Size"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <label className="disInline">Upload Image</label>
            <Text
              id="uploadimg"
              name="uploadimg"
              value={this.props.uploadimg || ""}
              type="file"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
          <label className="disInline">Upload Logo</label>
          <Text
              id="uploadlogo"
              name="uploadlogo"
              value={this.props.uploadlogo || ""}
              type="file"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
      </>
    );
  }
}

export default OnboardingBasicFields;
