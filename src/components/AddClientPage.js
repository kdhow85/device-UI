import React, { useState, useEffect } from "react";
import ClientForm from "./ClientForm";
import * as clientApi from "../api/clientApi";
import { toast } from "react-toastify";

const AddClientPage = (props) => {
  const [errors, setErrors] = useState({});
  const [client, setClient] = useState({
    id: null,
    clientName: "",
  });

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      clientApi.getClientById(id).then((_client) => setClient(_client));
    }
  }, [props.match.params.id]);

  function handleChange({ target }) {
    setClient({
      ...client,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!client.clientName) _errors.client = "Client name is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    clientApi.saveClient(client).then(() => {
      props.history.push("/");
      toast.success("New client added.");
    });
  }

  return (
    <>
      <h2>Manage Client</h2>
      <ClientForm
        errors={errors}
        client={client}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddClientPage;
