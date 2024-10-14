import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router"; // Menggunakan useRouter dari Next.js
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inisialisasi router

  const handleLogin = () => {
    // Pemeriksaan kredensial sederhana (contoh hardcoded)
    if (username === "christo" && password === "admin") {
      // Redirect ke halaman home jika login berhasil
      router.push("/dashboard");
    } else {
      // Tambahkan logika untuk menangani kasus login gagal
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Pusatkan secara horizontal
        alignItems: "center", // Pusatkan secara vertikal
        height: "100vh", // Set tinggi agar mengambil seluruh viewport
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: 500,
            height: 400,
          },
        }}
      >
        <Paper elevation={3}>
          <Box sx={{ m: 5 }}>
            <Typography sx={{ mb: 6 }} variant="h3" gutterBottom>
              LOGIN
            </Typography>

            <TextField
              id="usernameID"
              label="Username"
              variant="outlined"
              sx={{ width: "100%", mb: 3 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="passwordID"
              label="Password"
              variant="outlined"
              sx={{ width: "100%", mb: 3 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Box untuk memposisikan tombol ke pojok kanan */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button id="loginbtn" variant="outlined" size="large" onClick={handleLogin}>
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
