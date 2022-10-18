import React, { useEffect, useState } from "react";

import { Box, styled } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import BG_IMG from "../assets/images/bg.webp";
import Response from "./Response";

const StyledBox = styled(Box)(() => ({
  height: "100vh",
  flexBasis: "100px",
  background: `url(${BG_IMG.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  overflowY: "scroll"
}));

const Container = () => {
  const [responseType, setResponseType] = useState<string>("");

  useEffect(() => {
    setResponseType("response");
  }, []);
  return (
    <StyledBox>
      <Header />
      <Response type={responseType} />
      <Footer />
    </StyledBox>
  );
};

export default Container;
