import React, { Fragment, useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

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
      const res = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" id="customFile" onChange={onChange} />
          <label htmlFor="customFile">{filename}</label>
        </div>

        <input type="submit" value="upload" />
      </form>
    </Fragment>
  );
}
