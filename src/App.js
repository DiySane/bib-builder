import { useState } from "react";
import axios from "axios";
import Citation from "./components/Citation";
import "./styles.css";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export default function App() {
  const [existingProjects, setExistingProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState("");
  const generateName = () => {
    return uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    }); // big_red_donkey
  };

  const getExistingProjects = async (url) => {
    try {
      const result = await axios.get(url, {
        crossDomain: true,
      });
      const { status, data } = result;
      if (status !== 200) {
        return [];
      }
      setExistingProjects(data);
      // return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createNewProject = async (url) => {
    try {
      const name = generateName();
      const result = await axios.post(url, {
        name: name,
      });
      const { status, data } = result;
      if (status !== 200) {
        return [];
      }
      // setExistingProjects(data);
      setCurrentProject(name);
      // return data;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(async () => {
  //   await getExistingProjects("http://localhost:5000/projects");
  // }, []);
  return (
    <div className="App">
      <h1>Bib-Builder</h1>
      {currentProject === "" ? (
        <button
          onClick={async () => {
            await createNewProject("http://localhost:5000/project");
          }}
        >
          New User
        </button>
      ) : (
        <div>
          <h2>
            Current Project: {currentProject}
          </h2>
          <Citation currentProject={currentProject} />
        </div>
      )}
    </div>
  );
}
