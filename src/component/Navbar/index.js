import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

function Navbar(props) {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: 70,
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
          color: "#000000",
          boxShadow: "none", // Remove box shadow
          borderBottom: "none", // Remove border bottom
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          margin={1}
          mt={1}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            fontSize={"24px"}
            noWrap
            component="div"
            sx={{
              color: "#4C34C2",
              fontWeight: "bold",
            }}
          >
            Customer Relationship Management
          </Typography>
          <IconButton style={{}}>
            <AccountCircleIcon fontSize="large" sx={{ mr: 1 }} />
            <Stack>
              <Typography
                sx={{ fontWeight: 600, fontSize: "14px", color: "#4C34C2" }}
              >
                Username
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "10px", color: "#4C34C2" }}
              >
                role
              </Typography>
            </Stack>
          </IconButton>
        </Stack>
      </AppBar>
    </>
  );
}

export default Navbar;
