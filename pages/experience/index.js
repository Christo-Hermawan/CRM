import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

const Experience = () => {
  const [showBCA, setShowBCA] = useState(false);
  const [showDjarum, setShowDjarum] = useState(false);

  useEffect(() => {
    // Menampilkan konten dengan interval 1 detik
    setTimeout(() => setShowBCA(true), 1000); // Tampilkan BCA setelah 1 detik
    setTimeout(() => setShowDjarum(true), 2000); // Tampilkan Djarum setelah 2 detik
  }, []);

  return (
    <Box
      sx={{
        padding: "8rem",
        textAlign: "center",
        backgroundColor: "#eaeaea",
        color: "#333",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "2rem", fontWeight: "bold" }}
      >
        My Experience
      </Typography>

      {/* Experience BCA */}
      {showBCA && (
        <Paper
          elevation={3}
          sx={{
            padding: "1.5rem",
            marginBottom: "2rem",
            backgroundColor: "#ffffff",
            color: "#333",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Lighter shadow for depth
            borderRadius: "8px", // Add rounded corners for a smoother look
            animation: "fadeIn 1s ease-out forwards",
            opacity: 0, // Initial state, opacity will animate
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            PT Bank Central Asia (BCA) - Fullstack Web Developer Intern
          </Typography>
          <Typography variant="body1">
            Developed modules for BCA&apos;s internal CMS.
            <br />
            Worked on bug fixes and functionality improvements for the currency
            page.
            <br />
            Conducted API testing and web functionality testing to ensure
            quality and stability.
            <br />
            Gained valuable experience in system testing, problem-solving, and
            communication.
          </Typography>
        </Paper>
      )}

      {/* Experience Djarum */}
      {showDjarum && (
        <Paper
          elevation={3}
          sx={{
            padding: "1.5rem",
            backgroundColor: "#ffffff",
            color: "#333",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            animation: "fadeIn 1s ease-out forwards",
            opacity: 0,
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            Djarum - Computer User Support
          </Typography>
          <Typography variant="body1">
            Provided technical support and assistance for internal systems.
            <br />
            Troubleshot and resolved hardware and software issues for employees.
            <br /> Gained hands-on experience in IT support and user
            interaction.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Experience;
