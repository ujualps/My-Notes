import React from "react";
import "./styles.scss";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions.js";

const Card = (props) => {
  const { data } = props;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 ">
      <div className="card-main">
        <div className="heading">
          <li>{props.data.heading}</li>
          <Button
            classes={{ label: "btn-label" }}
            onClick={() => props.deleteNote(data.id)}
          >
            delete
          </Button>
        </div>
        <p className="desc">{data.desc}</p>
        <div className="time-date">
          <li className="time">{data.time}</li>
          <li className="date">{data.date}</li>
        </div>
      </div>
    </div>
  );
};

const mapsStateToProps = () => {};

export default connect(mapsStateToProps, { deleteNote })(Card);
