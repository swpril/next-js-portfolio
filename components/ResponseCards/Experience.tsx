import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Experience as UserExperience } from "../../constants";
import { StyledBoldRedText } from "../../styles/StyledBoldText";

const StyledOrganizationName = styled(Typography)(() => ({
  marginBottom: "0px !important"
}));

const Experience = () => {
  return (
    <Box>
      <Typography>My professional journey timeline</Typography>
      {UserExperience.map(item => [
        <React.Fragment key={item.organization}>
          <StyledOrganizationName>
            <StyledBoldRedText>{item.organization}</StyledBoldRedText>,&nbsp;
            {item.city}
          </StyledOrganizationName>
          <Typography className="m-0">{item.designation}</Typography>
          <Typography className="m-0">
            {item.duration.from}-{item.duration.to}
          </Typography>
        </React.Fragment>
      ])}
    </Box>
  );
};

export default Experience;
