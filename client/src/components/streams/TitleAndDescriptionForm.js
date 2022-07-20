import React from "react";
import { Field, reduxForm } from "redux-form";
import "./styles/StreamOptionsStyles.css";
import { connect } from "react-redux";

class TitleAndDescriptionForm extends React.Component {
  inputField = ({ input, label, meta }) => {
    //Connecting the properties of the redux form component with the component declared in the App.
    //Redux pass the component state to props using this function
    //The three dots is expanding all the properties of input.
    return (
      <div>
        <label>{label}</label>
        <br />
        <input {...input} autocomplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
    return "";
  };

  render = () => {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name="title" component={this.inputField} label="Title" />
        <Field
          name="description"
          component={this.inputField}
          label="Description"
        />

        <button className="submit-button">Submit</button>
      </form>
    );
  };
}

function errorValidation(formValues) {
  const errors = {};

  errors.title = !formValues.title ? "Please provide the video title" : "";
  errors.description = !formValues.description
    ? "Please provide the video description"
    : "";

  return errors;
}

//First parentesis is to declare the name of the form and the key used to find this component state in the redux-from reducer.
export default reduxForm({
  form: "TitleAndDescriptionForm",
  validate: errorValidation,
})(TitleAndDescriptionForm);
