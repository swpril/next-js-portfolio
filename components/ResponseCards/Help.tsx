import React from "react";

import { Typography } from "@mui/material";
import { MenuLists } from "../../constants";
import { StyledBoldRedText } from "../../styles/StyledBoldText";

const Help = () => {
  return (
    <>
      <Typography>
        Send one of the below keyword or click on it to know more about me.
      </Typography>

      {Object.keys(MenuLists).map(item => (
        <Typography key={item}>
          <StyledBoldRedText>{item}</StyledBoldRedText>&nbsp;-&nbsp;
          {(MenuLists as any)[item]}
        </Typography>
      ))}
    </>
  );
};

export default Help;
