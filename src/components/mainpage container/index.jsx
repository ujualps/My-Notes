import React from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { IconButton, TextField, Button } from "@material-ui/core";
import { Add, Cancel } from "@material-ui/icons";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { addNote } from "../../redux/actions.js";
import Card from "../card";

const MainPage = (props) => {
  const [showAddFields, setShowAddFields] = React.useState(false);

  const [text, setText] = React.useState({
    heading: "",
    desc: "",
  });

  const handleValueChange = (name) => (event) => {
    setText({ ...text, [name]: event.target.value });
  };

  const add = () => {
    // const { addNote } = props;
    props.addNote(text);
    setShowAddFields(false);
    setText({ heading: "", desc: "" });
  };

  const renderNotes = () => {
    const { notes } = props;

    if (!notes) return;

    return (
      <div class="row">
        {notes.map((note) => {
          return <Card data={note} />;
        })}
      </div>
    );
  };

  return (
    <div className="main-page-div">
      {renderNotes()}

      <div className="add-btn">
        {!showAddFields && (
          <IconButton
            onClick={() => setShowAddFields(true)}
            classes={{ roottt: "MuiIconButton-root" }}
          >
            <Add fontSize="large" />
          </IconButton>
        )}
      </div>
      <div className="sliding-pane-div">
        <SlidingPane
          closeIcon={
            <div>
              <b>Cancel </b>
              <Cancel fontSize="large" />
            </div>
          }
          isOpen={showAddFields}
          title="New Note"
          from="bottom"
          width="100vw"
          height="fit-content"
          onRequestClose={() => setShowAddFields(false)}
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
        >
          <div className="input-fields">
            <TextField
              label="Heading"
              variant="outlined"
              onChange={handleValueChange("heading")}
              value={text.heading}
            />
            <div className="space" />
            <TextField
              label="Description"
              variant="outlined"
              placeHolder="description"
              multiline
              rows={5}
              rowsMax={5}
              onChange={handleValueChange("desc")}
              value={text.desc}
            />
            <div className="space"></div>
            <Button
              onClick={() => {
                add();
              }}
            >
              add
            </Button>
          </div>
        </SlidingPane>
      </div>
    </div>
  );
};

const mapsStateToProps = (state) => {
  console.log("state", state);
  return {
    notes: state,
  };
};

export default connect(mapsStateToProps, { addNote })(MainPage);
