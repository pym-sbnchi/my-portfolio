import React, { useState } from "react";
import { Box, ListItemButton, List, ListItem } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import "./index.css";

export default function Navbar() {

  const [index, setIndex] = useState();

  return (
    <>
      <Box
        sx={{
          marginTop: "70px",
          marginLeft: "60px",
          width: "10%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <List
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: 40,
            color: "white",
          }}
        >
          <ListItem>
            <ListItemButton
              sx={
                index === 0
                  ? {
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "larger",
                      textTransform: "none",
                      backgroundColor: "transparent",
                    }
                  : {
                      color: "#ffffff66",
                      fontWeight: "light",
                      fontSize: "large",
                      textTransform: "none",
                    }
              }
              onClick={() => setIndex(0)}
              variant="text"
              href="/"
            >
              Home
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={
                index === 1
                  ? {
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "larger",
                      textTransform: "none",
                    }
                  : {
                      color: "#ffffff66",
                      fontWeight: "light",
                      fontSize: "large",
                      textTransform: "none",
                    }
              }
              onClick={() => setIndex(1)}
              variant="text"
              href="/about"
            >
              About
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={
                index === 2
                  ? {
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "larger",
                      textTransform: "none",
                    }
                  : {
                      color: "#ffffff66",
                      fontWeight: "light",
                      fontSize: "large",
                      textTransform: "none",
                    }
              }
              onClick={() => setIndex(2)}
              variant="text"
              href="/tools"
            >
              Expertise
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={
                index === 3
                  ? {
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "larger",
                      textTransform: "none",
                    }
                  : {
                      color: "#ffffff66",
                      fontWeight: "light",
                      fontSize: "large",
                      textTransform: "none",
                    }
              }
              onClick={() => setIndex(3)}
              variant="text"
              href="/work"
            >
              Portfolio
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={
                index === 4
                  ? {
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "larger",
                      textTransform: "none",
                    }
                  : {
                      color: "#ffffff66",
                      fontWeight: "light",
                      fontSize: "large",
                      textTransform: "none",
                    }
              }
              onClick={() => setIndex(4)}
              variant="text"
              href="/contact"
            >
              Contact
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              href="https://drive.google.com/file/d/1FXSKW6aF2kDydeyggwdFpK3AT8R6AnjO/view?usp=sharing"
              target="_blank"
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
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
