import styled from 'styled-components/macro';

export default function Header({ title }) {
  return (
    <StyledHeader>
      <Headline>{title}</Headline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  margin: 30px;
  height: 80px;
  background: transparent;
`;

const Headline = styled.h1`
  color: #fff;
  font-size: 40px;
`;
