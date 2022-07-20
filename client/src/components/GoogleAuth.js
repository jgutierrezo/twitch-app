import React, { useEffect, useState } from "react";
import "./GoogleAuth.css";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

const GoogleAuth = (props) => {
  //Hook equivalent to: ComponentDidMount
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "16710659472-hh6hjs4bhftik940isu6t7nfl9q79lp9.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Stream platform",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          changeLoginState();
          auth.isSignedIn.listen(changeLoginState);
        });
    });
  }, []);

  //Call the action creators
  const changeLoginState = () => {
    if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
      return props.signIn(
        window.gapi.auth2.getAuthInstance().currentUser.get().getId()
      );
    } else {
      return props.signOut();
    }
  };

  const loginState = () => {
    if (props.isAuthenticated === null) {
      return null;
    }

    if (props.isAuthenticated.isSignedIn) {
      return (
        <button
          onClick={() => {
            window.gapi.auth2.getAuthInstance().signOut();
          }}
          className="btn"
        >
          <i class="material-symbols-outlined">logout</i>
          <span className="login-text">Logout</span>
        </button>
      );
    }

    if (!props.isAuthenticated.isSignedIn) {
      return (
        <button
          onClick={() => {
            window.gapi.auth2.getAuthInstance().signIn();
          }}
          className="btn"
        >
          <i class="material-symbols-outlined">login</i>
          <span className="login-text">Login</span>
        </button>
      );
    }
  };

  return <div>{loginState()}</div>;
};

export default connect(
  (storeState) => {
    return {
      isAuthenticated: storeState.authentication,
    };
  },
  { signIn, signOut }
)(GoogleAuth);
