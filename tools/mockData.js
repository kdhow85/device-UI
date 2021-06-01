const devices = [
  {
    id: 1,
    deviceId: "SCB1001",
    slug: "scb1001",
    deviceName: "SCRAM CAM Bracelet",
    status: "Unassigned",
    clientName: "John Henry",
  },
  {
    id: 2,
    deviceId: "SCB1002",
    slug: "scb1002",
    deviceName: "SCRAM CAM Bracelet",
    status: "Unassigned",
    clientName: "Mark Stevens",
  },
  {
    id: 3,
    deviceId: "SCB1003",
    slug: "scb1003",
    deviceName: "SCRAM CAM Bracelet",
    status: "Unassigned",
    clientName: "James Mabry",
  },
  {
    id: 4,
    deviceId: "SCB1004",
    slug: "scb1004",
    deviceName: "SCRAM CAM Bracelet",
    status: "Unassigned",
    clientName: "Vivian Stuart",
  },
  {
    id: 5,
    deviceId: "SCB1005",
    slug: "scb1005",
    deviceName: "SCRAM CAM Bracelet",
    status: "Unassigned",
    clientName: "Lester Jenkins",
  },
];

const clients = [
  { id: 1, firstName: "John Henry" },
  { id: 2, firstName: "Mark Stevens" },
  { id: 3, firstName: "James Mabry" },
  { id: 4, firstName: "Vivian Stuart" },
  { id: 5, firstName: "Lester Jenkins" },
];

const newDevice = {
  id: null,
  deviceName: "",
  status: "",
  clientName: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newDevice,
  devices,
  clients,
};
