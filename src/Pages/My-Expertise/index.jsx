import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import "./index.css"
import React from "react";

export default function Tools() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
        My Expertise
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 9 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.5", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/html.png" alt="" />
            <Typography sx={{ fontSize: "13px" }}>HTML 5</Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.6", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/css.png" alt="" />
            <Typography sx={{ fontSize: "13px" }}>CSS 3</Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.7", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/js.png" alt="" />
            <Typography sx={{ fontSize: "13px" }}>Java Script</Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.8", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/favicon.ico" alt="" />
            <Typography>React</Typography>
            <ProgressBar
              completed={90}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.9", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/mui.png" alt="" />
            <Typography sx={{ textAlign: "center", fontSize: "13px" }}>
              Material
              <br /> UI
            </Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/fm.png" alt="" />
            <Typography sx={{ textAlign: "center", fontSize: "13px" }}>
              Framer
              <br /> Motion
            </Typography>
            <ProgressBar
              completed={60}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#FFC300"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1.1", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/tailwind.png" alt="" />
            <Typography>Tailwind</Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1.2", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/bootstrap.png" alt="" />
            <Typography>Bootstrap</Typography>
            <ProgressBar
              completed={90}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1.3", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/sass.png" alt="" />
            <Typography sx={{ fontSize: "13px" }}>SASS</Typography>
            <ProgressBar
              completed={100}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1.4", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/figma.png" alt="" />
            <Typography>Figma</Typography>
            <ProgressBar
              completed={50}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#FFC300"
              height="10px"
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "1.5", duration: 1.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "13px",
            }}
          >
            <img src="./assets/wordpress.png" alt="" />
            <Typography sx={{ fontSize: "13px" }}>Wordpress</Typography>
            <ProgressBar
              completed={90}
              labelAlignment="center"
              labelColor="black"
              labelSize="11px"
              width="70px"
              bgColor="#88e763"
              height="10px"
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
