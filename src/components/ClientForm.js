import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function ClientForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="clientName"
        label="Client Full Name"
        onChange={props.onChange}
        name="clientName"
        value={props.client.clientName}
        error={props.errors.clientName}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

ClientForm.propTypes = {
  device: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ClientForm;
