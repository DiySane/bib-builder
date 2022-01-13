import "../styles.css";
// import { connectToMongo } from "../utils/DataBase";

export default function Citation() {
  return (
    <div className="CitationContainer">
      <iframe
        id="myIFrame"
        className="CitationIframe"
        src="https://citation.crosscite.org/"
        title="description"
      ></iframe>
      <div className="columnSpacer"></div>
      <div className="SaveCitationContainer">
        <h3
          // className="CitationTextLabel"
          style={{
            textAlign: "center"
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
        <input className="CitationText" type="text" id="citationText"></input>
        <button
          id="saveCitation"
          className="SaveCitationBtn"
          onClick={connectDb}
        >
          Save
        </button>
      </div>
    </div>
  );
}

const connectDb = async () => {
  // await connectToMongo();
  // connect()
  // .then(console.log)
  // .catch(console.error)
  // .finally(() => client.close());
};
