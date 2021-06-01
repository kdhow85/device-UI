import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DeviceList(props) {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Device Id</th>
          <th>Device Name</th>
          <th>Client Name</th>
          <th>Device Status</th>
        </tr>
      </thead>
      <tbody>
        {props.devices.map((device) => {
          return (
            <tr key={device.id}>
              <td>
                <Link to={"/device/" + device.slug}>{device.deviceId}</Link>
              </td>
              <td>{device.deviceName}</td>
              <td>{device.clientName}</td>
              <td>{device.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      deviceId: PropTypes.string.isRequired,
      deviceName: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DeviceList;
