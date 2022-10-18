import React from "react";
import { Box } from "@mui/material";
import { Experience, Help, Home, Skills } from "./ResponseCards";
import { AppResponseBox } from "./ResponseCards/Layouts/AppResponse";

const Response = ({ type }: { type: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppResponseBox>
        <Home />
      </AppResponseBox>
      <AppResponseBox>
        <Help />
      </AppResponseBox>
      <AppResponseBox>
        <Skills />
      </AppResponseBox>
      <AppResponseBox>
        <Experience />
      </AppResponseBox>
    </Box>
  );
};

export default Response;
