const { Project, Citation } = require("./models");
const express = require("express");
const app = express();

app.post("/project", async (request, response) => {
  const project = new Project(request.body);

  try {
    await project.save();
    response.send(project);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/projects", async (request, response) => {
  const projects = await Project.find({});

  try {
    response.send(projects);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/citation", async (request, response) => {
  const citation = new Citation(request.body);

  try {
    await citation.save();
    response.send(citation);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/citations", async (request, response) => {
  const citations = await Citation.find({});

  try {
    response.send(citations);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
