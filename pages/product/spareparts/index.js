import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  InputLabel,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StickyHeadTableSpareparts from "@/src/component/Table/tableSpareparts";
import ModalTambahSpareparts from "@/src/component/Modal/modalTambahSpareparts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 10,
}));

export default function Dashboard(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Item sx={{ height: "100%" }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          margin={1}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              color: "#4C34C2",
              textTransform: "uppercase",
            }}
          >
            Spareparts
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} margin={1}>
          <TextField
            id="inputSpareparts"
            label="Input Text Here . . ."
            variant="outlined"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FILTER BY</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            style={{ backgroundColor: "#3918D9" }}
            variant="contained"
            startIcon={<SendIcon />}
            onClick={handleOpen}
          >
            Tambah Barang
          </Button>
          <Button style={{ backgroundColor: "#05C283" }} variant="contained">
            Export Excel
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} margin={1}></Stack>

        <StickyHeadTableSpareparts />
      </Item>

      <ModalTambahSpareparts open={open} handleClose={handleClose} />

    </>
  );
}
