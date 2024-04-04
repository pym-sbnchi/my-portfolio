import React from "react";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import "./index.css";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          marginTop: "70px",
          marginLeft: "20px",
          width:'10%',
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: 50,
            color: "white",
          }}
        >
          <li>
            <Button
              variant="text"
              href="/"
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              href="/about"
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              href="/tools"
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              Tools
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              href="/work"
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              Work
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              href="/contact"
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              Contact
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              endIcon={<DownloadIcon />}
              sx={{
                fontSize: "large",
                fontWeight: "light",
                textTransform: "none",
                color: "inherit",
              }}
            >
              Resume
            </Button>
          </li>
        </ul>
      </Box>
    </>
  );
}
