import React from 'react';

import { Container, Button } from './styles';

const NotFound: React.FC = () => (
  <Container title="Not found | ">
    <h3>Oops!!</h3>
    <main>
      <h1>
        40
        <span>4</span>
      </h1>
      <h2>Página não encontrada</h2>
    </main>
    <Button to="/">Go back Home</Button>
  </Container>
);

export default NotFound;
