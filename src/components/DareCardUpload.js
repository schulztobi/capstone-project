import FileUpload from './FileUpload';

export default function DareCardUpload({ match }) {
  return (
    <>
      <h1>File upload</h1>
      <FileUpload dare={match.params.id} />
    </>
  );
}
