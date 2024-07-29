import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 10,
}));

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const expandWidth = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 66.67%;
  }
`;

const collapseWidth = keyframes`
  from {
    width: 66.67%;
  }
  to {
    width: 100%;
  }
`;

const AnimatedGridItem = styled(Grid)(({ show }) => ({
  animation: `${show ? slideIn : slideOut} 0.5s forwards`,
}));

const EmployeeGridItem = styled(Grid)(({ show }) => ({
  animation: `${show ? expandWidth : collapseWidth} 0.5s forwards`,
}));

export default function Dashboard(props) {
  const [showProfile, setShowProfile] = React.useState(false);

  const handleButtonClick = () => {
    setShowProfile(true);
  };

  const handleCloseClick = () => {
    setShowProfile(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <AnimatedGridItem item xs={4} show={showProfile}>
          {showProfile && (
            <Item sx={{ height: "85vh" }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                margin={1}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
                >
                  Employee profile
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CloseIcon />}
                  onClick={handleCloseClick}
                >
                  Close
                </Button>
              </Stack>
            </Item>
          )}
        </AnimatedGridItem>
        <EmployeeGridItem item xs={showProfile ? 8 : 12} show={showProfile}>
          <Item sx={{ height: "85vh" }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Employee Table
              </Typography>
              <Button
                variant="contained"
                startIcon={<ArrowCircleRightOutlinedIcon />}
                onClick={handleButtonClick}
              >
                Show Profile
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              {/* Table content goes here */}
            </Stack>
          </Item>
        </EmployeeGridItem>
      </Grid>
    </>
  );
}
