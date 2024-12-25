import { Box } from "@mui/material";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Box sx={{  minHeight: '100vh' }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
