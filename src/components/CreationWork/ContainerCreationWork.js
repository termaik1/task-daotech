import React from "react";
import { connect } from "react-redux";

import CreationWork from "./CreationWork";
import { postWorkAPI } from "store/Work/action";
import { getErrorPostWork } from "../../store/Work/selector";

const ContainerCreationWork = props => <CreationWork {...props} />;

const mapStateToProps = store => ({
  errorPostWork: getErrorPostWork(store)
});

const mapDispatchToProps = {
  postWorkAPI
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerCreationWork);
