import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLabel } from "../../actions/labelActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LabelItem = ({ label: { id, labelName }, deleteLabel }) => {
  const onDelete = () => {
    deleteLabel(id);
    M.toast({ html: `Label, ${labelName} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        {labelName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
  deleteLabel: PropTypes.func.isRequired,
};

export default connect(null, { deleteLabel })(LabelItem);
