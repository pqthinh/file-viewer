import React from "react";
import Files from "react-files";

const FilesDemo = () => {
  const onFilesChange = (files) => {
    console.log(files);
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <div className="files">
      <Files
        className="files-dropzone"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={["image/png", ".pdf", "audio/*"]}
        multiple
        maxFiles={3}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Drop files here or click to upload
      </Files>
    </div>
  );
};

export default FilesDemo;
