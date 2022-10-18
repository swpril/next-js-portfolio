import React from "react";
import { Typography, styled, Button } from "@mui/material";
import { StyledBoldRedText } from "../../styles/StyledBoldText";

const StyledEmoji = styled("span")(({ theme }) => ({
  fontSize: "1.5rem",
  marginLeft: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem"
  }
}));

const StyledButton = styled(Button)(() => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",
  padding: 0,
  textTransform: "none",
  ":hover": {
    background: "transparent"
  }
}));

const HomeCard = () => {
  return (
    <>
      <Typography>
        Hi I&apos;m <StyledBoldRedText>Swpril Ahuja</StyledBoldRedText>
        <StyledEmoji>🙌🏻</StyledEmoji>
      </Typography>
      <Typography>
        I am a Frontend Developer and have more than 2 years of developing
        production grade web apps.As of now I am working with
        <StyledBoldRedText> Clearwater Analytics</StyledBoldRedText>, Noida as a
        Software Development Engineer-UI
      </Typography>
      <Typography>
        I am an <StyledBoldRedText>MCA</StyledBoldRedText> graduate from{" "}
        <StyledBoldRedText>Engineering College, Ajmer</StyledBoldRedText>
      </Typography>

      <Typography>
        I am always eager to hear about exciting career opportunities and I
        would love to chat about the challenging problems in the engineering
        sphere.
      </Typography>
      <Typography>
        <StyledButton disableRipple disableFocusRipple disableTouchRipple>
          <StyledBoldRedText>&apos;Click Here&apos;</StyledBoldRedText>&nbsp;
        </StyledButton>
        to know more.
      </Typography>
    </>
  );
};

export default HomeCard;
