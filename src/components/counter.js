import React from "react";
import "./counter.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button className="btn btn-primary btn-lg" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-primary btn-lg" onClick={inc}>
        INC
      </button>
      <button className="btn btn-primary btn-lg" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
