import { Box, Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { products } from "../../utlis/constants";
import React from "react";
import Skeleton from "@mui/material/Skeleton"

export const BannerRightsideScrollBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("option1"); // Default selected option
  const options = ["option1", "option2", "option3"];

  return (
    <Box
      sx={{
        border: "0.5px solid #eee ",
        width: "80%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          border: "0.5px solid #eee",
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginLeft: "10px" }}>
          Buy Rolling Paper Online
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            paddingRight: "10px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#666666" }}>
            Sort By
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {/* Input Box (Dropdown Trigger) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "0.5px solid #eee",
                cursor: "pointer",
                padding: "5px 10px",
              }}
              onClick={() => setOpen(!open)}
            >
              <Typography sx={{ fontSize: "14px",width:"190px" }}>{text}</Typography>
              <KeyboardArrowDownIcon />
            </Box>

            {/* Dropdown Options */}
            {open && (
              <Box
                sx={{
                  border: "1px solid #eee",
                  width: "235px",
                  position: "absolute",
                  top: "35px",
                  zIndex: "10",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  
                  overflow: "hidden",
                }}
              >
                {options.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 10px",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                      borderBottom: "1px solid #eee",
                     
                    }}
                    onClick={() => {
                      setText(item);
                      setOpen(false);
                    }}
                  >
                    <input
                      type="radio"
                      name="sortOptions"
                      value={item}
                      checked={text === item}
                      onChange={() => setText(item)}
                      style={{ marginRight: "8px" ,accentColor: "green", }}
                    />
                    <Typography sx={{ fontSize: "14px" ,color: text === item ? "green" : "black",}}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Product Grid */}
      <Box
        sx={{
          width: "98%",
          height: "900px",
          backgroundColor: "#F4F6FB",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
          padding: "10px",
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {products?.map((item) => (
          item ? <Box
            component="div"
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "230px",
              height: "290px",
              boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
              border: "0.5px solid rgb(232, 232, 232)",
              gap: "0.125rem",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "10px",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "220px", objectFit: "contain" }}
                src={item.image1}
                alt="product"
              />
            </Box>

            <Box
              component="div"
              sx={{
                fontSize: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                gap: "0.125rem",
                width: "44px",
                marginLeft: "5px",
                padding: "3px",
              }}
            >
              <img style={{ width: "10px" }} src={item.image2} alt="" />
              {item.deliveryTime}
            </Box>
            <Typography
              sx={{
                margin: "4px",
                fontSize: "13px",
                fontWeight: 600,
                height: "36px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}
            >
              {item.description}
            </Typography>
            <Box
              component="div"
              sx={{
                paddingRight: "6px",
                paddingLeft: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  placeItems: "center",
                }}
              >
                <CurrencyRupeeIcon sx={{ fontSize: "12px", fontWeight: 600 }} />
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  {item.price}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                sx={{
                  border: "0.5px solid green",
                  color: "green",
                  backgroundColor: "rgb(236, 255, 236)",
                }}
              >
                ADD
              </Button>
            </Box>
          </Box> : <Skeleton variant="rectangular" width={230} height={290} />
        ))}
      </Box>
    </Box>
  );
};
