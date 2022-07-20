import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";
import { CREATE_PATH, EDIT_PATH, DELETE_PATH, VIEW_PATH } from "../../Paths";
import { replace } from "lodash";

const StreamList = ({ fetchStreams, availableStreams, userId, isSignedIn }) => {
  //Hook equivalent to: ComponentDidMount
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderList = () => {
    return availableStreams.map((stream) => {
      return (
        <div>
          <Link to={VIEW_PATH.replace(":id", stream.id)}>
            <h2>{stream.title}</h2>
          </Link>
          <span>{stream.description}</span>
          {userId === stream.userId && (
            <span>
              <Link
                to={EDIT_PATH.replace(":id", stream.id)}
                style={{ color: "pink" }}
              >
                Edit
              </Link>
              <Link
                to={DELETE_PATH.replace(":id", stream.id)}
                style={{ color: "pink" }}
              >
                Delete
              </Link>
            </span>
          )}
        </div>
      );
    });
  };

  if (availableStreams != undefined && availableStreams[0] != undefined) {
    return (
      <div>
        <div>{renderList()}</div>
        {isSignedIn && (
          <Link style={{ color: "red" }} to={CREATE_PATH}>
            Create Stream
          </Link>
        )}
      </div>
    );
  }
};

export default connect(
  ({ availableStreams, authentication }) => {
    return {
      availableStreams: Object.values(availableStreams),
      userId: authentication.userId,
      isSignedIn: authentication.isSignedIn,
    };
  },
  { fetchStreams }
)(StreamList);
