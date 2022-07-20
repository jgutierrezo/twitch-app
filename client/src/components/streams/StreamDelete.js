import React, { useEffect } from "react";
import Modal from "../../Modal";
import history from "../../history";
import { LIST_STREAMS } from "../../Paths";
import { deleteStream, fetchStream } from "../actions";
import { connect } from "react-redux";

const StreamDelete = ({ match, stream, deleteStream, fetchStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const deleteTitle = () => {
    return stream == undefined ? "Delete stream" : `Delete ${stream.title}`;
  };

  return (
    <Modal
      title={deleteTitle()}
      description="This action can not be undone"
      actions={() => {
        return (
          //React.Fragment is like an invisible parent. It will not appear in the DOM
          <>
            <button
              onClick={() => {
                deleteStream(stream.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                history.push(LIST_STREAMS);
              }}
            >
              Cancel
            </button>
          </>
        );
      }}
    ></Modal>
  );
};

export default connect(
  ({ availableStreams }, { match }) => {
    return { stream: availableStreams[match.params.id] };
  },
  { deleteStream, fetchStream }
)(StreamDelete);
