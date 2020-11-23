import styled from "styled-components/macro";

export default function Header ({title}) {
    return <StyledHeader>
        <Headline>{title}</Headline>
    </StyledHeader>
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--silver-main);
  margin: 30px;
  height: 80px;
`

const Headline = styled.h1`
  color: var(--red-main);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 50px;
  text-transform: uppercase;
`
