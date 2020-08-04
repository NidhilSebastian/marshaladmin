export const defaultProperties = {
  id: "",
  school_Name: "",
  address: "",
  landMark: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  primaryPhone: "",
  secondaryPhone: "",
  OtherPhone: "",
  fax: "",
  emailId: "",
  recognitionBoard: "",
  AffiliationBoard: "",
  AffiliationPeriod: "",
  foundedIn: "",
  pricnipalQualification: "",
  principalWorkExperience: "",
  socityTrustName: "",
  educationalSystem: "",
  LearningMedium: "",
  numberOfClassRooms: "",
  numberOfLabs: "",
  isLibraryAvilable: true,
  schoolAreaSize: "",
  playAreaSize: "",
};

export const mapToApiModel = (onboardingUiModel) => {
  const SchoolOnboardingModel = Object.assign({ ...defaultProperties });

  SchoolOnboardingModel.id = onboardingUiModel.id;
  SchoolOnboardingModel.school_Name = onboardingUiModel.schoolName;
};
