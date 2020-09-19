import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-bug-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#engineer-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-engineer-modal"
            className="btn-floating red modal-trigger"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a
            href="#label-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">note</i>
          </a>
        </li>
        <li>
          <a href="#add-label-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">note_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
