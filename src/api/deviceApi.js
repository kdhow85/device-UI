import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/devices/";

export function getDevices() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getDeviceBySlug(slug) {
  // return fetch(baseUrl + "?slug=" + slug) // Use for mock json server - Change env in package.json to 3001
  return fetch(baseUrl + slug) // Use for ASP.NET Core Web API
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((devices) => {
        if (devices.length !== 1) throw new Error("Device not found: " + slug);
        return devices[0]; // should only find one device for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveDevice(device) {
  return fetch(baseUrl + (device.id || ""), {
    method: device.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...device,
      // Parse device Id to a number (in case it was sent as a string).
      Id: parseInt(device.Id, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDevice(deviceId) {
  return fetch(baseUrl + deviceId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
