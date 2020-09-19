import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEngineer } from "../../actions/engineerActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EngineerItem = ({
  engineer: { id, firstName, lastName },
  deleteEngineer,
}) => {
  const onDelete = () => {
    deleteEngineer(id);
    M.toast({ html: `Engineer, ${firstName} ${lastName} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

EngineerItem.propTypes = {
  engineer: PropTypes.object.isRequired,
  deleteEngineer: PropTypes.func.isRequired,
};

export default connect(null, { deleteEngineer })(EngineerItem);
