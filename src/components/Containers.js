import React from "react";
import { Container, Typography } from "@mui/material";
const Containers = () => {
  return (
    <>
      <Container sx={{ background: "yellow" }} maxWidth="xs">
        <Typography variant="body2">This is Xs</Typography>
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="sm">
        <Typography variant="body2">This is for small</Typography>
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="md">
        <Typography variant="body2">This is medium</Typography>
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="lg">
        <Typography variant="body2">This is larg</Typography>
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="xl">
        <Typography variant="body2">This is extra large</Typography>
      </Container>
    </>
  );
};

export default Containers;
