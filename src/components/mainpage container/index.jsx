import React from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { IconButton, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export const MainPage = () => {
  const [showAddFields, setShowAddFields] = React.useState(false);
  return (
    <div className="main-page-div">
      <div className="add-btn">
        {!showAddFields && (
        <IconButton
          onClick={() => setShowAddFields(true)}
          classes={{ roottt: "MuiIconButton-root" }}
        >
          <Add />
        </IconButton>
      )}
      </div>
    </div>
  );
};
export default MainPage;
