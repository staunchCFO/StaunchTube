import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px  20px;
`;

const Home = () => {
  return (
    <Container>
      <Card url="https://images.unsplash.com/photo-1567606404839-dea8cec4d278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      <Card url="https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHlvdXR1YmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
      <Card url="https://images.unsplash.com/photo-1542039375-28138150cc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlvdXR1YmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;