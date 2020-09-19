import React, { useState, useEffect } from "react";
import EngineerSelectOptions from "../engineers/engineerSelectOptions";
import LabelSelectOptions from "../labels/labelSelectOptions";
import StatusSelectOptions from "../statusz/statusSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateBug } from "../../actions/bugActions";

const EditBugModal = ({ current, updateBug }) => {
  const [title, setTitle] = useState("");
  const [critical, setCritical] = useState(false);
  const [engineer, setEngineer] = useState("");
  const [label, setLabel] = useState("");
  const [status, setStatus] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setCritical(current.critical);
      setEngineer(current.engineer);
      setLabel(current.label);
      setStatus(current.status);
    }
  }, [current]);

  const onSubmit = () => {
    if (title === "" || engineer === "") {
      M.toast({ html: "Please enter a title and engineer" });
    } else {
      const updBug = {
        id: current.id,
        title,
        critical,
        engineer,
        label,
        status,
        date: new Date(),
      };

      updateBug(updBug);
      M.toast({ html: `Bug updated by ${engineer}` });

      // Clear Fields
      setTitle("");
      setEngineer("");
      setCritical(false);
      setLabel("");
      setStatus("");
    }
  };

  return (
    <div id="edit-bug-modal" className="modal" style={modalStyle}>
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

EditBugModal.propTypes = {
  current: PropTypes.object.isRequired,
  updateBug: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.bug.current,
});

export default connect(mapStateToProps, { updateBug })(EditBugModal);
