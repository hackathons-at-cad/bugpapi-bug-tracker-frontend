import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEngineers } from "../../actions/engineerActions";

const EngineerSelectOptions = ({
  getEngineers,
  engineer: { engineers, loading },
}) => {
  useEffect(() => {
    getEngineers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    !loading &&
    engineers !== null &&
    engineers.map((engineer) => (
      <option
        key={engineer.id}
        value={`${engineer.firstName} ${engineer.lastName}`}
      >
        {engineer.firstName} {engineer.lastName}
      </option>
    ))
  );
};

EngineerSelectOptions.propTypes = {
  engineer: PropTypes.object.isRequired,
  getEngineers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  engineer: state.engineer,
});

export default connect(mapStateToProps, { getEngineers })(
  EngineerSelectOptions
);
