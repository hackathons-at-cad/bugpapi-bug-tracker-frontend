import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EngineerItem from "./engineerItem";
import { getEngineers } from "../../actions/engineerActions";

const EngineerListModal = ({
  getEngineers,
  engineer: { engineers, loading },
}) => {
  useEffect(() => {
    getEngineers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="engineer-list-modal" className="modal">
      <div className="modal-content">
        <h4>Engineer List</h4>
        <ul className="collection">
          {!loading &&
            engineers !== null &&
            engineers.map((engineer) => (
              <EngineerItem engineer={engineer} key={engineer.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

EngineerListModal.propTypes = {
  engineer: PropTypes.object.isRequired,
  getEngineers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  engineer: state.engineer,
});

export default connect(mapStateToProps, { getEngineers })(EngineerListModal);
