const mongoose = require("mongoose");
const uuid = require('node-uuid');

const BibProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    default: function genUUID() {
        return uuid.v1()
    },
  },
});

const BibCitationSchema = new mongoose.Schema({
  citation: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    default: function genUUID() {
        return uuid.v1()
    },
  },
});

const Project = mongoose.model("BibProject", BibProjectSchema);
const Citation = mongoose.model("BibCitation", BibCitationSchema);

module.exports = {Project, Citation};