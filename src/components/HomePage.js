import React, { useState, useEffect } from "react";
import { getDevices } from "../api/deviceApi";
import DeviceList from "./DeviceList";

function HomePage() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices().then((_devices) => setDevices(_devices));
  }, []);

  return (
    <>
      <h2>Device Management</h2>
      <DeviceList devices={devices} />
    </>
  );
}

export default HomePage;
