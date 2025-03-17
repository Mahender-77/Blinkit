import { Box, Typography } from "@mui/material";
import { Categories, useFulLinks } from "../../utlis/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import React from "react";
export const Footer = () => {
  // const [selectedValue, setSelectedValue] = React.useState("Option 1");
  // const [isOpen, setIsOpen] = React.useState(false);

  // const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <Box>
      <Box
        sx={{
          // height: "100px",
          width: "90%",
          margin: "auto",
          // border: "1px solid red",

          display: "flex",
          marginTop: "40px",
          padding: "30px",
          paddingLeft: "160px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            width: "422px",
            height: "361px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Useful Links
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "12px 24px",
            }}
          >
            {useFulLinks.map((el) => (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#666666",
                  cursor: "pointer",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                {el}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Categories
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "green" }}>
              see all
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "12px 100px",
              lineHeight: "18px",
            }}
          >
            {Categories.map((el) => (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#666666",
                  cursor: "pointer",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                {el}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          color: "#666666",
        }}
      >
        <Box>
          <Typography>© Blink Commerce Private Limited, 2016-2025</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography>Dowload App</Typography>
          <img
            width="92px"
            src="https://blinkit.com/d61019073b700ca49d22.png"
            alt=""
          />
          <img
            width="92px"
            src="https://blinkit.com/8ed033800ea38f24c4f0.png"
            alt=""
          />
          <FacebookIcon sx={{ fontSize: "40px", color: "#3b5998" }} />
          <InstagramIcon sx={{ fontSize: "40px", color: "#e4405f" }} />
          <TwitterIcon sx={{ fontSize: "40px", color: "#00acee" }} />
          <LinkedInIcon sx={{ fontSize: "40px", color: "#0e76a8" }} />
        </Box>
      </Box>
      {/* <div className="relative w-64 mx-auto mt-10">
      
        <input
          type="text"
          value={selectedValue}
          readOnly
          className="border p-2 w-full rounded cursor-pointer bg-white"
          onClick={() => setIsOpen(!isOpen)}
        />

       
        {isOpen && (
          <div className="absolute w-full mt-1 border rounded bg-white shadow">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedValue === option}
                  onChange={() => {
                    setSelectedValue(option);
                    setIsOpen(false);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div> */}
    </Box>
  );
};
