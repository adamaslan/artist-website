import styled from "styled-components";
import dancing from "./dancing.jpg";

const Bordy = styled.img`
  display: flex;
  width: 100px;
  border: 12px solid black;
  border-radius: 9px;
`;
const Sup = styled.a`
  display: flex;
  font-size: 20px;
  transition: ease 2.25s all;
  color: blue;
  :hover {
    font-size: 48px;
    opacity: 0.5;
  }
  @media (max-width: 768 px) {
    font-size: 24px;
  }
`;
const Supsup = styled(Sup)`
  font-size: 30px;
  color: red;
`;
const Item = styled.div`
  display: flex;
  padding: 0.5 rem;
  border: 5px solid black;
  border-radius: 9px;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  grid-template-areas: auto;
  justify-content: space-around;
`;

function App() {
  return (
    <Grid>
      <Item> 1</Item>
      <Item>
        <Sup>Adam Timur Aslan</Sup>
      </Item>
      <Item>3</Item>
      <Item>
        <Sup>Art</Sup>
      </Item>
      <Item>5</Item>
      <Item>
        <Sup>
          Hey there! I am Adam Aslan. Much of my work is influenced by words.
          Words to me are sculptures in their own right as boxes that you can
          put things into, build upon, and sculpt into objects.{" "}
        </Sup>
      </Item>
      <Item>7</Item>
      <Item>
        <Supsup>The Coalescence of Love and Virtue</Supsup>
      </Item>
      <Item></Item>
      <Item>10</Item>
      <Item>
        {" "}
        <Bordy src={dancing} />
      </Item>
      <Item>12</Item>
    </Grid>
  );
}

export default App;
