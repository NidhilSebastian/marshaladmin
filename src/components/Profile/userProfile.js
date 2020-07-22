import React, { Component } from "react";
import ProfileHeader from "./profileHeader";
import ProfilePhoneFields from "./profilePhoneFields";

export class UserProfile extends Component {
  render() {
    return (
      <>
        <ProfileHeader></ProfileHeader>
        <ProfilePhoneFields></ProfilePhoneFields>
      </>
    );
  }
}

export default UserProfile;
