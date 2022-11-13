import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
const Accord = () => {
  const courses = ["react", "nodejs", "mern", "nextjs", "UI"];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography variant="h6">What is mern Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* auto complete  */}
      <Autocomplete
        sx={{ width: 200 }}
        options={courses}
        renderInput={(params) => (
          <TextField {...params} label="Select a course" />
        )}
      />
    </div>
  );
};

export default Accord;
