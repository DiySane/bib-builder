import { useState } from "react";
import "../styles.css";
// import { connectToMongo } from "../utils/DataBase";

export default function Citation(currentProject) {
  const [currentCitation, setCurrentCitation] = useState("");

  const onCitationChange = (e) => {
    setCurrentCitation(e.target.value);
  };

  const createNewCitation = async (url) => {
    try {
      const result = await axios.post(url, {
        citation: currentCitation,
        projectId: currentProject,
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

  return (
    <div className="CitationContainer">
      <iframe
        id="myIFrame"
        className="CitationIframe"
        src="https://citation.crosscite.org/"
        title="description"
      ></iframe>
      <div className="ColumnSpacer"></div>
      <div className="SaveCitationContainer">
        <h3
          // className="CitationTextLabel"
          style={{
            textAlign: "center",
          }}
        >
          Copy to clipboard doesn't work right now! &#128577;
        </h3>
        <br />
        <br />
        <br />
        <label htmlFor="citationText" className="CitationTextLabel">
          So please paste your citation copying from left:
        </label>
        <input
          className="CitationText"
          type="text"
          id="citationText"
          onChange={onCitationChange}
        ></input>
        <button
          id="saveCitation"
          className="SaveCitationBtn"
          onClick={createNewCitation("http://localhost:5000/citation")}
        >
          Save
        </button>
      </div>
    </div>
  );
}
