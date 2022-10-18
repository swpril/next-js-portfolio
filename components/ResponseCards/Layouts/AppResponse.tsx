import { useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { color } from "../../../styles/color";

const StyledResponseBox = styled(Box)(({ theme }) => ({
  background: color.responseGray,
  position: "relative",
  margin: "0.5rem",
  display: "inline-block",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  borderTopLeftRadius: "0",
  maxWidth: "50%",
  fontSize: "1rem",
  paddingTop: "0",
  "& p": {
    "&:not(:first-of-type):not(:last-of-type)": {
      margin: "0.5rem 0"
    }
  },
  [theme.breakpoints.down("sm")]: {
    "& p": {
      fontSize: "0.75rem"
    }
  }
}));

const StyledTimestamp = styled(Typography)(() => ({
  textAlign: "end",
  fontSize: "0.75rem",
  color: color.light,
  position: "absolute",
  right: "0.25rem",
  bottom: "0.25rem"
}));

export const AppResponseBox = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [time, setTime] = useState<{ minutes: number; hours: number }>(
    {} as any
  );

  useEffect(() => {
    setTime({
      minutes: new Date().getMinutes(),
      hours: new Date().getHours()
    });
  }, []);
  return (
    <StyledResponseBox>
      {children}
      <StyledTimestamp variant="subtitle1">
        {time.hours}:{time.minutes < 10 ? "0" + time.minutes : time.minutes}
      </StyledTimestamp>
    </StyledResponseBox>
  );
};
