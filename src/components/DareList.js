import styled from "styled-components/macro";
import dares from "../fixtures/Dares"
import DareCard from "../components/DareCard";

export default function Darelist(){
    return (
        <List>
            {dares.map((dare) => {
                return <DareCard key={dare.id} id={dare.id} headline={dare.headline}/>}
                
                
            )}
        </List>
    )
}
const List = styled.ul`
  padding: 0;
  border-radius: 6px;
  width: 100%;
  height: 130px;
  overflow-y: scroll;
`