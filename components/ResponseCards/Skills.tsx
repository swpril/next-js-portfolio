import { Typography } from "@mui/material";
import React from "react";

import { Skills as UserSkills } from "../../constants";
import { StyledBoldRedText } from "../../styles/StyledBoldText";

export const Skills = () => {
  return (
    <>
      <Typography>
        I have worked with following technologies in my 2 years of professional
        journey
      </Typography>
      {Object.keys(UserSkills).map(item => (
        <Typography key={item}>
          <StyledBoldRedText>{item}</StyledBoldRedText>:&nbsp;
          <span>{(UserSkills as any)[item].join(", ")}</span>
        </Typography>
      ))}
    </>
  );
};

export default Skills;
