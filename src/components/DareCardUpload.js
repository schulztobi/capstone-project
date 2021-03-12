// TODO remove eslint disable
/* eslint-disable */
import FileUpload from './FileUpload';

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
