import React from "react";
import { Container, Heading, Button, Flex } from "theme-ui";

export default () => (
  <Container>
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
      <Heading as="h1">Get shit done</Heading>
      <Button
        style={{ backgroundColor: "black", color: "wheat", marginTop: "3px" }}
        onClick={() => alert("You done clicked me")}
      >
        Log in
      </Button>
    </Flex>
  </Container>
);
