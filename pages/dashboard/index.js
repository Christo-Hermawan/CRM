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
        <Grid item xs={8}>
          <Item sx={{ height: 210 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Today's Report
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Date
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  fontWeight: 14,
                  color: "#4C34C2",
                }}
              >
                Report Summary
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  fontWeight: 14,
                  color: "#4C34C2",
                }}
              >
                Time
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <RoundedPaper square={false} sx={{ backgroundColor: "#D3DFCE" }}>
                rounded corners
              </RoundedPaper>
              <RoundedPaper square={false} sx={{ backgroundColor: "#F3EAD1" }}>
                rounded corners
              </RoundedPaper>
              <RoundedPaper square={false} sx={{ backgroundColor: "#CDDAEE" }}>
                rounded corners
              </RoundedPaper>
              <RoundedPaper square={false} sx={{ backgroundColor: "#EED3D3" }}>
                rounded corners
              </RoundedPaper>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ height: 210 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Pay Bill
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  fontWeight: 14,
                  color: "#4C34C2",
                }}
              >
                Notification for pay
              </Typography>{" "}
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <RoundedPaper square={false} sx={{ backgroundColor: "#F7F5FF" }}>
                rounded corners
              </RoundedPaper>{" "}
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: 280 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Sales Per Day
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  fontWeight: 14,
                  color: "#4C34C2",
                }}
              >
                Monthly
              </Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: 280 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                Total Revenue
              </Typography>
            </Stack>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item sx={{ height: 70 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "18px", color: "#4C34C2" }}
              >
                Sales Per Day
              </Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ height: 70 }}>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ height: 70 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              margin={1}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "24px", color: "#4C34C2" }}
              >
                See More ...
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4C34C2" }}
                endIcon={<ArrowCircleRightOutlinedIcon />}
              >
                Contained
              </Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
      
    </>
  );
}
