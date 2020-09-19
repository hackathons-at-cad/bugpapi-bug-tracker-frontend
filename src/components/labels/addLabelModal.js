import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLabel } from "../../actions/labelActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLabelModal = ({ addLabel }) => {
  const [labelName, setLabelName] = useState("");

  const onSubmit = () => {
    if (labelName === "") {
      M.toast({ html: "Please enter the label name" });
    } else {
      addLabel({
        labelName,
      });

      M.toast({ html: `${labelName} was added as a label` });

      // Clear Fields
      setLabelName("");
    }
  };

  return (
    <div id="add-label-modal" className="modal">
      <div className="modal-content">
        <h4>New Label</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="labelName"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
            />
            <label htmlFor="labelName" className="active">
              Label Name
            </label>
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

AddLabelModal.propTypes = {
  addLabel: PropTypes.func.isRequired,
};

export default connect(null, { addLabel })(AddLabelModal);
