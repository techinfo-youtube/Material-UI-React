import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Tabs, Tab } from "@mui/material";

// import Form from "./components/Form";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">LOGO</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
    </div>
  );
}

export default App;
