import React, { useEffect } from "react";
import { connect } from "react-redux";
import BugItem from "./bugItem";
import Preloader from "../layout/preloader";
import PropTypes from "prop-types";
import { getBugs } from "../../actions/bugActions";

const Bugs = ({ bug: { bugs, loading }, getBugs }) => {
  useEffect(() => {
    getBugs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || bugs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Bugs List</h4>
        </li>
        {!loading && bugs.length === 0 ? (
          <p className="center">No bugs to show...</p>
        ) : (
          bugs.map((bug) => <BugItem bug={bug} key={bug.id} />)
        )}
      </ul>
    </div>
  );
};

Bugs.propTypes = {
  bug: PropTypes.object.isRequired,
  getBugs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bug: state.bug,
});

export default connect(mapStateToProps, { getBugs })(Bugs);
