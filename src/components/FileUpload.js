import React, { Fragment, useState } from 'react';
import axios from 'axios';

export default function FileUpload({ dare }) {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  console.log(uploadedFile, 'uploadfile');

  function onChange(event) {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);

    try {
      const res = await axios.patch(
        `http://localhost:4000/dares/${dare}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      await axios.patch(`http://localhost:4000/dares/${dare}`, res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <form>
        <div>
          <input type="file" id="customFile" onChange={onChange} />
          <label htmlFor="customFile">{filename}</label>
        </div>

        <button type="button" onClick={onSubmit}>
          upload
        </button>
      </form>
      {uploadedFile ? (
        <>
          <h3>{uploadedFile.fileName}</h3>
          <img
            style={{ width: '100px', height: '100px' }}
            src={uploadedFile.filePath}
            alt=""
          />
        </>
      ) : null}
    </Fragment>
  );
}
