import * as React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";

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
import ListMenuSidebar from "./ListMenuSidebar";

const drawerWidth = 240;

function Sidebar(props) {
  const drawer = (
    <Box
      sx={{
        width: 200, 
      }}
    >
      <Toolbar>
        <div style={{marginLeft: 25}}/>
        <img
          src="/LogoRC.svg"
          alt="Logo"
          style={{width: "70%", height: "70%" }}
        />
      </Toolbar>

      <ListMenuSidebar />
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none", // Remove border for permanent drawer
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
