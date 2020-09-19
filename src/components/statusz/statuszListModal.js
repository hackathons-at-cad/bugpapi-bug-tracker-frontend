import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StatusItem from "./statusItem";
import { getStatusz } from "../../actions/statusActions";

const StatuszListModal = ({ getStatusz, status: { statusz, loading } }) => {
  useEffect(() => {
    getStatusz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="status-list-modal" className="modal">
      <div className="modal-content">
        <h4>Status List</h4>
        <ul className="collection">
          {!loading &&
            statusz !== null &&
            statusz.map((status) => (
              <StatusItem status={status} key={status.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

StatuszListModal.propTypes = {
  status: PropTypes.object.isRequired,
  getStatusz: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.status,
});

export default connect(mapStateToProps, { getStatusz })(StatuszListModal);
