import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';

const Projects = () => {
  // Data gambar website proyek Anda
  const projects = [
    { imgSrc: '/dashboardsandbox.jpg', description: 'Project 1 Description' },
    { imgSrc: '/servicessandbox.jpg', description: 'Project 2 Description' },
    { imgSrc: '/sparepartssandbox.jpg', description: 'Project 3 Description' },
    { imgSrc: '/user-management.jpg', description: 'Project 4 Description' },
    { imgSrc: '/manage-extension.jpg', description: 'Project 5 Description' },
  ];

  // Pengaturan carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: '1rem',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={project.imgSrc}
                alt={`Project ${index + 1}`}
                style={{
                  width: '100%',
                  maxWidth: '1250px', // Atur maksimal lebar
                  height: '600px', // Atur tinggi tetap
                  objectFit: 'cover', // Gambar di-crop jika ukurannya tidak sesuai
                  borderRadius: '8px',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  textAlign: 'center',
                }}
              >
              </Typography>
            </Paper>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;
