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
  border-radius: 6px;
  margin: 30px;
  height: 80px;
  background: transparent;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
`;

const Headline = styled.h1`
  color: #fff;
  font-size: 40px;
`;
