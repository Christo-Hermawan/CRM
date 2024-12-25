import React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import { useRouter } from "next/router"; // Import useRouter

const App = () => {
  const router = useRouter(); // Inisialisasi useRouter

  // Fungsi untuk menangani klik dan mengarahkan ke halaman lain
  const handleNavigation = (item) => {
    // Jika item adalah "About", arahkan ke root ("/")
    if (item.toLowerCase() === "about") {
      router.push("/");
    } else {
      router.push(`/${item.toLowerCase()}`); // Navigasi ke halaman lainnya
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: "0 2rem",
          marginBottom: "0px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#333", // Lebih lembut dari hitam untuk kesan elegan
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Menambahkan font yang lebih estetik
              fontSize: "40px", // Ukuran font lebih besar untuk lebih menonjol
              fontWeight: "bold", // Menebalkan teks
              textTransform: "uppercase", // Mengubah teks menjadi kapital untuk kesan profesional
              letterSpacing: "2px", // Memberi jarak antar huruf agar lebih jelas
              textAlign: "center", // Menjaga teks berada di tengah
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Memberi efek bayangan pada teks untuk memberi kedalaman
              marginBottom: "1rem", // Memberi ruang di bawah teks
            }}
          >
            Portfolio
          </Typography>

          <Box>
            {["About", "Experience", "Projects"].map((item) => (
              <Button
                key={item}
                sx={{ color: "#000", marginLeft: "1rem", fontSize: '18px' }}
                onClick={() => handleNavigation(item)} // Navigasi ke halaman masing-masing
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

    </>
  );
};

export default App;
