import React from "react";
import { connect } from "react-redux";

import Redaction from "./Redaction";
import { putWorkAPI } from "store/Work/action";
import { redactionWork, getErrorPutWork } from "store/Work/selector";

const ContainerRedaction = props => <Redaction {...props} />;

const mapStateToProps = store => ({
  redactionWork: redactionWork(store),
  errorPutWork: getErrorPutWork(store)
});
const mapDispatchToProps = {
  putWorkAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerRedaction);
