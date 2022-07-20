import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";
const StreamView = ({ match, fetchStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  if (stream == undefined) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default connect(
  ({ availableStreams }, { match }) => {
    return {
      stream: availableStreams[match.params.id],
    };
  },
  { fetchStream }
)(StreamView);
