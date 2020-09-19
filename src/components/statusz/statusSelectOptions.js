import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStatusz } from "../../actions/statusActions";

const StatusSelectOptions = ({ getStatusz, status: { statusz, loading } }) => {
  useEffect(() => {
    getStatusz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    !loading &&
    statusz !== null &&
    statusz.map((status) => (
      <option key={status.id} value={`${status.statusName}`}>
        {status.statusName}
      </option>
    ))
  );
};

StatusSelectOptions.propTypes = {
  status: PropTypes.object.isRequired,
  getStatusz: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.status,
});

export default connect(mapStateToProps, { getStatusz })(StatusSelectOptions);
