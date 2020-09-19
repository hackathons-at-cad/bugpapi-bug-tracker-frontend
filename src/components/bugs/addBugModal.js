import React, { useState } from "react";
import EngineerSelectOptions from "../engineers/engineerSelectOptions";
import LabelSelectOptions from "../labels/labelSelectOptions";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { addBug } from "../../actions/bugActions";
import StatusSelectOptions from "../statusz/statusSelectOptions";

const AddBugModal = ({ addBug }) => {
  const [title, setTitle] = useState("");
  const [critical, setCritical] = useState(false);
  const [engineer, setEngineer] = useState("");
  const [label, setLabel] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = () => {
    if (title === "" || engineer === "" || label === "" || status === "") {
      M.toast({ html: "Please enter a title and engineer" });
    } else {
      const newBug = {
        title,
        critical,
        engineer,
        label,
        status,
        date: new Date(),
      };

      addBug(newBug);

      M.toast({ html: `Bug added by ${engineer}` });

      console.log("ADD BUG RESULT:", title, engineer, critical, label, status);

      // Clear Fields
      setTitle("");
      setEngineer("");
      setCritical(false);
      setLabel("");
      setStatus("");
    }
  };

  return (
    <div id="add-bug-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add New Bug</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title" className="active">
              Bug Title
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>Assign To Engineer</p>
            <select
              name="engineer"
              value={engineer}
              className="browser-default"
              onChange={(e) => setEngineer(e.target.value)}
            >
              <option value="" disabled>
                Select Engineer
              </option>
              <EngineerSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>Label</p>
            <select
              name="label"
              value={label}
              className="browser-default"
              onChange={(e) => setLabel(e.target.value)}
            >
              <option value="" disabled>
                Select Label
              </option>
              <LabelSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>Bug Status</p>
            <select
              name="status"
              value={status}
              className="browser-default"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Select Status
              </option>
              <StatusSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={critical}
                  value={critical}
                  onChange={(e) => setCritical(!critical)}
                />
                <span>Is Critical?</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-light blue btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddBugModal.propTypes = {
  addBug: PropTypes.func.isRequired,
};

export default connect(null, { addBug })(AddBugModal);
