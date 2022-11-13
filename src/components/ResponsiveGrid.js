import { Grid } from "@mui/material";
import React from "react";

const ResponsiveGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={6}
          md={9}
          lg={3}
          xl={2}
          sx={{ background: "red" }}
          spacing={2}
        >
          Content A
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={9}
          xl={10}
          sx={{ background: "yellow" }}
        >
          Content B
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
