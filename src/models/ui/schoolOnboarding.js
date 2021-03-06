export const defaultProperties = {
  id: "",
  schoolName: "",
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

export const mapToUiModel = (onboardingApiModel) => {
  const SchoolOnboardingModel = Object.assign({ ...defaultProperties });
  SchoolOnboardingModel.id = onboardingApiModel.id;
};
