import PDF from "./ViewerDoc";
import FilesDemo from "./FileDemo";
import MyApp from "./MyApp";
import Sample from "./Sample";
import React, { useState } from "react";
import FileViewer from "react-file-viewer";

const MyComponent = () => {
  const [file, setFile] = useState(
    "http://projects.itsasbreuk.nl/react-components/itsa-docviewer/example.pdf"
  );
  const [path, setPath] = useState();
  const onError = (e) => {
    console.log(e, "error in file-viewer");
  };
  function onFileChange(event) {
    console.log(
      URL.createObjectURL(event.target.files[0]),
      event.target.files[0],
      event.target.files[0].name.split(".")[1]
    );

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = (e) => {
      console.log(e);
      setPath(e.target.result);
    };
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <div className="Example__container__load">
        <label htmlFor="file">Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div>
      <FileViewer
        fileType={file?.name ? file.name.split(".")[1] : null}
        filePath={path}
        onError={onError}
      />
      <PDF docs={[{ uri: "https://url-to-my-pdf.pdf" }, { uri: file }]} />
    </div>
  );
};

function App() {
  return (
    <div>
      <MyComponent />
      {/*<FilesDemo />

      <MyApp />

      <Sample /> */}
    </div>
  );
}

export default App;
