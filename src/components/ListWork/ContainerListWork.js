import React, { useEffect } from "react";
import { connect } from "react-redux";

import ListWork from "./ListWork";
import {
  getWorkAPI,
  redactionWork,
  deleteWorkAPI,
  getApiActive,
  getApiDeactivate
} from "store/Work/action";
import { superWork, getApi, getErrorDataWork } from "store/Work/selector";

const ContainerListWork = props => {
  const { getWorkAPI, getApi, getApiDeactivate } = props;
  useEffect(() => {
    if (getApi) {
      getApiDeactivate();
      getWorkAPI();
    }
  }, [getApi]);
  return <ListWork {...props} />;
};

const mapStateToProps = store => ({
  work: superWork(store),
  getApi: getApi(store),
  errorDataWork: getErrorDataWork(store)
});

const mapDispatchToProps = {
  getWorkAPI,
  redactionWork,
  deleteWorkAPI,
  getApiActive,
  getApiDeactivate
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerListWork);
