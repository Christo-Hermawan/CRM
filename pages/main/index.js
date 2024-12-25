import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function MainContent() {
  const fullText = "Hello, Welcome"; // Teks lengkap yang akan ditampilkan
  const [displayedText, setDisplayedText] = useState("");

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/projects"); // Arahkan ke halaman /projects
  };

  useEffect(() => {
    let index = 0; // Mulai dari indeks pertama
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        // Pastikan indeks tidak melewati panjang string
        setDisplayedText(fullText.slice(0, index + 1)); // Ambil substring dari awal hingga indeks saat ini
        index++; // Tambah indeks
      } else {
        clearInterval(interval); // Hentikan interval setelah selesai
      }
    }, 150);

    return () => clearInterval(interval); // Membersihkan interval jika komponen di-unmount
  }, []);

  return (
    <Container
      sx={{
        padding: "4rem 0",
        minHeight: "100vh", // Pastikan halaman tidak lebih tinggi dari viewport
        overflow: "hidden", // Menonaktifkan scroll
        position: "relative", // Agar gambar bisa ditempatkan di bawah halaman
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ zIndex: 1, marginLeft: 70, marginTop: 10 }}
      >
        {/* Text Content */}
        <Grid item xs={12} md={6} sx={{ animation: "slideUp 1s ease-out" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#888", fontSize: "20px" }} // Tambahkan fontSize
          >
            {displayedText}
          </Typography>
          <Typography variant="h4" sx={{ color: "#555", marginBottom: "0rem" }}>
            I'm John Doe
          </Typography>
          <Typography variant="h5" sx={{ color: "#555", marginBottom: "4rem" }}>
            an Experienced Website Developer
          </Typography>
          <Box>
            <Button
              variant="contained"
              style={{ backgroundColor: "black" }}
              sx={{
                backgroundColor: "black",
                color: "white",
                marginRight: "1rem",
              }}
            >
              <a
                href="/Christopher Hermawan cv.pdf.pdf" // Path relatif di dalam folder public
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download CV
              </a>
            </Button>
            <Button
              variant="outlined"
              onClick={handleNavigate} // Tambahkan event handler untuk navigasi
              sx={{ borderColor: "#000", color: "#000" }}
            >
              Projects
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Profile Image with Circle Background */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "55%",
          transform: "translateX(-120%)", // Posisikan gambar di tengah
          zIndex: 0, // Agar gambar berada di belakang konten
          animation: "slideUpImage 1s ease-out", // Apply slide up animation to the image
        }}
      >
        <img
          src="/John-doe.png" // Path relatif dari folder public
          alt="Avatar"
          style={{
            width: "500px", // Menentukan lebar gambar
            height: "700px", // Menentukan tinggi gambar
            objectFit: "cover", // Menjaga proporsi gambar
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "550px",
          height: "650px",
          backgroundColor: "#FFD700", // Warna lingkaran (disesuaikan)
          borderRadius: "100%",
          top: "70px",
          left: "35px",
          zIndex: -1, // Pastikan lingkaran berada di belakang gambar
        }}
      ></Box>
    </Container>
  );
}
