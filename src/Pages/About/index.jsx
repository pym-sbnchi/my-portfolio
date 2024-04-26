import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        // paddingLeft: "150px",
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          color: "GrayText",
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          margin: "40px",
          marginLeft: "10px",
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateAreas: `"about about" "super part" "weakness tools"`,
          gridTemplateRows: "auto",
          gap: 5,
        }}
      >
        <Box sx={{ gridArea: "about", width: "80%" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            <Typography>
              Even though I studied veterinary medicine and advanced to the
              doctorate level, my interest in this profession and work is so
              great that it made me completely step into the path of programming
              and learn website design at the first stage. This is the first
              step and I have a long way to go. But I am sure that this interest
              will help me achieve all the goals I have in mind.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box
            sx={{
              width: "80%",
              gridArea: "super",
              border: "1px solid gray ",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Super power
            </Typography>
            <Typography sx={{ color: "darkgray" }}>
              Transform the exact UI to code, pixel by pixel
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box
            sx={{
              width: "80%",
              gridArea: "weakness",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Weakness
            </Typography>
            <Typography sx={{ color: "darkgray" }}>
              Jumping to designing before prototyping
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box
            sx={{
              width: "80%",
              gridArea: "tools",
              border: "1px solid gray ",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Favorite Tools
            </Typography>
            <Typography sx={{ color: "darkgray" }}>
              React, Mui, framer motion
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box
            sx={{
              width: "80%",
              gridArea: "part",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <Typography sx={{ marginBottom: "10px", fontSize: "18px" }}>
              Favorite Part
            </Typography>
            <Typography sx={{ color: "darkgray" }}>
              Debugging, Make JS Functions
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
