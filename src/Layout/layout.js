import { Box, Grid, Stack, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "100vh",
          zIndex: -1,
          
        }}
      >
        <CssBaseline />

        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Sidebar/>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: "#ECECEC",
          }}
        >
          <Toolbar/>
          {/* Content */}
           {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
