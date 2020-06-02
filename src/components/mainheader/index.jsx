import React from "react";
import "./styles.scss";

import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

export const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="header-root">
        <h1 className="header-title">My Notes</h1>
        <IconButton classes={{ root: 'my-btn-root' }}>
          <MoreVert style={{ fill: "white" }} />
        </IconButton>
      </div>
    }
    headerOnly
  />
);
