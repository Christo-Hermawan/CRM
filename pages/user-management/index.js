import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";

// Sample data for employees
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", email: "john@example.com" },
  { id: 2, name: "Jane Smith", position: "Product Manager", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", position: "UI/UX Designer", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", position: "QA Engineer", email: "bob@example.com" },
];

// Styled component for Paper
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 10,
}));

// Animations for slide in and out
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

// Animation for grid width expansion and collapse
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

// Styled components for animated grid items
const AnimatedGridItem = styled(Grid)(({ show }) => ({
  animation: `${show ? slideIn : slideOut} 0.5s forwards`,
  zIndex: show ? 10 : 1, // Keep it on top when visible
}));

const EmployeeGridItem = styled(Grid)(({ show }) => ({
  animation: `${show ? expandWidth : collapseWidth} 0.5s forwards`,
  transition: "width 0.5s ease-in-out", // Smooth width transition
}));

export default function UserManagement() {
  const [showProfile, setShowProfile] = React.useState(false);
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);

  // Show employee profile panel with selected employee
  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowProfile(true);
  };

  // Close employee profile panel
  const handleCloseClick = () => {
    setShowProfile(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* Employee Profile Panel */}
        <AnimatedGridItem item xs={4} show={showProfile}>
          {showProfile && selectedEmployee && (
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
                  Employee Profile
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
              <Box marginTop={2}>
                <Typography><strong>Name:</strong> {selectedEmployee.name}</Typography>
                <Typography><strong>Position:</strong> {selectedEmployee.position}</Typography>
                <Typography><strong>Email:</strong> {selectedEmployee.email}</Typography>
              </Box>
            </Item>
          )}
        </AnimatedGridItem>

        {/* Employee Table Panel */}
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
            </Stack>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow
                      key={employee.id}
                      hover
                      onClick={() => handleRowClick(employee)}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </EmployeeGridItem>
      </Grid>
    </>
  );
}
