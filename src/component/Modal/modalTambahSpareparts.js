import React from "react";

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 450,
  bgcolor: "background.paper",
  border: "2px",
  boxShadow: 24,
  p: 4,
};

const TextFieldsStyle = {
  //   width: 300,
  mt: 2,
};

export default function ModalTambahSpareparts({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "28px",
            color: "#4C34C2",
            textTransform: "uppercase",
          }}
        >
          Tambah Spareparts
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Stack direction={"column"}>
            <TextField
              sx={TextFieldsStyle}
              label="ID BARANG"
              variant="outlined"
            />
            <TextField
              sx={TextFieldsStyle}
              label="NAMA BARANG"
              variant="outlined"
            />
            <TextField
              sx={TextFieldsStyle}
              label="HARGA BARANG"
              variant="outlined"
            />
          </Stack>
          <Box sx={{mt:5}}>
            <Button style={{ backgroundColor: "#3918D9", marginRight: 10 }} variant="contained">
              Tambah Barang
            </Button>
            <Button style={{ backgroundColor: "#05C283" }} variant="contained">
              Reset 
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
