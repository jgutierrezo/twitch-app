import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../actions";
import TitleAndDescriptionForm from "./TitleAndDescriptionForm";

//Obtain from the props the action creators, the component own props, and the store state
//Match property is accessible since this component is added as a property of Router component
const StreamEdit = ({ fetchStream, editStream, match, stream }) => {
  useEffect(() => {
    //Load the stream info in the store
    fetchStream(match.params.id);
  }, []);

  if (stream == undefined) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Stream</h2>
      <TitleAndDescriptionForm
        onSubmit={({ title, description }) => {
          editStream(stream.id, { title, description });
        }}
        // Special property of redux forms to innitialize its fields
        initialValues={{ title: stream.title, description: stream.description }}
      />
    </div>
  );
};

export default connect(
  (storeState, componentProps) => {
    return {
      //Convert from object to array for easier manipulation
      stream: Object.values(storeState.availableStreams).find(
        //Obtain the specific stream from the list of available streams
        (stream) => stream.id == componentProps.match.params.id
      ),
    };
  },
  { fetchStream, editStream }
)(StreamEdit);
