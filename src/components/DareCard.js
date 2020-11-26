import styled from "styled-components/macro"

export default function DareCard({id, headline}){
    return <DareCardSection><p>{id}{headline}</p></DareCardSection>
}


const DareCardSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  position: relative;
  margin-bottom: 5px;
  padding: 5px;
  background-color: var(--silver-main);
  

  p {
    font-weight: 400;
    padding:0;
    margin:0;
    color: var(--blue-75);
    font-size: 100%;
    text-align: center;

  }
`