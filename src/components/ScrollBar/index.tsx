import { Box, Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { products } from "../../utlis/constants";
import { useRef } from "react";

export const ScrollBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (val : string) => {
    if(val === "left"){
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    } else {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  return (
    <Box sx={{ width: "100%", position: "relative", "&:hover .scroll-arrow": { opacity: 1 } }}>
      <Typography sx={{ fontSize: "24px", fontWeight: 600, marginLeft: "100px" }}>
        Rolling paper & tobacco
      </Typography>

      <Box
        component="div"
        className="scroll-arrow"
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          position: "absolute",
          right: "70px",
          top: "150px",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={() => handleScroll("left")}
      >
        <ArrowForwardIosIcon />
      </Box>
      <Box
        component="div"
        className="scroll-arrow"
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          position: "absolute",
          left: "80px",
          top: "150px",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={() => handleScroll("right")}
      >
        <ArrowBackIosNewIcon />
      </Box>

      <Box
        component="div"
        ref={scrollRef}
        sx={{
          width: "88%",
          overflowY: "hidden",
          scrollbarWidth: "none",
          display: "flex",
          marginTop: "10px",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "20px",
          marginLeft: "100px",
          marginRight: "30px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {products?.map((item) => (
          <Box
            component="div"
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              height: "290px",
              boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
              border: "0.5px solid rgb(232, 232, 232)",
              gap: "0.125rem",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            <Box component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
              <img style={{ width: "220px", objectFit: "contain" }} src={item.image1} />
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
            <Typography sx={{ fontSize: "12px", color: "#666666", margin: "5px" }}>
              {item.description}
            </Typography>
            <Box component="div" sx={{ paddingRight: "6px", paddingLeft: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", placeItems: "center" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "12px", fontWeight: 600 }} />
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>{item.price}</Typography>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};