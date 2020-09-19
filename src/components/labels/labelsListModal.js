import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LabelItem from "./labelItem";
import { getLabels } from "../../actions/labelActions";

const LabelsListModal = ({ getLabels, label: { labels, loading } }) => {
  useEffect(() => {
    getLabels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="label-list-modal" className="modal">
      <div className="modal-content">
        <h4>Label List</h4>
        <ul className="collection">
          {!loading &&
            labels !== null &&
            labels.map((label) => <LabelItem label={label} key={label.id} />)}
        </ul>
      </div>
    </div>
  );
};

LabelsListModal.propTypes = {
  label: PropTypes.object.isRequired,
  getLabels: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  label: state.label,
});

export default connect(mapStateToProps, { getLabels })(LabelsListModal);
