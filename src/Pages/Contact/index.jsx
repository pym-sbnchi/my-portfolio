import { Box, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        paddingLeft: "150px",
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          color: "GrayText",
        }}
      >
        Contact Me on
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          marginTop: "50px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Button
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<EmailIcon />}
          >
            psaboonchi73@gmail.com
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Button
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<PhoneIcon />}
          >
            (+98) 936-574-0804
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Button
            href="https://www.linkedin.com/in/pym-sbnchi/"
            target="blank"
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<LinkedInIcon />}
          >
            Linkedin
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Button
            href="https://t.me/pym_sbnchi"
            target="blank"
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<TelegramIcon />}
          >
            Telegram
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
        >
          <Button
            href="https://www.instagram.com/pym_sbnchi?igsh=MzBqZGQyNWN0ODMy"
            target="blank"
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<InstagramIcon />}
          >
            Instagram
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Button
            href="https://wa.me/qr/Z5S65FQFBGNYL1"
            target="blank"
            sx={{ textTransform: "none", color: "darkgray", fontSize: "20px" }}
            startIcon={<WhatsAppIcon />}
          >
            WhatsApp
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
