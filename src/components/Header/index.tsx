import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  Typography,
  Divider,
} from "@mui/material";
import React, { useCallback } from "react";
import "./index.css";

// **Extracted Search Bar Component**
const SearchBar = () => {
  const placeholderTexts = [
    'Search "milk"',
    'Search "bread"',
    'Search "chips"',
  ];
  const [placeholder, setPlaceholder] = React.useState(placeholderTexts[0]);
  const [animationClass, setAnimationClass] = React.useState(""); // Control animation class

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimationClass("move-up"); // Start animation
      setTimeout(() => {
        index = (index + 1) % placeholderTexts.length;
        setPlaceholder(placeholderTexts[index]); // Update placeholder
        setAnimationClass(""); // Reset animation
      }, 600);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <SearchIcon
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#666",
        }}
      />
      <input
        type="text"
        className="search-input"
        style={{
          width: "97%",
          padding: "12px",
          paddingLeft: "40px",
          fontSize: "16px",
          border: "0.5px solid #ccc",
          borderRadius: "15px",
          outline: "none",
          caretColor: "transparent",
        }}
      />
      <span className={`placeholder-text ${animationClass}`}>
        {placeholder}
      </span>
    </Box>
  );
};

export const Header: React.FC = () => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  // **Using useCallback for Stable Function References**
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        height: "70px",
      }}
    >
      <Typography
        sx={{
          color: "rgb(255, 205, 113)",
          fontSize: "40px",
          fontWeight: 800,
          marginLeft: "15px",
        }}
      >
        blink<span style={{ color: "green" }}>it</span>
      </Typography>
      <Divider
        orientation="vertical"
        sx={{ marginLeft: "20px", marginRight: "15px", height: "70px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15px",
          justifyContent: "left",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Delivery in 16 minutes
        </Typography>
        <Typography
          sx={{ fontSize: "15px", display: "flex", alignItems: "center" }}
        >
          2-93/9, 1st Floor, 3 Cube Tower..
          <ArrowDropDownIcon
            onClick={handleClickOpen}
            sx={{ marginLeft: "8px", cursor: "pointer", fontSize: "28px" }}
          />
        </Typography>
      </Box>

      {/* **Dialog Component** */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

        sx={{
          position:"absolute",
        bottom:"580px",
        right:"1050px",
        
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontSize: "13px" }}>
          Change Location
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers={false}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              width: "130px",
              fontSize: "9px",
              height: "35px",
            }}
          >
            Detect my location
          </Button>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
          >
            <Divider sx={{ width: "10px" }} />
            <Typography
              sx={{
                color: "#bbb",
                border: "solid 1px #ccc",
                backgroundColor: "#f9f9f9",
                borderRadius: "50%",
                display: "flex",
                fontSize: "10px",
                padding: "6px",
              }}
            >
              OR
            </Typography>
            <Divider sx={{ width: "10px", marginRight: "5px" }} />
            <input
              placeholder="Search delivery location"
              style={{
                height: "35px",
                fontFamily: "Inter, serif",
                borderRadius: "10px",
                paddingLeft: "10px",
                width: "200px",
                border: "solid 1px #ccc",
              }}
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>

      {/* **Search Bar** */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
          width: "48%",
        }}
      >
        <SearchBar />
      </Box>

      <Typography
        sx={{
          width: "200px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: 100,
        }}
      >
        Login
      </Typography>
      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          height: "50px",
          fontWeight: "bold",
        }}
      >
        <ShoppingCartCheckoutIcon sx={{ marginRight: "8px" }} />
        My Cart
      </Button>
    </Box>
  );
};
