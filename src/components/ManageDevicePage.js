import React, { useState, useEffect } from "react";
import DeviceForm from "./DeviceForm";
import * as deviceApi from "../api/deviceApi";
import { toast } from "react-toastify";

const ManageDevicePage = (props) => {
  const [errors, setErrors] = useState({});
  const [device, setDevice] = useState({
    id: null,
    slug: "",
    deviceId: "",
    deviceName: "",
    clientName: "",
    status: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path `/devices/:slug`
    if (slug) {
      deviceApi.getDeviceBySlug(slug).then((_device) => setDevice(_device));
    }
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    setDevice({
      ...device,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!device.deviceId) _errors.deviceId = "Device ID is required";
    if (!device.deviceName) _errors.deviceName = "Device name is required";
    if (!device.clientName) _errors.clientName = "Client name is required";
    if (!device.status) _errors.status = "Device status is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    deviceApi.saveDevice(device).then(() => {
      props.history.push("/");
      toast.success("Device updated.");
    });
  }

  return (
    <>
      <h2>Manage Device</h2>
      <DeviceForm
        errors={errors}
        device={device}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageDevicePage;
