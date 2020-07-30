import React from "react";
import "./styles/scss/index.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./store/reducers/application";
import { withRouter } from "react-router-dom";
import PublicLayout from "./components/publicLayout/publicLayout";
import Layout from "./components/layout";

const App = (props) => {
  //const appLayout = <Layout {...props}></Layout>;
  const appLayout = !props.user ? (
    <PublicLayout {...props}> </PublicLayout>
  ) : (
    <Layout {...props}></Layout>
  );

  return <>{appLayout}</>;
};

//export default App;

export default withRouter(
  connect(
    (state) => state.app,
    (dispatch) => bindActionCreators(actionCreators, dispatch)
  )(App)
);
