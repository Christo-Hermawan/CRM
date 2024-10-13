import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const columns = [
  { id: "expand", label: "", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function table() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openRow, setOpenRow] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (rowIndex) => {
    setOpenRow(openRow === rowIndex ? null : rowIndex);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 620 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <React.Fragment key={row.code}>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleRowClick(rowIndex)}
                      >
                        {openRow === rowIndex ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    {columns.slice(1).map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={columns.length}
                    >
                      <Collapse
                        in={openRow === rowIndex}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box sx={{ margin: 1 }}>
                          <Grid
                            container
                            spacing={2}
                            m={2}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid xs={4}>
                              <Stack direction={"row"}>
                                <Paper
                                  sx={{
                                    width: 100,
                                  }}
                                >
                                  image
                                </Paper>
                                <Box sx={{ ml: 10 }}>
                                  <Typography
                                    sx={{
                                      fontWeight: 600,
                                      fontSize: "24px",
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    item name
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: 400,
                                      fontSize: "12px",
                                      textTransform: "uppercase",
                                      color: "#8C8C8C",
                                    }}
                                  >
                                    item code
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: 400,
                                      fontSize: "12px",
                                      textTransform: "uppercase",
                                      color: "#8C8C8C",
                                    }}
                                  >
                                    item location
                                  </Typography>
                                  <Typography>Harga Beli</Typography>
                                  <Typography>Harga Jual</Typography>
                                </Box>
                              </Stack>
                            </Grid>
                            <Grid xs={5}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit{" "}
                            </Grid>
                            <Grid item xs={2} container direction="column">
                              <Box ml={10}>
                                <Typography
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    color: "#8C8C8C",
                                  }}
                                >
                                  LAST UPDATE :
                                </Typography>
                                <Typography
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    color: "#8C8C8C",
                                  }}
                                >
                                  Datetime
                                </Typography>
                                <Typography
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    color: "#8C8C8C",
                                  }}
                                >
                                  By
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
