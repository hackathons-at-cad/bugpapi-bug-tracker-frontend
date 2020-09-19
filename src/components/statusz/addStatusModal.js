import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStatus } from "../../actions/statusActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddStatusModal = ({ addStatus }) => {
  const [statusName, setStatusName] = useState("");

  const onSubmit = () => {
    if (statusName === "") {
      M.toast({ html: "Please enter the status name" });
    } else {
      addStatus({
        statusName,
      });

      M.toast({ html: `${statusName} was added as a status` });

      // Clear Fields
      setStatusName("");
    }
  };

  return (
    <div id="add-status-modal" className="modal">
      <div className="modal-content">
        <h4>New Status</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="statusName"
              value={statusName}
              onChange={(e) => setStatusName(e.target.value)}
            />
            <status htmlFor="statusName" className="active">
              Status Name
            </status>
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

AddStatusModal.propTypes = {
  addStatus: PropTypes.func.isRequired,
};

export default connect(null, { addStatus })(AddStatusModal);
