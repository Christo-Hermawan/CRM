import * as React from "react";
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
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
          <Button variant="outlined" startIcon={<SendIcon />}>
            Tambah Barang
          </Button>
          <Button variant="outlined">
            Export Excel
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} margin={1}>
    
        </Stack>
      </Item>
    </>
  );
}
