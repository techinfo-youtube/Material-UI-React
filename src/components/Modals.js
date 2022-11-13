import React, { useState } from "react";
import { Modal, Button, Box, Typography, Link } from "@mui/material";
const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This Is Modal</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </Box>
      </Modal>

      <Link
        variant="h4"
        color="secondary"
        href="https://www.youtube.com/c/techinfoyt"
        underline="hover"
      >
        Nav Link
      </Link>
    </div>
  );
};

export default Modals;
