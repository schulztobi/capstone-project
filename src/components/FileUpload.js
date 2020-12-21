import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  StyledInput,
  StyledButton,
  StyledModal,
  StyledBackgroundModal,
} from '../styles/ReusableStyledComponents';
import styled from 'styled-components/macro';

export default function FileUpload({ dare }) {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [changePage, setChangePage] = useState(false);
  const [uploadInfo, setUploadInfo] = useState(false);

  function onChange(event) {
    console.log(event, 'filepath');
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setUploadInfo(true);
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);

    try {
      const res = await axios.patch(
        `http://localhost:4000/dares/${dare}/uploadmedia`,
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
      <StyledForm>
        <StyledInput type="file" id="customFile" onChange={onChange} />
        {/* <label htmlFor="customFile">{filename}</label> */}

        <StyledButton type="button" onClick={onSubmit}>
          upload
        </StyledButton>
      </StyledForm>
      {uploadedFile ? (
        <>
          <h3>{uploadedFile.fileName}</h3>
          <img
            style={{ width: '200px', height: '200px' }}
            src={uploadedFile.filePath}
            alt=""
          />
        </>
      ) : null}
      {uploadInfo && (
        <StyledBackgroundModal>
          <StyledModal>
            <p>Upload successful</p>
            <StyledButton onClick={() => setChangePage(true)}>
              I Dare
            </StyledButton>
          </StyledModal>
        </StyledBackgroundModal>
      )}
      {changePage && <Redirect to="/DaresPage" />}
    </Fragment>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
