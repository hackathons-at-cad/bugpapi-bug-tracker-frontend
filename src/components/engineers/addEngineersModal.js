import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEngineer } from "../../actions/engineerActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddEngineerModal = ({ addEngineer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      addEngineer({
        firstName,
        lastName,
      });

      M.toast({ html: `${firstName} ${lastName} was added as a engineer` });

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-engineer-modal" className="modal">
      <div className="modal-content">
        <h4>New Engineer</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
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

AddEngineerModal.propTypes = {
  addEngineer: PropTypes.func.isRequired,
};

export default connect(null, { addEngineer })(AddEngineerModal);
