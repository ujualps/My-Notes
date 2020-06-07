import React from "react";
import "./styles.scss";

import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

export const MyHeader = () => {
  const [isActiveDropdow, setIsActiveDropdown] = React.useState(false);
  return (
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <div className="header-root">
          <h1 className="header-title">My Notes</h1>
          <div className="dropdown">
            <IconButton
              classes={{ root: "my-btn-root" }}
              onClick={() => setIsActiveDropdown(!isActiveDropdow)}
            >
              <MoreVert style={{ fill: "white" }} />
            </IconButton>
            <div
              id="myDropdown"
              class={
                isActiveDropdow ? "dropdown-content show" : "dropdown-content"
              }
            >
              <a href="#">About</a>
            </div>
          </div>
        </div>
      }
      headerOnly
    />
  );
};
