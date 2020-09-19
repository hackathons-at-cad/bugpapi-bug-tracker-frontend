import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLabels } from "../../actions/labelActions";

const LabelSelectOptions = ({ getLabels, label: { labels, loading } }) => {
  useEffect(() => {
    getLabels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    !loading &&
    labels !== null &&
    labels.map((label) => (
      <option key={label.id} value={`${label.labelName}`}>
        {label.labelName}
      </option>
    ))
  );
};

LabelSelectOptions.propTypes = {
  label: PropTypes.object.isRequired,
  getLabels: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  label: state.label,
});

export default connect(mapStateToProps, { getLabels })(LabelSelectOptions);
