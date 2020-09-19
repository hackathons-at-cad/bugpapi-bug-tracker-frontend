import React from "react";
import { connect } from "react-redux";
import { deleteBug, setCurrent } from "../../actions/bugActions";
import Moment from "react-moment";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const BugItem = ({ bug, deleteBug, setCurrent }) => {
  const onDelete = () => {
    deleteBug(bug.id);
    M.toast({ html: "Bug Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-bug-modal"
          className={`modal-trigger bug-title ${
            bug.critical ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(bug)}
        >
          {bug.title}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{bug.id}</span>
          <br></br>
          Assigned To{" "}
          <span className="black-text to-engineer">{bug.engineer}</span>{" "}
          <br></br>
          Date Assigned:{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a" className="black-text">
            {bug.date}
          </Moment>
          <br></br>
          Label: <span className="black-text">{bug.label}</span>
          <br></br>
          Status: <span className="black-text">{bug.status}</span>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

BugItem.propTypes = {
  bug: PropTypes.object.isRequired,
  deleteBug: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteBug, setCurrent })(BugItem);
