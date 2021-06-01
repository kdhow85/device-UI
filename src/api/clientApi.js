import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getClientById(id) {
  return fetch(baseUrl + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((clients) => {
        if (clients.length !== 1) throw new Error("Client not found: " + id);
        return clients[0]; // should only find one client for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveClient(client) {
  return fetch(baseUrl + (client.id || ""), {
    method: client.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(client),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteClient(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
