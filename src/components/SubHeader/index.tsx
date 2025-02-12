import { Box,  Typography } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { moreItems } from "../../utlis/constants";

export const SubHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const headLines = [
    "Vegetables & Fruits",
    "Dairy & Brekfast",
    "Munchies",
    "Cold Drinks & Juices",
    "Instant & Frozen Food",
    "Tea, Coffee & Health Drinks",
    "Bakery & Biscuits",
  ];


  return (
    <Box
      sx={{
        boxShadow: " 0 2px 3px 0 rgba(0, 0, 0, 0.15)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        // padding: "15px",
        height: "50px",
        // border:"1px solid red"
      }}
    >
      {headLines.map((headLine) => {
        return (
          <Box sx={{ '&:hover': { backgroundColor: '#f0f0f0'} ,padding:"14px" ,}}>
            <Typography sx={{fontSize:"14px",color:"#666666"}}>{headLine}</Typography>
          </Box>
        );
      })}
      <Box onClick={handleClick} sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <Typography sx={{fontSize:"14px",color:"#666666"}}>More</Typography>
        <KeyboardArrowDownIcon sx={{ color: "#666666" }} />
      </Box>
      <Menu
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      maxHeight: '700px',
      overflowY: 'auto',
   
    }
  }}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
>
  {moreItems.map((item, index) => (
    <MenuItem
      key={index}
      onClick={handleClose}
      sx={{ borderBottom: "0.5px solid rgb(215, 207, 207)" }}
    >
      <Typography sx={{ fontSize: "14px", color: "#666666", padding: "5px" }}>
        {item}
      </Typography>
    </MenuItem>
  ))}
</Menu>

    </Box>
  );
};
