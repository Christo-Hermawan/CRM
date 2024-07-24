import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, Button, Collapse, Typography, IconButton } from "@mui/material";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRouter } from "next/router";
import Router from "next/router";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const itemsDashboardOnly = [
  { text: "Dashboard", icon: <AssessmentOutlinedIcon /> },
];

const itemProduct = [
  {
    text: "Product",
    icon: <AssessmentOutlinedIcon />,
    subItems: [
      { text: "spareparts" },
      { text: "services" },
      { text: "bundle" },
    ],
  },
];

const itemTransaction = [
  {
    text: "Transaction",
    icon: <AssessmentOutlinedIcon />,
    subItems: [
      { text: "Package" },
      { text: "Transaction" },
      { text: "On Going" },
    ],
  },
];

const itemsCustomerOnly = [
  { text: "Customer", icon: <AssessmentOutlinedIcon /> },
];

const itemsWorker = [
  {
    text: "Worker",
    icon: <AssessmentOutlinedIcon />,
    subItems: [
      { text: "Attendance", icon: <AssessmentOutlinedIcon /> },
      { text: "Salary", icon: <AssessmentOutlinedIcon /> },
    ],
  },
];

const itemsSupplier = [
  {
    text: "Suppliers",
    icon: <HandshakeOutlinedIcon />,
    subItems: [
      { text: "Buy Products", icon: <AssessmentOutlinedIcon /> },
      { text: "Payment", icon: <AssessmentOutlinedIcon /> },
    ],
  },
];

const RouteToDashboard = () => {
  Router.push({
    pathname: "/dashboard",
  });
};

const RouterProduct = (submenuText) => {
  if (submenuText === "spareparts") {
    Router.push({
      pathname: "/product/spareparts",
    });
  } else if (submenuText === "services") {
    Router.push({
      pathname: "/product/services",
    });
  }
};

export default function ListMenuSidebar(props) {
  const [productOpen, setProductOpen] = useState(false);
  const [transactionOpen, setTransactionOpen] = useState(false);
  const [workerOpen, setWorkerOpen] = useState(false);
  const [supplierOpen, setSupplierOpen] = useState(false);

  const handleProductTabClick = () => {
    setProductOpen(!productOpen);
  };
  const handleTranscationTabClick = () => {
    setTransactionOpen(!transactionOpen);
  };
  const handleWorkerTabClick = () => {
    setWorkerOpen(!workerOpen);
  };
  const handleSupplierTabClick = () => {
    setSupplierOpen(!supplierOpen);
  };

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <List>
        {itemsDashboardOnly.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ ml: 2, mt: 0.5 }}>
            <Button
              onClick={RouteToDashboard}
              variant="contained"
              sx={{
                width: 200,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                color: "#3918D9",
                backgroundColor: "white",
                boxShadow: "none",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#3918D9",
                  boxShadow: "none",
                },
              }}
            >
              <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
              <Typography
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>

      <List>
        {itemProduct.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ ml: 2 }}>
              <Button
                variant="contained"
                onClick={handleProductTabClick}
                sx={{
                  width: 200,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "#3918D9",
                  backgroundColor: "white",
                  boxShadow: "none",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#3918D9",
                    boxShadow: "none",
                  },
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.text.toUpperCase()}
                  </Typography>
                </Box>
                <ExpandMoreIcon
                  sx={{
                    transition: "transform 0.3s",
                    transform: productOpen ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
              </Button>
            </ListItem>
            <Collapse in={productOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem key={subItem.text} disablePadding sx={{ ml: 4 }}>
                    <Button
                      onClick={() => {
                        RouterProduct(subItem.text);
                      }}
                      variant="contained"
                      sx={{
                        width: 180,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        color: "#3918D9",
                        backgroundColor: "white",
                        boxShadow: "none",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#3918D9",
                          boxShadow: "none",
                          "& .circle-icon": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      <Box sx={{ marginRight: 1 }}>{subItem.icon}</Box>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: "left",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: 14,
                          ml: 1,
                        }}
                      >
                        {subItem.text.toUpperCase()}
                      </Typography>
                      {(currentPath === "/product/spareparts" &&
                        subItem.text === "spareparts") ||
                      (currentPath === "/product/services" &&
                        subItem.text === "services") ? (
                        <CircleIcon
                          className="circle-icon"
                          sx={{
                            color: "#3918D9",
                            marginLeft: "auto",
                            height: 10,
                          }}
                        />
                      ) : null}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      <List>
        {itemTransaction.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ ml: 2 }}>
              <Button
                variant="contained"
                onClick={handleTranscationTabClick}
                sx={{
                  width: 200,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "#3918D9",
                  backgroundColor: "white",
                  boxShadow: "none",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#3918D9",
                    boxShadow: "none",
                  },
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.text.toUpperCase()}
                  </Typography>
                </Box>
                <ExpandMoreIcon
                  sx={{
                    transition: "transform 0.3s",
                    transform: transactionOpen
                      ? "rotate(-90deg)"
                      : "rotate(0deg)",
                  }}
                />
              </Button>
            </ListItem>
            <Collapse in={transactionOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem key={subItem.text} disablePadding sx={{ ml: 4 }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: 180,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        color: "#3918D9",
                        backgroundColor: "white",
                        boxShadow: "none",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#3918D9",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <Box sx={{ marginRight: 1 }}>{subItem.icon}</Box>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: "left",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: 14,
                          ml: 1,
                        }}
                      >
                        {subItem.text.toUpperCase()}
                      </Typography>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      <List>
        {itemsCustomerOnly.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ ml: 2, mt: 0.5 }}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                color: "#3918D9",
                backgroundColor: "white",
                boxShadow: "none",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#3918D9",
                  boxShadow: "none",
                },
              }}
            >
              <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
              <Typography
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>

      <List>
        {itemsWorker.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ ml: 2 }}>
              <Button
                variant="contained"
                onClick={handleWorkerTabClick}
                sx={{
                  width: 200,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "#3918D9",
                  backgroundColor: "white",
                  boxShadow: "none",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#3918D9",
                    boxShadow: "none",
                  },
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.text.toUpperCase()}
                  </Typography>
                </Box>
                <ExpandMoreIcon
                  sx={{
                    transition: "transform 0.3s",
                    transform: workerOpen ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
              </Button>
            </ListItem>
            <Collapse in={workerOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem key={subItem.text} disablePadding sx={{ ml: 4 }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: 180,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        color: "#3918D9",
                        backgroundColor: "white",
                        boxShadow: "none",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#3918D9",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <Box sx={{ marginRight: 1 }}>{subItem.icon}</Box>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: "left",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: 14,
                          ml: 1,
                        }}
                      >
                        {subItem.text.toUpperCase()}
                      </Typography>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      <List>
        {itemsSupplier.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ ml: 2 }}>
              <Button
                variant="contained"
                onClick={handleSupplierTabClick}
                sx={{
                  width: 200,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "#3918D9",
                  backgroundColor: "white",
                  boxShadow: "none",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#3918D9",
                    boxShadow: "none",
                  },
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.text.toUpperCase()}
                  </Typography>
                </Box>
                <ExpandMoreIcon
                  sx={{
                    transition: "transform 0.3s",
                    transform: supplierOpen ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
              </Button>
            </ListItem>
            <Collapse in={supplierOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem key={subItem.text} disablePadding sx={{ ml: 4 }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: 180,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        color: "#3918D9",
                        backgroundColor: "white",
                        boxShadow: "none",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#3918D9",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <Box sx={{ marginRight: 1 }}>{subItem.icon}</Box>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: "left",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: 14,
                          ml: 1,
                        }}
                      >
                        {subItem.text.toUpperCase()}
                      </Typography>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
