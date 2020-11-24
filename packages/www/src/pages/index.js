import React, { useEffect } from "react";
import { Container, Heading, Button, Flex } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";

export default () => {
  useEffect(() => netlifyIdentity.init({}), []);

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get shit done</Heading>
        <Button
          style={{ backgroundColor: "black", color: "wheat", marginTop: "3px" }}
          onClick={() => netlifyIdentity.open()}
        >
          Log in
        </Button>
        <Button
          style={{ backgroundColor: "black", color: "wheat", marginTop: "3px" }}
          onClick={() => console.log(netlifyIdentity.currentUser())}
        >
          WHO AM I???
        </Button>
      </Flex>
    </Container>
  );
};
