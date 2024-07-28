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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 10,
}));

const RoundedPaper = styled(Paper)(({ theme }) => ({
  width: 220,
  height: 100,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 10,
}));

export default function Dashboard(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
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
            
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={8}>
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
                Employee
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
       
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
      
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
