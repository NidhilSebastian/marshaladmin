export const globalState = {
  errorMessage: null,
};

export const LoginInitialState = {
  ...globalState,
  user: sessionStorage.getItem("user"),
};

export const HomeInitialState = {
  ...globalState,
  imageList: [],
};
