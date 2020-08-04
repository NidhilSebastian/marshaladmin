import React, { Component } from "react";
import Text from "../common/Textbox";
import DropDown from "../common/DropDown";
import Header from "../common/Header";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Switch from "react-switch";
import Button from "../common/Button";

export class OnboardingBasicFields extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submited.');
  }

  handleCancel(e) {
    e.preventDefault();
    console.log('canceled.');
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleFieldsChanges(e) {
    //this.setState({value: event.target.value});
    console.log('changed.');
  }
  render() {
    return (
      <>
      
      <div className="raw pt-4">
          <div className="col-md-10 text-left disInline">
          <Header headerContent="School Onboarding Form"/>
          </div>
          <div className="col-md-1 text-left disInline">
          <Button
              id="saveschoolform"
              icon="fa fa-save"
              text="Save"
              type="submit"
              className="btn btn-primary"
              onClick="handleSubmit"
            />
          </div>
          <div className="col-md-1 text-left disInline">
          <Button
              id="cancelschoolform"
              icon="fa fa-times"
              text="Cancel"
              type="submit"
              className="btn btn-light"
              onClick="handleCancel"
            />
          </div>
        </div> 
        <div className="raw pb-4 pt-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="schoolName"
              name="schoolName"
              value={this.props.schoolName || ""}
              placeholder="School Name"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
          <DropDown
              name="country"
              className="msa-input-box-01"
              options=""
              value=""
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">          
            <PhoneInput
              country={'in'}
              id="primaryPhone"
              name="primaryPhone"
              value={this.props.primaryPhone || ""}
              containerClass="react-tel-input-01"
              onChange={this.handleFieldsChanges}            />
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
          <PhoneInput
              country={'in'}
              id="secondaryPhone"
              name="secondaryPhone"
              value={this.props.secondaryPhone || ""}
              containerClass="react-tel-input-01"
              onChange={this.handleFieldsChanges}
             //onChange={phone => this.setState({ phone })}
            />
          </div>
          <div className="col-md-6 text-left disInline">
          <PhoneInput
              country={'in'}
              id="OtherPhone"
              name="OtherPhone"
              value={this.props.OtherPhone || ""}
              containerClass="react-tel-input-01"
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="emailId"
              name="emailId"
              value={this.props.emailId || ""}
              placeholder="Email Id"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="recognitionBoard"
              name="recognitionBoard"
              value={this.props.recognitionBoard || ""}
              placeholder="Recognition By/Board"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="AffiliationBoard"
              name="AffiliationBoard"
              value={this.props.AffiliationBoard || ""}
              placeholder="Affiliation Number"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="AffiliationPeriod"
              name="AffiliationPeriod"
              value={this.props.AffiliationPeriod || ""}
              placeholder="Affiliation Period"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
          <DropDown
              id="foundedIn"
              name="foundedIn"
              className="msa-input-box-01"
              options=""
              value=""
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="pricnipalQualification"
              name="pricnipalQualification"
              value={this.props.pricnipalQualification || ""}
              placeholder="Principal Qualification"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="principalWorkExperience"
              name="principalWorkExperience"
              value={this.props.principalWorkExperience || ""}
              placeholder="Principal Work Experience"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="socityTrustName"
              name="socityTrustName"
              value={this.props.socityTrustName || ""}
              placeholder="Society/Trust Name"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="educationalSystem"
              name="educationalSystem"
              value={this.props.educationalSystem || ""}
              placeholder="Educational System"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="LearningMedium"
              name="LearningMedium"
              value={this.props.LearningMedium || ""}
              placeholder="Learning Medium"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="numberOfClassRooms"
              name="numberOfClassRooms"
              value={this.props.numberOfClassRooms || ""}
              placeholder="Number of Classrooms"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="numberOfLabs"
              name="numberOfLabs"
              value={this.props.numberOfLabs || ""}
              placeholder="Number of Labs"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-3 text-left disInline">
            <label className="disInline">Library Available</label>
          </div>
          <div className="col-md-3 text-left disInline rbdSwitch">
          <label>
            <Switch 
            id="isLibraryAvilable"
            name="isLibraryAvilable"
            offColor='#FF0000' 
            onChange={this.handleChange} 
            checked={this.state.checked} />
          </label>
          </div>
          <div className="col-md-3 text-left disInline">
          
          </div>       
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left disInline">
            <Text
              id="schoolAreaSize"
              name="schoolAreaSize"
              value={this.props.schoolAreaSize || ""}
              placeholder="School Area Size"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
          <div className="col-md-6 text-left disInline">
            <Text
              id="playAreaSize"
              name="playAreaSize"
              value={this.props.playAreaSize || ""}
              placeholder="Play Area Size"
              type="text"
              className="msa-input-box-01"
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
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
              onChange={this.handleFieldsChanges}
            ></Text>
          </div>
        </div>
      </>
    );
  }
}

export default OnboardingBasicFields;
