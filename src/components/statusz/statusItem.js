import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteStatus } from "../../actions/statusActions";
import M from "materialize-css/dist/js/materialize.min.js";

const StatusItem = ({ status: { id, statusName }, deleteStatus }) => {
  const onDelete = () => {
    deleteStatus(id);
    M.toast({ html: `Status, ${statusName} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        {statusName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

StatusItem.propTypes = {
  status: PropTypes.object.isRequired,
  deleteStatus: PropTypes.func.isRequired,
};

export default connect(null, { deleteStatus })(StatusItem);
