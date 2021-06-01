import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function DeviceForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="deviceId"
        label="Device ID"
        onChange={props.onChange}
        name="deviceId"
        value={props.device.deviceId}
        error={props.errors.deviceId}
      />

      <TextInput
        id="deviceName"
        label="Device Name"
        onChange={props.onChange}
        name="deviceName"
        value={props.device.deviceName}
        error={props.errors.deviceName}
      />

      <TextInput
        id="clientName"
        label="Client Name"
        name="clientName"
        onChange={props.onChange}
        value={props.device.clientName}
        error={props.errors.clientName}
      />

      <div className="form-group">
        <label htmlFor="status">Device Status</label>
        <div className="field">
          <select
            id="status"
            name="status"
            onChange={props.onChange}
            value={props.device.status || ""}
            className="form-control"
          >
            <option value="" />
            <option value="Assigned">Assigned</option>
            <option value="Unassigned">Unassigned</option>
          </select>
        </div>
        {props.errors.status && (
          <div className="alert alert-danger">{props.errors.status}</div>
        )}
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default DeviceForm;
