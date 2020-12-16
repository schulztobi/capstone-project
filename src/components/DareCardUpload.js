import FileUpload from './FileUpload';
import {
  StyledContainer,
  StyledContent,
  StyledY,
} from '../styles/ReusableStyledComponents';
import styled from 'styled-components/macro';

export default function DareCardUpload({ match }) {
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <h1>I Dare</h1>
          <StyledY>You</StyledY>
          <p>upload your proof</p>
        </StyledContent>
        <FileUpload dare={match.params.id} />
      </StyledContainer>
    </>
  );
}
