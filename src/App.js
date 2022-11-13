import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";
import ResponsiveGrid from "./components/ResponsiveGrid";

// import Modals from "./components/Modals";
// import Form from "./components/Form";
// import Cards from "./components/Cards";
// import Containers from "./components/Containers";
// import ListsComponent from "./components/ListsComponent";
// import Accord from "./components/Accord";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
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
      <div style={{ marginTop: 100 }}>
        {/* <Cards /> */}
        {/* <Modals /> */}
        {/* <Containers /> */}
        {/* <ListsComponent /> */}
        {/* <Accord /> */}
        {/* <DrawerMenu /> */}
        <ResponsiveGrid />
      </div>
    </>
  );
}

export default App;
