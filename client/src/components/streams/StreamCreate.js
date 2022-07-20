import React from "react";
import "./styles/StreamOptionsStyles.css";
import { connect } from "react-redux";
import { streamCreated } from "../actions";
import TitleAndDescriptionForm from "./TitleAndDescriptionForm";

const StreamCreate = ({ streamCreated, userId }) => {
  return (
    <div>
      <h2>Create Stream</h2>
      <TitleAndDescriptionForm
        onSubmit={(formValues) =>
          streamCreated({
            ...formValues,
            userId: userId,
          })
        }
      />
    </div>
  );
};

export default connect(
  ({ authentication }) => {
    return { userId: authentication.userId };
  },
  { streamCreated }
)(StreamCreate);
