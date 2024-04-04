import { Box } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box sx={{ color: "white", display: "flex", flexDirection: "row" }}>
      <Box sx={{ position: "fixed", bottom: 0, left: 260 }}>
        <img src="./assets/me.png" style={{ width: "65%" }} />
      </Box>
      <Box
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          padding: "40px",
          width: "50%",
        }}
      >
        <Box
          sx={{
            fontSize: "35px",
            color: "GrayText",
            textTransform: "uppercase",
          }}
        >
          <p>Front-end developer</p>
          <p>Payam Saboonchi</p>
        </Box>
        <Box
          sx={{
            fontSize: "20px",
            textAlign: "end",
            paddingTop: "30px",
            lineHeight: "40px",
            color: "darkgray",
          }}
        >
          <p>
            Motivated Front-End web developer with +3 years of experience and
            strong <strong> HTML 5, CSS 3</strong> and{" "}
            <strong>JavaScript</strong> skills. Experienced in building dynamic
            web applications using <strong>React, Material UI</strong> and{" "}
            <strong>Framer Motion.</strong> Adept at collaboration, and
            responsive designs. looking for cooperation in a forward-thinking
            organization.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
